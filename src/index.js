import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configStore';
import createDevToolsWindow from './utils/createDevToolsWindow';
import './sass/style.scss';

const store = configureStore();
createDevToolsWindow(store);

render(
  <Provider store={store}>
    <Router routes={routes(store)} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
