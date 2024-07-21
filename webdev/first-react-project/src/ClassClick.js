import React, { Component } from 'react'

class ClassClick extends Component {
  render() {
    return (
      <div>
        <button onClick={this.clickHander}>Click class Me!</button>
      </div>
    )
  }

  clickHander() {
    console.log("clicked from class component!")
  }
}

export default ClassClick
