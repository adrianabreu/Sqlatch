let sqlatch = sqlatch || {};

class QueryNode extends React.Component {

   constructor(){
      super();
      this.state = {
         added : false
      }
   }

   _add_query_node(){
      store.dispatch(add_query_node({
         id     : Math.floor(Math.random()*10),
         keyword: this.keyword,
         content: '*'
      }));
      // todo ... setState
   }

   _handleChange(event) {
      this.keyword = event.target.value;
      this.setState({value: event.target.value});
   }

   render(){
      // todo ... crear componentes individuales
      return (
         <div className="panel panel-default">
            <div className="panel-body">
               <div className="form-group">
                  <label htmlFor="keyword">KEYWORD</label>
                  <input onChange={this._handleChange.bind(this)} className="form-control" type="text" id="keyword"/>               
               </div>
            </div>
            <div className="panel-footer">
               <button onClick={this._add_query_node.bind(this)} 
                       type="button" className="btn btn-default">
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