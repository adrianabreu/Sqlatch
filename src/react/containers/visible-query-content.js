
import * as redux_query_action  from '../../redux/query/actions-creator';
import { connect }               from 'react-redux';
import { Query_content }         from '../components/query-content';

const mapStateToProps = (state) => {
   return {
      content : state.query.content || 'waiting for input...'
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      add_query_node : () => {
         dispatch(redux_query_action.add_query_node({
            query_id : 1, 
            node     :{
                  id     : Math.floor(Math.random()*10),
                  // todo ... get from input
                  keyword: prompt('INSERT KEYWORD'),
                  content: '*'
               }
            })
         );
         dispatch(redux_query_action.build_query_content());
      },
      build_query_content : () => {
         dispatch(redux_query_action.build_query_content());
      }
   }
}

const Visible_query_content = connect(
   mapStateToProps,
   mapDispatchToProps
)(Query_content);

export {Visible_query_content};