import React, { Component } from 'react';
import ApplicationViews from "./applicationViews"
import NavBar from "./nav/navBar"



 export default class CandyCorner extends Component {
     render(){
         return(
         <React.Fragment>
             <NavBar />
             <ApplicationViews />
         </React.Fragment>
         );
     }

 }
 