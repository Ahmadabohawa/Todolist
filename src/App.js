import React, { Component } from 'react'
import Additems from './components/Additems/Additems'
import Todoitems from './components/Todoitems/Todoitems'
class App extends Component {
      state={
        items : [
          {id:1,name:"Ahmad",age:23},
          {id:2,name:"Mohammed",age:26},
          {id:3,name:"Ali",age:28}   
        ]
      }
      deleteitem=(id)=>{
        let items=this.state.items;
        items.splice(id,1);
        this.setState({items})
      }
      additem=(item)=>{
        let items=this.state.items;
        items.push(item);
        this.setState({items})
      }
      
      render(){
        return (
          <div className="App container">
            <h1 className="text-center">TodoList App</h1>
            <Todoitems items1={this.state.items} deleteitem={this.deleteitem} />
            <Additems additems={this.additem} />
          </div>
        );
      }
 
  
}

export default App;
