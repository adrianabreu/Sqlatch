// sudo npm install --save redux
// sudo npm install --save react-redux
// sudo npm i --save-dev babel-plugin-lodash babel-cli babel-preset-es2015

import * as redux_query_actions from './redux/query/actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.css';

import React                  from 'react';
import { render      }        from 'react-dom';
import { createStore }        from 'redux';
import { Provider    }        from 'react-redux'
import { combined_reducers }  from './redux/combined-reducers';

let store = createStore(combined_reducers);

// estado inicial
console.log(store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);
