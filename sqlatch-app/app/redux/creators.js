let sqlatch = sqlatch || {};

(function(sqlatch) {

   sqlatch.redux = sqlatch.redux || {};
   let {
      ADD_QUERY_NODE, 
      REMOVE_QUERY_NODE, 
      VALIDATE_QUERY_CONTENT,
      BUILD_QUERY_CONTENT
   } = sqlatch.redux.types;

   function add_query_node(node){
      return {type: ADD_QUERY_NODE, node};
   }

   function remove_query_node(id){
      return {type: REMOVE_QUERY_NODE, id}
   }

   function validate_query_content(is_valid){
      return {type : VALIDATE_QUERY_CONTENT, is_valid};
   }

   function build_query_content(){
      return {type : BUILD_QUERY_CONTENT};
   }

   sqlatch.redux.creators = {
      add_query_node, remove_query_node, validate_query_content, build_query_content
   };
   
})(sqlatch);