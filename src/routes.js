import React from 'react';
import { Route } from 'react-router';
import fetch from 'isomorphic-fetch';
import Contacts from './containers/Contacts';
import { onAppEnter } from './actions/AppAction';

export default (store) => {
  const appEnter = () => onAppEnter(fetch, store);

  return (
    <Route path="/" component={Contacts} onEnter={appEnter} />
  );
};
