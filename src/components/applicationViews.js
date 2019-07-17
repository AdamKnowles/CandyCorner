import { Route } from 'react-router-dom'
import React, { Component } from 'react';
import LocationList from "./locations/locations"
import EmployeeList from "./employees/employees"
import CandiesList from "./candies/candies"
import CandyTypeList from "./candyTypes/candyTypes"
import CandyManager from "../modules/CandyManager"


 class ApplicationViews extends Component {
    

    state = {
        employees: [],
        locations: [],
        candyTypes: [],
        candies: []
    }

    componentDidMount() {
        const newState = {}

        CandyManager.getAllLocations()
            .then(r => r.json())
            .then(locations => newState.locations = locations)
            .then(() => CandyManager.getAllEmployees()
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => CandyManager.getAllCandies()
            .then(r => r.json()))
            .then(candies => newState.candies = candies)
            .then(() => this.setState(newState))
    }

    deleteCandies = id => {
        CandyManager.removeAndList(id)
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