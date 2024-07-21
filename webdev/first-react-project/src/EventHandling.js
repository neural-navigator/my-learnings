import React, { Component } from 'react'

export class EventHandling extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }

    //   this.clickHandler = this.clickHandler.bind(this);
    }

    // clickHandler() {
    //     this.setState({
    //         message: "How are you?"
    //     })
    // }

    clickHandler = () => {
        this.setState({
            message: "How are you?"
        })
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* /* this is one way to bind event handler /* */}
        {/* <button onClick={this.clickHandler.bind(this)}>Event Handler</button>  */}
        {/* <button onClick={() => this.clickHandler()}>Event Handler</button> */}
        <button onClick={this.clickHandler}>Event Handler</button> 
      </div>
    )
  }
}

export default EventHandling
