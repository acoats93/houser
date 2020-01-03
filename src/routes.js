import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Wizard from './components/wizard/Wizard';

class Routes extends Component{
    render(){
        return(
            <Switch>
                <Route component={Dashboard} exact path='/' />
                <Route component={Wizard} path='/wizard' />
            </Switch>
        )
    }
}

export default Routes;