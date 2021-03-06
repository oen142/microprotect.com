import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import { setLocale, setTester } from './appSlice';

import App from './App';

import './google-analytics';
import './kakaotalk';
import './give-asia';

import './assets/css/main.css';

const { location } = window;

const params = new Map([...new URLSearchParams(location.search)]);

const locale = params.get('locale') || (navigator.language || 'ko').slice(0, 2);

store.dispatch(setLocale(locale));

const tester = params.get('tester') || false;

store.dispatch(setTester(tester));

const el = document.getElementById('app');
el.innerHTML = '';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  el,
);
