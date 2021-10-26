import React from 'react'
import '../App.css'

class Cards extends React.Component{
    render(){
        return(
            <div className="outer">
                <img className="Image" src={this.props.src} alt=""></img>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Cards