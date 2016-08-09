let Redux       = window.Redux;
let sqlatch     = sqlatch || {};
let creators    = sqlatch.redux.creators;
let reducers    = sqlatch.redux.reducers;

let sqlatch_app = Redux.combineReducers({
   nodes : reducers.nodes, is_valid : reducers.is_valid
});

let store = Redux.createStore(sqlatch_app);
console.log(store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(creators.add_node({
   id     : 1,
   keyword: 'SELECT',
   content: '*'
}));
store.dispatch(creators.add_node({
   id     : 2,
   keyword: 'FROM',
   content: 'DEPTNO'
}));

// store.dispatch(creators.remove_node());

store.dispatch(creators.validate_query_content(true));
store.dispatch(creators.validate_query_content(false));
store.dispatch(creators.validate_query_content(true));

store.dispatch(creators.add_node({
   id     : 2,
   keyword: 'FROM',
   content: 'DEPTNO'
}));

store.dispatch(creators.validate_query_content(false));