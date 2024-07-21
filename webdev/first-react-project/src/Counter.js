import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }

    }


  render() {
    return (
      <div>
        Count: {this.state.count}
      
      <button onClick={()=> this.Increment()}>Increment</button>
      </div>
    )
  }

   Increment() {
    // this.state.count = this.state.count + 1;   // this will not work, on console you will get the incremented number but in page source its not increasing
    this.setState({
        count: this.state.count + 1
   }, () => {console.log(this.state.count)})
   }


}

export default Counter;
