import React, { Component } from 'react'
import MemoComponent from './MemoComponent'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Satya"
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "satya pati"
            })
        }, 2000)
    }
    
  render() {
    console.log("parent component rerendered!")
    return (
      <div>
        parent component
        <MemoComponent name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComponent
