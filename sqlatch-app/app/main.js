let Redux   = window.Redux;
let sqlatch = sqlatch || {};
let { 
   add_query_node,
   remove_query_node,
   validate_query_content 
} = sqlatch.redux.creators;

let {
   query
} = sqlatch.redux.reducers;

let sqlatch_app = Redux.combineReducers({
   query
});

let store = Redux.createStore(sqlatch_app);
// console.log(store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(add_query_node({
   id     : 1,
   keyword: 'SELECT',
   content: '*'
}));

store.dispatch(add_query_node({
   id     : 2,
   keyword: 'FROM',
   content: 'DEPTNO'
}));

store.dispatch(remove_query_node(1));