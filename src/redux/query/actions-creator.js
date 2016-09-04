// todo... renombrar como action-creators
// lo que devuelven las funciones son las acciones en sí, 
// las funciones en si NO son las acciones.

import * as types from './types';

export function add_query({id, nodes = []}){
   return {
	   	type    : types.ADD_QUERY, 
	   	payload : { 
            id, 
            nodes 
         }
   };
}

export function add_query_node({query_id = 0,node = {}}){
   return {
	   	type    : types.ADD_QUERY_NODE, 
	   	payload : { 
            query_id ,
            node 
         }
   };
}

// todo ...
// export function remove_query_node(id){
//    return {
//    	type: types.REMOVE_QUERY_NODE, 
//    	id
//    }
// }

// todo ...
// export function validate_query_content(is_valid){
//    return {
//    	type : types.VALIDATE_QUERY_CONTENT, 
//    	is_valid
//    };
// }

export function build_query_content({query_id = 0}){
   return {
      type    : types.BUILD_QUERY_CONTENT,
      payload : {query_id}
   };
}