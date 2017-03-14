import Immutable from 'immutable';
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Contact from '../../src/components/Contact';
import dataMock from '../../__mocks__/dataMock';

const propsStub = {
  classes: 'contact css classnames',
  contact: Immutable.fromJS(dataMock[0]),
};

describe('<Contact />', () => {
  describe('render()', () => {
    it('should render Contact list when isLoading is false', () => {
      const props = Object.assign({}, propsStub);
      const wrapper = shallow(
        <Contact {...props} />
      );

      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
  });
});
