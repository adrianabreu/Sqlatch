import React from 'react';

class Query_content extends React.Component{
  build_new_query(){
    let new_query_id = prompt('INSERT ID');
    this.props.add_query(new_query_id);
  }
  componentDidMount(){
    // build first query at start    
    // this.build_new_query();
  }
  render(){

    return (
      <div>
        <p>
          {!this.props.queries.length 
            ? <span>Use <kbd>Add query</kbd> to start working</span>
            : <button type="button" className="btn btn-primary">Queries: <span className="badge">{this.props.queries.length}</span></button>            
          }
        </p>
        <div className="panel panel-default">        
          {
            this.props.queries.map((query)=>{
              return (
                <div key={query.id}>                  
                  <div className="panel-body">
                    id: {query.id}, content: <code>{query.content}</code>
                  </div>
                  <div className="panel-footer">
                    <button type="button" 
                         className="btn btn-default"
                         onClick={e => {this.props.add_query_node(query.id)}}>
                      add-query-node
                    </button>
                  </div>
                </div>
              )
            })
          }          
        </div>
        <button type="button" 
               className="btn btn-primary"
               onClick={e => {this.build_new_query()}}>
               Add query
        </button>        
    </div>
    )  
  }
}

export {Query_content};