let sqlatch = sqlatch || {};

(function(sqlatch) { 
   
   let {
      ADD_QUERY,
      ADD_QUERY_NODE, 
      REMOVE_QUERY_NODE,
      VALIDATE_QUERY_CONTENT,
      BUILD_QUERY_CONTENT
   } = sqlatch.redux.query.types;

   function query_reducer(state = {nodes: []}, action)
   {
      switch(action.type){
         case ADD_QUERY:
            return state;
            
         case ADD_QUERY_NODE:
            return Object.assign({}, state, {
               nodes: state.nodes.concat([action.node])
            });
         case REMOVE_QUERY_NODE:         
            return Object.assign({}, state, {
               nodes: _.filter(_.clone(state.nodes), (n)=>
                  n.id !== action.id
               )
            });
         case BUILD_QUERY_CONTENT:
            return Object.assign({}, state, {
               content: _.join(_.map(state.nodes, (n) => n.keyword),' ')
            });
         default:
            return state;
      }
   }

   sqlatch.redux.query.reducers = query_reducer;

})(sqlatch);