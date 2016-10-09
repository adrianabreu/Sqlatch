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
                    <table className="table table-stripped table-hover">
                      <thead>
                           <tr>
                             <th className="col-sm-2"><b>QUERY INFO</b></th>
                             <th className="col-sm-10">&nbsp;</th>
                           </tr>
                         </thead>
                      <tbody>
                        <tr>
                          <td>id</td>
                          <td>
                              <code>{query.id}</code>
                          </td>
                        </tr>
                        <tr>
                          <td>content</td>
                          <td>
                              { query.content
                                 ? <code>{query.content}</code>
                                 : ''
                              }
                          </td>
                        </tr>                    
                        <tr>
                          <td>data</td>
                          <td>
                              { query.parsed_data
                                ? <code>{query.parsed_data}</code>
                                : ''
                              }
                          </td>
                        </tr>                    
                      </tbody>
                    </table>
                  </div>
                  <div className="panel-footer">
                    <div className="btn-group">
                      <button type="button" 
                           className="btn btn-default"
                           onClick={e => {this.props.add_query_node(query.id)}}>
                        add-query-node
                      </button>
                      <button type="button" 
                           disabled={query.fetching || !query.content}
                           className={"btn "+ (query.fetching ? "btn-info disabled" : !query.content ? "btn-default disabled" : "btn-default")}   
                           onClick={e => {this.props.fetch_query_data(query.id,query.content)}}>
                        {
                          query.fetching 
                          ? 'fetching...'
                          : 'fetch-query-data' 
                        }
                      </button>
                    </div>
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