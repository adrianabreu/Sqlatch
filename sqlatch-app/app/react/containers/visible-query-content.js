
let sqlatch = sqlatch || {};

(function(sqlatch) {  

   let add_query_node      = sqlatch.redux.creators.add_query_node; 
   let build_query_content = sqlatch.redux.creators.build_query_content;

   let Query_content  = sqlatch.react.components.Query_content;
   let connect        = ReactRedux.connect;

   const mapStateToProps = (state) => {
      return {
         content : state.query.content || 'waiting for input...'
      }
   }

   const mapDispatchToProps = (dispatch) => {
      return {
         add_query_node : () => {
            dispatch(add_query_node({
               id     : Math.floor(Math.random()*10),
               // todo ... get from input
               keyword: prompt('INSERT KEYWORD'),
               content: '*'
            }));
         },
         build_query_content : () => {
            dispatch(build_query_content());
         }
      }
   }

   const Visible_query_content = connect(
      mapStateToProps,
      mapDispatchToProps
   )(Query_content);

   sqlatch.react.containers.Visible_query_content = Visible_query_content;

})(sqlatch);