import React from 'react'
import '../App.css'

class BottomRow extends React.Component{
    render(){
        return(
            <div>
                <div className="numBers">
                    <button id="zeRo">0</button>
                    <button>.</button>
                    <button id="Orange">=</button>
                </div>
            </div>
        )
    }
}

export default BottomRow 