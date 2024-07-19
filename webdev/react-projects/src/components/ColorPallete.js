import React, { Component } from 'react'

// const colors = ['#000', '#fff', '#f00', '#0f0', '#00f'];

export class ColorPallete extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         bgColor: '#fff'
      }
    }
    
  render() {
    return (
      <div bgColor='#FFFF00'>
        txt
      </div>
    )
  }
}

export default ColorPallete


// import React from "react";

// 
// const colorSquares = ({ color, onClick }) => (
//     <div style={{
//         backgroundColor: color,
//         width: 50,
//         height: 50,
//         margin: 5,
//         cursor: 'default'
//     }}
//     onClick={onClick}/>
//     );

    
// function ColorPallete() {
    
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ColorPallete

