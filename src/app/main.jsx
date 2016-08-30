let Redux    = window.Redux;
let sqlatch  = sqlatch || {};

let store    = Redux.createStore(sqlatch.redux.combined_reducers);
let Provider = ReactRedux.Provider;

let App      = sqlatch.react.components.App;

ReactDOM.render(
   <Provider store={store}>
      <App/>
   </Provider>,
   document.getElementById('query-node-wrapper')
);

// estado inicial
console.log(store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);


