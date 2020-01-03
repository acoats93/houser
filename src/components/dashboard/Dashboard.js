import React, {Component} from 'react';
import House from '../house/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            houses: []
        }
    }

    componentDidMount(){
        axios.get('/api/houses').then(response => {
            this.setState({houses: response.data})
        })
    }

    addNewProperty(){

    }



    render(){
        return(
            <div>
                <diV>Dashboard</diV>
                <div>
                    {/*spent a large amount of time trying to figure out why my map wasn't working. decided to just move on for the moment*/}
                    {/* {this.state.houses.map(element => {
                        // const {name, address, city, state, zip} = element;
                        return(
                            <div>
                                <div>Property Name: {element.name}</div>
                                <div>Address: {element.address}</div>
                                <div>City: {element.city}</div>
                                <div>State: {element.state}</div>
                                <div>Zip: {element.zip}</div>
                            </div>
                        )
                    })} */}
                </div>
                <button>
                    <Link className='wizard-link' to='/wizard/step_one' >Add New Property</Link>
                </button>
                <House />
            </div>
        )
    }
}

export default Dashboard;