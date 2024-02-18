import React, { Component } from 'react'

export default class classcomponent extends Component {
    constructor(props) {
      super(props)
    
    //  this.state = {
         
    //  }
    }
    
  render() {
    return (
      <div>
        <h1>
            Hi {this.props.value}
        </h1>
      </div>
    )
  }
}
