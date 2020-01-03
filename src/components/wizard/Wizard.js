import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';
import StepOne from './wizardComponents/StepOne';
import StepTwo from './wizardComponents/StepTwo';
import StepThree from './wizardComponents/StepThree';

class Wizard extends Component{



    render(){
        return(
            <div>
                <diV>Wizard</diV>
                    <Link className='cancel-link' to='/'>Cancel</Link>
                    <Route component={StepOne} path='/wizard/step_one'/>
                    <Route component={StepTwo} path='/wizard/step_two'/>
                    <Route component={StepThree} path='/wizard/step_three'/>   
            </div>
        )
    }
}

export default Wizard;