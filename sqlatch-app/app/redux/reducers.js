let sqlatch = sqlatch || {};
let {
   ADD_QUERY_NODE, 
   REMOVE_QUERY_NODE,
   VALIDATE_QUERY_CONTENT
} = sqlatch.redux.types;

function query(state = {nodes: []}, action)
{
   switch(action.type){
      case ADD_QUERY_NODE:
         return Object.assign({}, state, {
            nodes: state.nodes.concat([action.node])
         });
      case REMOVE_QUERY_NODE:         
         return Object.assign({}, state, {
            nodes: _.filter(_.clone(state.nodes), (e)=>
               e.id !== action.id
            )
         });

         // _.filter(
         //    _.clone(state.nodes), (e)=>
         //                e.id !== action.id
         // )

      default:
         return state;
   }
}

sqlatch.redux.reducers = {
   query
};
