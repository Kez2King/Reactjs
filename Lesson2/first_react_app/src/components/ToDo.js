import React from 'react'

class ToDo extends React.Component{
    render(){
        return(
            <div className="testing">
                <h1>{this.props.name}</h1>
                <p>{this.props.detail}</p>
            </div>
        )
    }
}

export default ToDo