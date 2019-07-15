import React, { Component } from 'react'
class CandyType extends Component {
    render() {
        return (
            <section className="candyTypes">
            {
                this.props.candyTypes.map(candytype =>
                    <div key={candytype.id}>
                        {candytype.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default CandyType