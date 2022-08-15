import React, { Component } from 'react'
import "../css/Die.css"


class Die extends Component {
    render() {
        return (
                <i className={`fas fa-dice-${this.props.face} ${this.props.rolling && "rotating" }`}></i>
        )
    }
}


export default Die;