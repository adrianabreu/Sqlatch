let sqlatch = sqlatch || {};

(function(sqlatch, Redux) { 

   let {
      query
   } = sqlatch.redux.reducers;

   sqlatch.redux.combined_reducers = Redux.combineReducers({
      query
   });

})(sqlatch, window.Redux);