import React, { Component } from 'react'
import Child from './Child.';

export default class Parent extends Component {
    constructor(props){
        super(props);
        this.state={
           parentname:"parent"
        }
        this.greetings=this.greetings.bind(this)
    }
    greetings(Childname){
        alert(`hello${this.state.parentname} from ${Childname}`)
    }
  render() {
    return (
      <div>
        <Child greethandle={this.greetings}/>
      </div>
    )
  }
}
