import React from "react";


// const Item = props => <div><h1>{props.name}</h1> <h2>{props.price}</h2><p>{props.children}</p></div>

// const Item = ({name, price, children}) => <div><h1>{name}</h1> <h2>{price}</h2></div>  // destructuring the props

// const Item = props => {
//     const {name, price, children} = props;

//     return <div><h1>{props.name}</h1> <h2>{props.price}</h2><p>{props.children}</p></div>

// }

// class Item extends React.Component{
//     render(){
//         return <div><h1>{this.props.name}</h1> <h2>{this.props.price}</h2><p>{this.props.children}</p></div>
//     }
// }

class Item extends React.Component{
    render(){
        const {name, price, children} = this.props;
        return <div><h1>{name}</h1> <h2>{price}</h2><p>{children}</p></div>
    }
}



export default Item;