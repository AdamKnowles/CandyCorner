import React, { Component } from "react"
import "./candies.css"
import candyPicture from "./candy.png"



export default class CandyDetail extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="candies">
                <div key={ this.props.candies.id } className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={ candyPicture } className="icon--candies" />
                            { this.props.candies.name }
                        </h4>
                        <Link className="nav-link" to={`/candies/${candies.id}`}>Details</Link>
                        
                        <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.dischargeCandy(this.props.candies.id)
                                    )
                                }
                            }
                            disabled={ this.state.saveDisabled }
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}