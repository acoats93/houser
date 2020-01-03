import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import store from '../../../store';


class StepThree extends Component{
    constructor(){
        super()
        this.state = {
            mortgage: '',
            rent: ''
        }
        this.addMortgage = this.addMortgage.bind(this);
        this.addRent = this.addRent.bind(this);
    }

    addMortgage(e){
        this.setState({mortgage: e.target.value})
    }

    addRent(e){
        this.setState({rent: e.target.value})
    }
//messed up on this part and spent too long trying to figure it out, so I decided to move on...thats why it is clearly incorrect
    addNewHouse(){
        // const {name, address, city, state, zip} = this.state;
        // let newHouse = {
        //     name,
        //     address,
        //     city,
        //     state,
        //     zip
        // }
        // axios.post('/house', newHouse).then(response => {
        //     response.status(200).json(newHouse);
        // })
    }

    render(){
        return(
            <div>Step Three
                <h1>Monthly Mortgage Amount
                    <input onChange={this.addMortgage} placeholder='0'></input>
                </h1>
                <h1>Desired Monthly Rent
                    <input onChange={this.addRent} placeholder='0'></input>
                </h1>
                <Link to='/wizard/step_two'>Previous</Link>
                <button onClick={this.addNewHouse}>Complete</button>
            </div>
        )
    }
}

export default StepThree;