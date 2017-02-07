import Immutable from 'immutable';
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Contacts from '../../src/components/Contacts';
import dataMock from '../../__mocks__/dataMock';

const propsStub = {
  activedContact: Immutable.fromJS(dataMock[0]),
  contacts: Immutable.fromJS([dataMock[0], dataMock[1]]),
  isLoading: false,
  onContactDetails: jest.fn(),
};

describe('<Contacts />', () => {
  describe('render()', () => {
    it('should render Contact list when isLoading is false', () => {
      const props = Object.assign({}, propsStub);
      const wrapper = shallow(
        <Contacts {...props} />
      );

      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('should render Contact list when isLoading is true', () => {
      const props = Object.assign({}, propsStub, {
        isLoading: true,
      });
      const wrapper = shallow(
        <Contacts {...props} />
      );

      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
  });
});
