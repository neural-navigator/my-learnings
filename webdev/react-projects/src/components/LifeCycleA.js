import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

export class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Satya"
      }
      console.log("Lifecycle A constructure");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps is called")
    }

    componentDidMount() {
        console.log("LifecycleA componentDidMount");
    }

    shouldComponentUpdate() {
      console.log("shouldComponentUpdate rendered in lifecycle A");
      return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log("Lifecycle A getSnapshotBeforeUpdate is called");
      return null;
    }

    componentDidUpdate() {
      console.log("Lifeycle A componentDidUpdate");
    }

    chnageState = () => {
      this.setState({
        name: 'Satya Pati'
      })
    }

    
  render() {
    console.log("Render method in LifecycleA called");
    return (
      <div>
        <h1>LifecycleA</h1>
        <LifeCycleB />
        <button onClick={this.chnageState}>Change State</button>
      </div>
    )
  }
}

export default LifeCycleA
