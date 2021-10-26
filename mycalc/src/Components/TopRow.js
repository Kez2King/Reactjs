import React from 'react'
import '../App.css'

class TopRow extends React.Component{
    render(){
        return(
            <div>
                <div className="numBers">
                    <button style={{background: 'darkgray'}}>C</button>
                    <button style={{background: 'darkgray'}}>+/-</button>
                    <button style={{background: 'darkgray'}}>%</button>
                    <button id="Orange">/</button>
                </div>
            </div>
        )
    }
}

export default TopRow