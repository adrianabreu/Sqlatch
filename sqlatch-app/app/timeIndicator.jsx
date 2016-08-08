class Component extends React.Component {
   render(){
      return (
         <li>{this.props.id} : {this.props.value} </li>
      );
   }
}

class ComponentWrapper extends React.Component {

   constructor(){
      super();

      this.state = {
         showComponents : false
      }
   }

   _handleClick(){
      this.setState({
         showComponents : !this.state.showComponents
      });
   }

   _getComponents(){
      const arr  = [{
            id  : 'HTML',
            value: 'isGood'
         },
         {
            id  : 'JS',
            value: 'Too good'
         }
      ];
      return arr.map((e) => {
         return (<Component 
            key={e.id} id={e.id} value={e.value}/>
         )
      });
   }

   render(){
      const components = this._getComponents();  
      let componentsNodes;

      if(this.state.showComponents){
         componentsNodes = <div className="components-list">
            {components}
         </div>
      }
      return(
         <div>
            <div>
               <button onClick={this._handleClick.bind(this)}>Swap</button>
            </div>
            Total : {components.length}
            <ul>
               {componentsNodes}    
            </ul>
         </div> 
      );
   }
}

ReactDOM.render(
   <ComponentWrapper />, document.getElementById('app-wrapper')
);