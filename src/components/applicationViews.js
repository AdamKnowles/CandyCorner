import { Route } from 'react-router-dom'
import React, { Component } from 'react';
import LocationList from "./locations/locations"
import EmployeeList from "./employees/employees"
import CandiesList from "./candies/candies"
import CandyTypeList from "./candyTypes/candyTypes"


 class ApplicationViews extends Component {
    

    state = {
        employees: [],
        locations: [],
        candyTypes: [],
        candies: []
    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/locations")
            .then(r => r.json())
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:5002/employees")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/candies")
            .then(r => r.json()))
            .then(candies => newState.candies = candies)
            .then(() => this.setState(newState))
    }

    deleteCandies = id => {
        return fetch(`http://localhost:5002/candies/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/candies`))
        .then(e => e.json())
        .then(candies => this.setState({
            candies: candies
        })
      )
    }

    render() {
        return (
            
                <React.Fragment>
                <Route exact path="/" render={(props) => {
                 return <LocationList locations={this.state.locations} />
            }} />
            
                <Route exact path="/employees" render={(props) => {
                return <EmployeeList employees={this.state.employees} />
            }} />
            
                <Route exact path="/candies" render={(props) => {
                return <CandiesList deleteCandies={this.deleteCandies} candies={this.state.candies} />
            }} />
                
            
            </React.Fragment>
        )
    }



 }
export default ApplicationViews