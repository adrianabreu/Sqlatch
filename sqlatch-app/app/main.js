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

ReactDOM.render(
   React.createElement(sqlatch.react.components.QueryNode),
   document.getElementById('query-node-wrapper')
);

let sqlatch_app = Redux.combineReducers({
   query
});

let store = Redux.createStore(sqlatch_app);
// estado inicial
console.log(store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);
