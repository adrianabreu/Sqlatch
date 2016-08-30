// sudo npm install --save redux
// sudo npm install --save react-redux
// sudo npm i --save-dev babel-plugin-lodash babel-cli babel-preset-es2015
// sudo npm install --save-dev font-awesome
// cambiar dependencia "bootstrap": "^3.3.7"
// font-awesome-css:10 -> src: url('../fonts/fontawesome-webfont.eot?#iefix&v=4.6.3') format('embedded-opentype'), url('../fonts/fontawesome-webfont.ttf?v=4.6.3') format('truetype'), url('../fonts/fontawesome-webfont.svg?v=4.6.3#fontawesomeregular') format('svg');

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
// import styles from './index.css';

import React                  from 'react';
import { render }		      from 'react-dom';
import { createStore }        from 'redux';
import { Provider }        	  from 'react-redux'

import { combined_reducers }  from './redux/combined-reducers';
import {App} 				  from './react/components/app';

let store = createStore(combined_reducers);

// estado inicial
console.log(store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

render(
   <Provider store={store}>
      <App/>
   </Provider>,
   document.getElementById('query-node-wrapper')
);