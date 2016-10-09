
import * as redux_query_action  from '../../redux/query/actions-creator';
import { connect }               from 'react-redux';
import { Query_content }         from '../components/query-content';

const mapStateToProps = (state) => {
   return {
      // content : state.queries_manager.content || 'waiting for input...'
      // content : state.queries_manager.queries[0].content || 'waiting for input...'      
      // content : 'test'
      queries : state.queries_manager.queries
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      add_query : (query_id) => {
         dispatch(redux_query_action.add_query({
            id : query_id
         }));
      },
      add_query_node : (query_id) => {
         dispatch(redux_query_action.add_query_node({
            query_id : query_id, 
            node     :{
                  id     : Math.floor(Math.random()*10),
                  // todo ... get from input
                  keyword: prompt('INSERT KEYWORD'),
                  // keyword : 'TEST',
                  content: '*'
               }
            })
         );
         dispatch(redux_query_action.build_query_content({
            query_id: query_id
         }));
      },
      fetch_query_data: (query_id, query_content) =>{
         dispatch(redux_query_action.fetch_query_data({query_id, query_content}));
      }
   }
}

const Visible_query_content = connect(
   mapStateToProps,
   mapDispatchToProps
)(Query_content);

export {Visible_query_content};