let Redux    = window.Redux;
let sqlatch  = sqlatch || {};

let store    = Redux.createStore(sqlatch.redux.combined_reducers);
let Provider = ReactRedux.Provider;

console.log(sqlatch);

ReactDOM.render(
   <Provider store={store}>
      <div> TEST </div>
   </Provider>,
   document.getElementById('query-node-wrapper')
);

// estado inicial
console.log(store.getState());
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);
// todo ... mover al componente de añadido
// store.dispatch(add_query_node({
//    id     : Math.floor(Math.random()*10),
//    keyword: this.keyword,
//    content: '*'
// }));