let sqlatch = sqlatch || {};

<<<<<<< HEAD
(function(sqlatch) { 
   
   let {
      ADD_QUERY_NODE, 
      REMOVE_QUERY_NODE,
      VALIDATE_QUERY_CONTENT,
      BUILD_QUERY_CONTENT
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
=======
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
>>>>>>> 39b69bd... añadido componentes React para realizar las primeras pruebas de integración Redux-React. Añadido Bootstrap. Añadido Fontsawesome
   }

   sqlatch.redux.reducers = {
      query
   };

})(sqlatch);
