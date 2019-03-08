import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App.js';
import store from './store/store.js';
import { Provider } from 'react-redux';
import handleVideoSearch from './actions/search.js';

//TODO: Import the Provider component from 'react-redux' here!

//TODO: Use the Provider component to make your store available to
//  the rest of your app.

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('app'),
  () => handleVideoSearch('redux tutorial')(store.dispatch)
);
