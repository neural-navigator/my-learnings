import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin: false
      }
    }
    
//   render() {
//     let message;
//     if (this.state.isLoggedin){
//         message = <div>"Welcome Satya"</div>
//     }
//     else {
//         message = <div>"welcome Guest"</div>
//     }
//     return (
//         <div>{message}</div>
//     )

//   }

    render() {
        return (
        this.state.isLoggedin ?(
        <div>Welcome Satya</div>):(<div>Welcome Guest!</div>)
        )
    }
}

export default UserGreeting
