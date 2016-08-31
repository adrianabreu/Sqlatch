import expect from 'expect'

import {ADD_QUERY_NODE} from '../src/redux/query/types';
import {add_query_node} from '../src/redux/query/actions';

describe('redux query actions', () => {
	it('should create an action to add a query node', () => {			
		// force commit
		const node_to_add = {
			id : 999
		};
		const expected_action = {
			type : ADD_QUERY_NODE,
			node : node_to_add
		};
		expect(add_query_node({
			id : 998
		})).toEqual(expected_action);
	});
});