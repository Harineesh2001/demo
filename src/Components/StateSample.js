import React, { Component } from "react";

class StateSample extends Component{
    
   constructor(){
    super();
    this.state={
        message:"wellcome to my jjjjjj nel"
    }
   }
//    s1() {
//     this.setState({message:"thanks for Subscribing"})
    
//    }
 
    render(){
        return(
        <>
          <h1> {this.state.message}</h1> 
          {/* <button onClick={()=>this.s1()}> subscribe</button> */}

          </>
        )
    }

}
export default StateSample