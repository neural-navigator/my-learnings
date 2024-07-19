import React, { Component } from 'react'

class ClickCounter2 extends Component {
    
  render() {
    const {count, incrementCounter} = this.props

    return (
      <div>
        <button onClick={incrementCounter}>Clicked { count } Times</button>
      </div>
    )
  }
}

export default ClickCounter2
