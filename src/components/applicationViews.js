import { Route } from 'react-router-dom'
import React, { Component } from 'react';
import LocationList from "./locations/locations"
import EmployeeList from "./employees/employees"
import CandiesList from "./candies/candies"
import CandyTypeList from "./candyTypes/candyTypes"


 class ApplicationViews extends Component {
    locationsFromAPI = [
        { id: 1, name: "Publix" },
        { id: 2, name: "CVS" },
        { id: 3, name: "Kroger" },
        { id: 4, name: "Walgreens" }
    ]

    employeesFromAPI = [
        { id: 1, name: "Melanie" },
        { id: 2, name: "Joe" },
        { id: 3, name: "Mark" },
        { id: 4, name: "Adam" }
    ]

    candiesFromAPI = [
        { id: 1, candyTypeID: 1, name: "Snickers" },
        { id: 2, candyTypeID: 2, name: "Skittles" },
        { id: 3, candyTypeID: 3, name: "Starburst" },
        { id: 4, candyTypeID: 4, name: "Trident" }
    ]

    candyTypesFromAPI = [
        { id: 1, candyTypeID: 1, name: "Chocolate Bar" },
        { id: 2, candyTypeID: 2, name: "Hard Candy" },
        { id: 3, candyTypeID: 3, name: "Soft Candy" },
        { id: 4, candyTypeID: 4, name: "Gum" }
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        candyTypes: this.candyTypesFromAPI,
        candies: this.candiesFromAPI
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
                return <CandiesList candies={this.state.candies} />
            }} />
                
            
            </React.Fragment>
        )
    }



 }
export default ApplicationViews