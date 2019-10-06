import React from 'react';
import { mount, shallow } from 'enzyme';
import Thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import PaymentMethod from '../PaymentMethodContainer';

describe('PaymentMethod', () => {
  const mockStore = configureStore([Thunk]);
  const store = mockStore({});
  const defaultProps = {
    renderTextInput: jest.fn(),
    renderButton: jest.fn(),
    handleButtonClick: jest.fn(),
    status: true
  };

  const cardDetails = {
    name: 'Baker Sekitoleko',
    number: '1234567890123456',
    expiry: '09/22',
    cvv: '123',
    zip: '00256'
  };

  const setup = (newProps, shouldMount = false) => {
    const props = { ...defaultProps, ...newProps };
    const wrapper = shouldMount
      ? mount(
          <Provider store={store}>
            <PaymentMethod {...props} />
          </Provider>
        )
      : shallow(
          <Provider store={store}>
            <PaymentMethod {...props} />
          </Provider>
        );
    return wrapper;
  };

  const addInputValue = (wrapper, input, value) =>
    wrapper.find(input).simulate('change', { target: { value } });

  test('it renders without errors', () => {
    const wrapper = setup({});
    expect(wrapper).toMatchSnapshot();
  });

  test('it should submit the form successfully', () => {
    const wrapper = setup({ status: false }, true);

    addInputValue(wrapper, '#name', cardDetails.name);
    addInputValue(wrapper, '#number', cardDetails.number);
    addInputValue(wrapper, '#expiry', cardDetails.expiry);
    addInputValue(wrapper, '#cvv', cardDetails.cvv);
    addInputValue(wrapper, '#zip', cardDetails.zip);

    const button = wrapper.find("[data-test='component-button-submit']");
    button.simulate('click');

    const component = wrapper.find('PaymentMethod').instance();
    expect(component.state.message.trim().length).toBeGreaterThan(0);
  });

  test('it should submit the form with errors', () => {
    const wrapper = setup({ status: false }, true);

    addInputValue(wrapper, '#name', cardDetails.name);
    addInputValue(wrapper, '#number', cardDetails.number);

    const button = wrapper.find("[data-test='component-button-submit']");
    button.simulate('click');

    const component = wrapper.find('PaymentMethod').instance();
    expect(component.state.message.trim().length).toBeGreaterThan(0);
  });

  test('it should render the toggle button', () => {
    const wrapper = setup({ status: true }, true);
    expect(wrapper).toMatchSnapshot();
  });
});
