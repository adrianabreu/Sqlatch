let sqlatch = sqlatch || {};

(function(sqlatch, Redux) { 

   console.log(Redux);
   
   let query_reducer =  sqlatch.redux.query.reducers;

   sqlatch.redux.combined_reducers = Redux.combineReducers({
      query : query_reducer
   });

})(sqlatch, window.Redux);