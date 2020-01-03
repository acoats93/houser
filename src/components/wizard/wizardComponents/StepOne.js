import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import store from '../../../store';

class StepOne extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
        // this.addName = this.addName.bind(this);
        // this.addAddress = this.addAddress.bind(this);
        // this.addCity = this.addCity.bind(this);
        // this.addState = this.addState.bind(this);
        // this.addZip = this.addZip.bind(this);
        // this.addNewHouse = this.addNewHouse.bind(this);
    }


    addName = (e) => {
        this.setState({name: e.target.value})
    }
    addAddress = (e) => {
        this.setState({address: e.target.value})
    };
    addCity = (e) => {
        this.setState({city: e.target.value})
    };
    addState = (e) => {
        this.setState({state: e.target.value})
    }
    addZip = (e) => {
        this.setState({zip: e.target.value})
    }


    render(){
        return(
            <div>
                <diV>Step One</diV>
                <input placeholder='Name' onChange={this.addName}></input>
                <input placeholder='Address' onChange={this.addAddress}></input>
                <input placeholder='City' onChange={this.addCity}></input>
                <input placeholder='State' onChange={this.addState}></input>
                <input placeholder='Zip Code' onChange={this.addZip}></input>
                <Link to='/wizard/step_two'>Next</Link>
            </div>
        )
    }
}

export default StepOne;