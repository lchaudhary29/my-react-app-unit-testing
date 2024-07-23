import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('<MyComponent />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});