let sqlatch = sqlatch || {};

(function(sqlatch) { 

   const ADD_QUERY_NODE         = 'ADD_QUERY_NODE';
   const REMOVE_QUERY_NODE      = 'REMOVE_QUERY_NODE';
   const VALIDATE_QUERY_CONTENT = 'VALIDATE_QUERY_CONTENT';
   const BUILD_QUERY_CONTENT    = 'BUILD_QUERY_CONTENT';

   sqlatch.redux.types = {
      ADD_QUERY_NODE, REMOVE_QUERY_NODE, VALIDATE_QUERY_CONTENT, BUILD_QUERY_CONTENT
   };
   
})(sqlatch);