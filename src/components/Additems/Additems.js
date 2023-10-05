import React, { Component } from 'react'
import './Additems.css'
class Additems extends Component{
    state={
        name:'',
        age: ''
    }
    render(){

        const additems=this.props.additems;
        
      const  handlechange=(e)=>{
            console.log(e.target.value)
            this.setState({
            [e.target.id]:e.target.value
        })
        }

        const handlesubmit=(e)=>{
            e.preventDefault();
           if(e.target.name.value===''||e.target.age.value===''){
            return false;
           }else{
            additems(this.state);
            this.setState({
                name:'',
                age:''
            })
            }}
    
        return(
            <div className="Additems">
                
               <form onSubmit={handlesubmit}>

                   <input type="text" placeholder="Enter your Name..." id="name" 
                   onChange={handlechange} value={this.state.name}/>
                   
                   
                   <input type="number" placeholder="Enter your Age..." id="age" 
                   onChange={handlechange} value={this.state.age}/>
                   
                   <input type="submit" value="Add"/>

               </form>
            </div>
        )}} 
export default Additems