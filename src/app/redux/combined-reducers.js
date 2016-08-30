import {combineReducers} from 'redux'
import {query_reducer} 	 from './query/reducers';

let combined_reducers = combineReducers({
  query : query_reducer
});

export {combined_reducers};