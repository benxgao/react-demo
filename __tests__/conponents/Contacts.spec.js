import Immutable from 'immutable';
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
// import { mount } from 'enzyme';
// import { mountToJson } from 'enzyme-to-json';
import Contacts from '../../src/components/Contacts';
import dataMock from '../../__mocks__/dataMock';

const contactStub = dataMock[0];
const propsStub = {
  activedContact: Immutable.fromJS(contactStub),
  contacts: Immutable.fromJS([contactStub]),
  isLoading: false,
  onContactDetails: jest.fn(),
};

describe('<Contacts />', () => {
  describe('render()', () => {
    it('should render <Preloader /> when isLoading is true', () => {
      const props = Object.assign({}, propsStub, {
        isLoading: true,
      });
      const wrapper = shallow(
        <Contacts {...props} />
      );

      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('should render <Contact /> list when isLoading is false', () => {
      const props = Object.assign({}, propsStub);
      const wrapper = shallow(
        <Contacts {...props} />
      );

      expect(shallowToJson(wrapper.find('.contacts'))).toMatchSnapshot();
    });
  });

  describe('onClick()', function() {
    it('should call onContactDetails function', () => {
      const spy = jest.fn();
      const props = Object.assign({}, propsStub, {
        onContactDetails: spy
      });
      const wrapper = shallow(
        <Contacts {...props} />
      );

      wrapper.find('.contacts__li').simulate('click');
      expect(spy).toHaveBeenCalledWith(Immutable.fromJS(contactStub));
    });
  });
});
