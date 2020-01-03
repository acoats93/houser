import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import store from '../../../store';

class StepTwo extends Component{
    constructor(){
        super()
        this.state = {
            imageURL: ''
        }
    }
    render(){
        return(
            <div>
                <div>Step Two</div>
                    <h1>
                        <input></input>
                    </h1>
                    <Link to='/wizard/step_one'>Previous</Link>
                    <Link to='/wizard/step_three'>Next</Link>
            </div>
        )
    }
}

export default StepTwo;