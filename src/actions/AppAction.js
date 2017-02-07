import { fetchContacts } from '../utils/contactsHelper';

export const CONTACTS_LOADING = 'CONTACTS_LOADING';
export const CONTACTS_SUCCESS_LOADED = 'CONTACTS_SUCCESS_LOADED';
export const CONTACT_DETAILS_SHOWN = 'CONTACT_DETAILS_SHOWN';

export function contactsLoading() {
  return {
    type: CONTACTS_LOADING,
  };
}

export function contactsLoaded(contacts) {
  return {
    type: CONTACTS_SUCCESS_LOADED,
    contacts,
  };
}

export function onAppEnter(fetch, store) {
  store.dispatch(contactsLoading());
  fetchContacts(fetch, 'http://jsonplaceholder.typicode.com/users', store.dispatch, contactsLoaded);
}

export function showContactDetails(contact) {
  return {
    type: CONTACT_DETAILS_SHOWN,
    contact,
  };
}

export function onContactDetails(contact) {
  return dispatch => dispatch(showContactDetails(contact));
}
