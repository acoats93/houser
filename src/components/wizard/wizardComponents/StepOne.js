import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import store, {UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIP} from '../../../store';

class StepOne extends Component{
    constructor(){
        super()
        const reduxState = store.getState();
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
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
    saveChanges = () => {
        store.dispatch({
          type: UPDATE_NAME,
          payload: this.state.name
        });
        store.dispatch({
          type: UPDATE_ADDRESS,
          payload: this.state.address
        });
        store.dispatch({
            type: UPDATE_CITY,
            payload: this.state.city
          });
          store.dispatch({
            type: UPDATE_STATE,
            payload: this.state.state
          });
          store.dispatch({
            type: UPDATE_ZIP,
            payload: this.state.zip
          });
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
                <Link onClick={this.saveChanges} to='/wizard/step_two'>Next</Link>
            </div>
        )
    }
}

export default StepOne;