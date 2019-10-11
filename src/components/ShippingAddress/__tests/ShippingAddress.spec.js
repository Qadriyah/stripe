import React from 'react';
import { mount, shallow } from 'enzyme';
import Thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ShippingAddress from '../ShippingAddressContainer';

jest.useFakeTimers();

describe('PaymentMethod', () => {
  const mockStore = configureStore([Thunk]);
  const store = mockStore({});
  const defaultProps = {
    renderTextInput: jest.fn(),
    renderButton: jest.fn(),
    handleButtonClick: jest.fn(),
    status: true
  };

  const address = {
    name: 'Baker Sekitoleko',
    address: 'Entebbe road',
    city: 'Kampala',
    state: 'Najjanankumbi',
    zip: '00256'
  };

  const setup = (newProps, shouldMount = false) => {
    const props = { ...defaultProps, ...newProps };
    const wrapper = shouldMount
      ? mount(
          <Provider store={store}>
            <ShippingAddress {...props} />
          </Provider>
        )
      : shallow(
          <Provider store={store}>
            <ShippingAddress {...props} />
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
    const wrapper = setup({}, true);

    addInputValue(wrapper, '#name', address.name);
    addInputValue(wrapper, '#address', address.address);
    addInputValue(wrapper, '#city', address.city);
    addInputValue(wrapper, '#state', address.state);
    addInputValue(wrapper, '#zip', address.zip);

    const button = wrapper.find("[data-test='component-button-submit']");
    button.simulate('click');

    const component = wrapper.find('ShippingAddress').instance();
    expect(component.state.message.trim().length).toBeGreaterThan(0);
  });

  test('it should submit the form with errors', () => {
    const wrapper = setup({}, true);

    addInputValue(wrapper, '#name', address.name);
    addInputValue(wrapper, '#address', address.address);

    const button = wrapper.find("[data-test='component-button-submit']");
    button.simulate('click');

    const component = wrapper.find('ShippingAddress').instance();
    expect(component.state.message.trim().length).toBeGreaterThan(0);
  });

  test('it should render the toggle button', () => {
    const wrapper = setup({ status: false }, true);
    expect(wrapper).toMatchSnapshot();
  });

  test('componentDidUpdate method', () => {
    jest.advanceTimersByTime(5000);
    const wrapper = setup({ status: false }, true);
    const component = wrapper.find('ShippingAddress').instance();
    component.componentDidUpdate();
    expect(setTimeout).toHaveBeenCalled();
    expect(component.state.message.trim()).toEqual('');
  });
});
