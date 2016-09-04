import * as types from './types';
import _ from 'lodash';

export function query_reducer(state = {nodes: []}, action)
{
   switch(action.type)
   {
      // todo ...
      // case types.ADD_QUERY:
      //    return state;
         
      case types.ADD_QUERY_NODE:
         return Object.assign({}, state, {
            nodes: state.nodes.concat([action.payload.node])
         });

      // todo ...   
      // case types.REMOVE_QUERY_NODE:         
      //    return Object.assign({}, state, {
      //       nodes: _.filter(_.clone(state.nodes), (n)=>
      //          n.id !== action.id
      //       )
      //    });

      case types.BUILD_QUERY_CONTENT:
         return Object.assign({}, state, {
            content: _.join(_.map(state.nodes, (n) => n.keyword),' ')
         });

      default:
         return state;
   }
}
