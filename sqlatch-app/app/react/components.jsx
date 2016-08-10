let sqlatch = sqlatch || {};

class QueryNode extends React.Component {
   render(){
      // todo ... crear componentes individuales
      return (
         <div className="panel panel-default">
            <div className="panel-body">
               <div className="form-group">
                  <label htmlFor="keyword">KEYWORD</label>
                  <input className="form-control" type="text" id="keyword"/>               
               </div>
            </div>
            <div className="panel-footer">
               <button type="button" className="btn btn-default">
                  ADD
               </button>
            </div>
         </div>
      );
   }
}

sqlatch.react.components = {
   QueryNode
}