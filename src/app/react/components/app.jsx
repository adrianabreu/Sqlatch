let sqlatch = sqlatch || {};

(function(sqlatch) {

   let Query_preview         = sqlatch.react.components.Query_preview;
   let Visible_query_content = sqlatch.react.containers.Visible_query_content;

   const App = () => (
      <div>
         <Visible_query_content/>
      </div>
   );

   sqlatch.react.components.App = App;

})(sqlatch);