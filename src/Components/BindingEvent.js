import { Component } from "react";

class BindingEvent extends Component{
constructor(props){
    super(props);
    this.state={
        message:"hello"
       

    }
    this.s1=this.s1.bind(this)
}
   s1(){
        this.setState({message:"bye"})
    // console.log(this)
   }
    render() {
        return (
            <>
            <div><h1> {this.state.message}</h1> </div>
             {/* <button onClick={this.s1.bind(this)} >oClick</button> */}
             {/* <button onClick={()=>this.s1()}>click</button> */}
             <button onClick={this.s1}>click</button>
             </>
        );
    }
}
export  default BindingEvent