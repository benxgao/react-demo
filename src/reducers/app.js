import Immutable from 'immutable';
import {
  CONTACTS_LOADING,
  CONTACTS_SUCCESS_LOADED,
  CONTACT_DETAILS_SHOWN,
} from '../actions/AppAction';

const DEFAULT_STATE = Immutable.Map({
  isLoading: false,
  contacts: Immutable.List(),
  activedContact: Immutable.Map({}),
});

export default function tab(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CONTACTS_LOADING:
      return state.set('isLoading', true);

    case CONTACTS_SUCCESS_LOADED:
      return state.merge({
        isLoading: false,
        contacts: action.contacts,
      });

    case CONTACT_DETAILS_SHOWN:
      return state.set('activedContact', action.contact);

    default:
      return state;
  }
}
