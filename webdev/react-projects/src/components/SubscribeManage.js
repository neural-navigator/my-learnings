import React, { Component } from 'react';

export class SubscribeManage extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello User! Please subscribe!",
         btn_txt: "Subscribe",
         isSubscribed: false
      }
      this.clickHandler = this.clickHandler.bind(this)
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler}>{this.state.btn_txt}</button>
      </div>
    )
  }

  clickHandler(){
    if(this.state.isSubscribed===false){
        this.setState({
            message: "Please Subscribe!",
            btn_txt: "Subscribe",
            isSubscribed: true
        })
    }
    else{
        this.setState({
            message: "Thanks for subscribing!",
            btn_txt: "Unsubscribe",
            isSubscribed: false
        })
    }
  }
}

export default SubscribeManage
