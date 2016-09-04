import {combineReducers} from 'redux'
import {query_reducer} 	 from './query/reducers';

let combined_reducers = combineReducers({
  queries_manager : query_reducer
});

export {combined_reducers};