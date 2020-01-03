import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import store, {UPDATE_IMAGE_URL} from '../../../store';

class StepTwo extends Component{
    constructor(){
        super()
        const reduxState = store.getState();
        this.state = {
            imageURL: reduxState.imageURL
        }
    }

    saveChanges = () => {
        store.dispatch({
          type: UPDATE_IMAGE_URL,
          payload: this.state.imageURL
        });
    }
    render(){
        return(
            <div>
                <div>Step Two</div>
                    <h1>
                        <input placeholder='House Image'></input>
                    </h1>
                    <Link onClick={this.saveChanges} to='/wizard/step_one'>Previous</Link>
                    <Link onClick={this.saveChanges} to='/wizard/step_three'>Next</Link>
            </div>
        )
    }
}

export default StepTwo;