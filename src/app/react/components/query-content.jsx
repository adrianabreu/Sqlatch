let sqlatch = sqlatch || {};

(function(sqlatch) {   

   const Query_content = ({content, add_query_node, build_query_content}) => (
      <div>
         <div className="panel panel-default">
            <div className="panel-body">
               <code>{content}</code>
            </div>         
            <div className="panel-footer">
               <div className="btn-group">
                  <button type="button" 
                         className="btn btn-default"
                         onClick={e => {add_query_node()}}>
                     add-query-node
                  </button>
                  <button type="button" 
                         className="btn btn-default" 
                         onClick={e => {build_query_content()}}>
                     build-query-content
                  </button>
               </div>
            </div>         
         </div>
      </div>
   );

   sqlatch.react.components.Query_content = Query_content;

})(sqlatch);