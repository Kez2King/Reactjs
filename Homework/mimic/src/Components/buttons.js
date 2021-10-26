import React from 'react'
import '../App.css'

class More extends React.Component{
    render(){
        return(
            <button>{this.props.name + " >"}</button>
        )
    }
}

export default More