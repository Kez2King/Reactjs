import React from 'react'
import '../App.css'
import BottomRow from './bottom'
import Numbers from './calculate'
import Numbers2 from './Calculate2'
import Numbers3 from './Calculate3'
import TopRow from './TopRow'

class Calculator extends React.Component{
    render(){
        return(
            <div id="Container">
                <div id="total">
                    <h1 id="reSults">{this.props.result}</h1>
                </div>
                <TopRow/>
                <Numbers/>
                <Numbers2/>
                <Numbers3/>
                <BottomRow/>
            </div>
        )
    }
}

export default Calculator