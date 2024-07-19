import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Satya"
      }
      console.log("Lifecycle B constructure");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps is called- LifecycleB")
    }

    componentDidMount() {
        console.log("LifecycleB componentDidMount");
    }
    shouldComponentUpdate() {
      console.log("shouldComponentUpdate rendered in lifecycle B");
      return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log("Lifecycle B getSnapshotBeforeUpdate is called");
      return null;
    }

    componentDidUpdate() {
      console.log("Lifeycle B componentDidUpdate");
    }

    
  render() {
    console.log("Render method in LifecycleB called");
    return (
      <div>
        <h1>LifecycleB</h1>
      </div>
    )
  }
}

export default LifeCycleB
