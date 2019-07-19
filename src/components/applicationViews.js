import { Route } from "react-router-dom";
import React, { Component } from "react";
import LocationList from "./locations/locations";
import EmployeeList from "./employees/employees";
import CandiesList from "./candies/candies";
import CandyTypeList from "./candyTypes/candyTypes";
import CandyManager from "../modules/CandyManager";
import CandyDetail from './candies/candyDetail'

class ApplicationViews extends Component {
  state = {
    employees: [],
    locations: [],
    candyTypes: [],
    candies: []
  };

  componentDidMount() {
    const newState = {};

    CandyManager.getAllLocations()
      .then(r => r.json())
      .then(locations => (newState.locations = locations))
      .then(() => CandyManager.getAllEmployees().then(r => r.json()))
      .then(employees => (newState.employees = employees))
      .then(() => CandyManager.getAllCandies().then(r => r.json()))
      .then(candies => (newState.candies = candies))
      .then(() => this.setState(newState));
  }

  deleteCandies = id => {
    CandyManager.removeAndList(id).then(candies =>
      this.setState({
        candies: candies
      })
    );
  };

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <LocationList locations={this.state.locations} />;
          }}
        />

        <Route
          exact
          path="/employees"
          render={props => {
            return <EmployeeList employees={this.state.employees} />;
          }}
        />

        <Route
          exact
          path="/candies"
          render={props => {
            return (
              <CandiesList
                deleteCandies={this.deleteCandies}
                candies={this.state.candies}
              />
            );
          }}
        />

        <Route
          path="/candies/:candyId(\d+)"
          render={props => {
            // Find the animal with the id of the route parameter
            let candy = this.state.candies.find(
              candy => candy.id === parseInt(props.match.params.candyId)
            );

            // If the animal wasn't found, create a default one
            if (!candy) {
              candy = { id: 404, name: "404" };
            }

            return (
              <CandyDetail candy={candy} deleteCandies={this.deleteCandies} />
            );
          }}
        />
      </React.Fragment>
    );
  }
}
export default ApplicationViews;
