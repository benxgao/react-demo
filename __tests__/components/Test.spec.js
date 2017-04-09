import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Test from '../../src/components/Test';

describe.skip('<Test />', () => {
  it('init state', () => {
    const wrapper = shallow(
      <Test />
    );

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('click', () => {
    const wrapper = shallow(
      <Test />
    );

    wrapper.find('.test-class').simulate('click');

    expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
