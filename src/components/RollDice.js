import React, { Component } from 'react'
import Die from './Die';
import "../css/RollDice.css"


class RollDice extends Component {
    state = { num: "one", num2: "two", rolling: false }
    static defaultProps = {
        faces: ["one", "two", "three", "four", "five", "six"]
    }
    Roll = () => {
        const random = Math.floor(Math.random() * 6);
        const random2 = Math.floor(Math.random() * 6);
        this.setState({ num: this.props.faces[random], num2: this.props.faces[random2], rolling: true });

    setTimeout(() => {
        this.setState({ rolling: false })
     }, 1000);
    }
    render() {

        return (
            <div className="RollDice">
                <div>
                    <Die face={this.state.num} rolling={this.state.rolling} />
                    <Die face={this.state.num2} rolling={this.state.rolling} />
                </div>
                <button className="Button" onClick={this.Roll} disabled={this.state.rolling}>
                    {this.state.rolling ? "Rolling..." : "Roll Dice!"}
                </button>
            </div>
        )
    }
}


export default RollDice;