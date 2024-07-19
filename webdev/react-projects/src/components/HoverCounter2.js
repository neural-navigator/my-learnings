import React, { Component } from 'react'

class HoverCounter2 extends Component {
    
    
  render() {
    const { count, incrementCounter } = this.props
    return (
      <div>
        <h1 onMouseOver={incrementCounter}>Hovered {count} Times</h1>
      </div>
    )
  }
}

export default HoverCounter2
