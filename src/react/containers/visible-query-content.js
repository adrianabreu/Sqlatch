
import * as redux_query_actions  from '../../redux/query/actions';
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
         dispatch(redux_query_actions.add_query_node({
            id     : Math.floor(Math.random()*10),
            // todo ... get from input
            keyword: prompt('INSERT KEYWORD'),
            content: '*'
         }));
         dispatch(redux_query_actions.build_query_content());
      },
      build_query_content : () => {
         dispatch(redux_query_actions.build_query_content());
      }
   }
}

const Visible_query_content = connect(
   mapStateToProps,
   mapDispatchToProps
)(Query_content);

export {Visible_query_content};