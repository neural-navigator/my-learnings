import React, { Component } from 'react'

class ErrorBoundry extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }
    
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
  render() {
    if (this.state.hasError){
        return <h1>Something went wrong!</h1>
    }
    else{
    return (
        <h1>{this.props.children}</h1>
    )
  }
}
}

export default ErrorBoundry
