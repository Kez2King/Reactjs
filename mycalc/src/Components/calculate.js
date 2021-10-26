import React from 'react'
import '../App.css'


class Numbers extends React.Component{
    render(){
        return(
            <div>
                <div className="numBers">
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button id="Orange">X</button>
                </div>
            </div>
        )
    }
}

export default Numbers