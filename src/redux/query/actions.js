// todo... renombrar como action-creators
// lo que devuelven las funciones son las acciones en sí, 
// las funciones en si NO son las acciones.

import * as types from './types';

export function add_query(query){
   return {type : types.ADD_QUERY, query};
}

export function add_query_node(node){
   return {type: types.ADD_QUERY_NODE, node};
}

export function remove_query_node(id){
   return {type: types.REMOVE_QUERY_NODE, id}
}

export function validate_query_content(is_valid){
   return {type : types.VALIDATE_QUERY_CONTENT, is_valid};
}

export function build_query_content(){
   return {type : types.BUILD_QUERY_CONTENT};
}