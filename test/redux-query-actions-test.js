import expect from 'expect';
import { isFSA } from 'flux-standard-action';

import {ADD_QUERY_NODE} from '../src/redux/query/types';
import {add_query_node} from '../src/redux/query/actions-creator';

describe('redux query actions creator', () => {
	it('should create an action to add a query node', () => {			
		// force commit
		const node_to_add = {
			id : 999
		};
		const expected_action = {
			type : ADD_QUERY_NODE,
			payload : {
				node : node_to_add
			}
		};
		expect(add_query_node(node_to_add)).toEqual(expected_action);
	});
});

describe('redux query actions creators Flux Standard Action compliant', ()=> {
	it('action add a query node should be FSA compliant', () =>{
		expect(isFSA(add_query_node())).toBe(true); 
	});
});