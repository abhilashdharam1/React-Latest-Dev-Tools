import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('should test', () => {
  it('should work', () => {
    const wrapper = shallow(<App />,)
    expect(true).toBe(true);
  });
});
