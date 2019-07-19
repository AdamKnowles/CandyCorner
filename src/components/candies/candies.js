import React, { Component } from 'react'
import candyPicture from "./candy.png"
import "./candies.css"
import { Link } from "react-router-dom";
// import CandyType from "./candyTypes/candyTypes"
class CandiesList extends Component {
    render() {
        return (
            <section className="candies">
            {
                this.props.candies.map(candy =>
                    <div key={candy.id} className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <img src={candyPicture} className="icon--candies" />
                                <h5>{candy.name}</h5>
                                <Link className="nav-link" to={`/candies/${candy.id}`}>Details</Link>
                                <button
                                    onClick={() => this.props.deleteCandies(candy.id)}
                                    className="card-link">Delete</button>
                            </div>
                        </div>
                        
                        
            
                    </div>
                )
            }

            
            </section>
        )
    }
}

export default CandiesList