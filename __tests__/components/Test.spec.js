import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Test from '../../src/components/Test';

describe.only('<Test />', () => {
  it('should show default text when inital load', () => {
    const wrapper = shallow(
      <Test />
    );

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should show diff text when it is clicked', () => {
    const wrapper = shallow(
      <Test />
    );

    wrapper.find('.test-class').simulate('click');

    expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
