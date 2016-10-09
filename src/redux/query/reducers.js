import * as types from './types';
import _ from 'lodash';

export function query_reducer(state = {queries: []}, action)
{
   switch(action.type)
   {
      case types.ADD_QUERY:
         return Object.assign({}, state, {
            queries : state.queries.concat(action.payload)
         });
         
      case types.ADD_QUERY_NODE:

         // we will search in the copy
         // todo, variable naming
         let _queries_1 = _.clone(state.queries);         
         // search the query by id to add the node
         _queries_1     = _.map(_queries_1,(q)=>{
            if(q.id === action.payload.query_id){
               q.nodes = q.nodes.concat([action.payload.node]);         
            }
            return q;
         });

         return Object.assign({}, state, {
            queries: _queries_1
         });

      // todo ...   
      // case types.REMOVE_QUERY_NODE:         
      //    return Object.assign({}, state, {
      //       nodes: _.filter(_.clone(state.nodes), (n)=>
      //          n.id !== action.id
      //       )
      //    });

      case types.BUILD_QUERY_CONTENT:

         // todo, variable naming
         let _queries_2 = _.clone(state.queries);   
         _queries_2     = _.map(_queries_2,(q)=>{
            if(q.id === action.payload.query_id){
               q.content = _.join(_.map(q.nodes, (n) => n.keyword),' ')         
            }
            return q;
         });

         return Object.assign({}, state, {
            queries: _queries_2
         });

      case types.SET_QUERY_FETCHING:

         let _queries_3 = _.clone(state.queries);   
         let query_to_set_fetching = _.map(_queries_3,(q)=>{
            if(q.id === action.payload.query_id){
               q.fetching = action.payload.fetching;                        
            }
            return q;
         });

         return Object.assign({}, state, {
            queries: _queries_3
         });

      case types.SET_QUERY_DATA:

         let _queries_4 = _.clone(state.queries);   
         let query_to_set_data = _.map(_queries_4,(q)=>{
            if(q.id === action.payload.query_id){
               q.data = action.payload.query_data;   
               // temporal, just for showing result
               q.parsed_data = JSON.stringify(q.data);
            }
            return q;
         });

         return Object.assign({}, state, {
            queries: _queries_4
         });         

      default:
         return state;
   }
}
