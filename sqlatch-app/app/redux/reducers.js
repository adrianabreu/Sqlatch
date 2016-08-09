let sqlatch = sqlatch || {};
let types   = sqlatch.redux.types;

function nodes(state = [], action)
{
   switch(action.type){
      case types.ADD_NODE:
         return state.concat([action.node]);
      case types.REMOVE_NODE:
         return state;
      default:
         return state;
   }
}

function is_valid(state = false, action)
{   
   switch(action.type){
      case types.VALIDATE_QUERY_CONTENT:         
         return action.is_valid;
      default:
         return state;
   }
}

sqlatch.redux.reducers = {
   nodes, is_valid
};
