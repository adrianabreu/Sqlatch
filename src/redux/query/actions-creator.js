import fetch from 'isomorphic-fetch';
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

export function set_query_fetching({query_id = 0, fetching = true}){
   return {
      type: types.SET_QUERY_FETCHING,
      payload : {
         query_id,
         fetching
      }
   }
}

export function set_query_data({query_id = 0, query_data = []}){
   return {
      type : types.SET_QUERY_DATA,
      payload: {
         query_id,
         query_data
      }
   }
}

export function fetch_query_data({query_id = 0, query_content = ''}){   
   let url = 'http://46.101.153.159:8080/sqlatch/query?query=';
   return dispatch => {
      dispatch(set_query_fetching({query_id}));
      return fetch(url+query_content)
         .then(function(response){
            if(response.ok){
               return response.json();
            }            
         })
         .then(json => dispatch(set_query_data({query_id,query_data:json})))
         .then(json => dispatch(set_query_fetching({query_id, fetching: false})))
   }   
}