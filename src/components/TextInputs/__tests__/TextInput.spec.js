import React from 'react';
import { mount, shallow } from 'enzyme';
import TextInput from '../TextInput';

describe('TextInput', () => {
  const props = {
    name: 'name',
    placeholder: 'Full name',
    type: 'text',
    pattern: null,
    className: 'form-control form-control-lg',
    serverError: '',
    label: 'Name on card',
    required: true,
    parent: {
      setState: jest.fn(),
      state: {}
    }
  };

  const setup = (shouldMount = false) => {
    const wrapper = shouldMount
      ? mount(<TextInput {...props} />)
      : shallow(<TextInput {...props} />);
    return wrapper;
  };

  test('renders without failures', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  test('it should focus/blur the input element', () => {
    const wrapper = setup(true);
    wrapper.instance().focus = jest.fn();
    wrapper.instance().blur = jest.fn();
    wrapper.update();

    wrapper.find('input').simulate('focus');
    wrapper.find('input').simulate('blur');
    expect(wrapper.instance().focus).toBeTruthy();
    expect(wrapper.instance().blur).toBeTruthy();
  });
});
