import React,{Component} from "react"

class Conter extends Component{
    constructor(){
        super();
        this.state={
            
            message:0
        }
       }
       s2(){
        this.setState({
            message:this.state.message+10
        },()=>{console.log("call bac value",this.state.message)}
        )
        
           
       }


    render()
    {
        return(
            <>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.s2()}>count</button>
            
            </>
        )
    }
}
export default Conter