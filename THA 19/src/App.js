import React from "react";
import './App.css';

export default class App extends React.Component{
constructor(props){
  super(props)
  this.state = {
    button1:1,
    button2:1,
    button3:1,
    button4:1
  }
}

render(){
  console.log(this.state.button1)
  return(
   
    <div>
      <button onClick={()=>{this.setState((state) => ({button1:state.button1 + 1}))}}>{this.state.button1}</button>
      <button onClick={()=>{this.setState((state) => ({button2:state.button2 + 1}))}}>{this.state.button2}</button>
      <button onClick={()=>{this.setState((state) => ({button3:state.button3 + 1}))}}>{this.state.button3}</button>
      <button onClick={()=>{this.setState((state) => ({button4:state.button4 + 1}))}}>{this.state.button4}</button>

    </div>
  )
}


}
