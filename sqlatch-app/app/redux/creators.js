let sqlatch   = sqlatch || {};
sqlatch.redux = sqlatch.redux || {};
let types     = sqlatch.redux.types;

function add_node(node){
   return {type : types.ADD_NODE, node};
}

function remove_node(id){
   return {type : types.REMOVE_NODE, id};
}

function validate_query_content(is_valid){
   return {type : types.VALIDATE_QUERY_CONTENT, is_valid};
}

sqlatch.redux.creators = {
   add_node, remove_node, validate_query_content
};
