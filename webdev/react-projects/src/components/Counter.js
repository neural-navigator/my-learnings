import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter: 0
      }
      this.increase = this.increase.bind(this)
      this.decrease = this.decrease.bind(this)
    }

    increase() {
        this.setState({
            counter: this.state.counter+5
        })
    }

    decrease() {
        this.setState({
            counter: this.state.counter-5
        })
    }
    
  render() {
    return (
      <div>
        <button onClick={this.decrease}>-</button>
        <h2>{this.state.counter}</h2>
        <button onClick={this.increase}>+</button>
      </div>
    )
  }
}

export default Counter
