import React, { Component } from 'react'
import "./css/App.css"
import Die from './components/Die'
import RollDice from './components/RollDice'


class App extends Component {
  render() {
    return (
      <div className='App'>
        <RollDice/>
      </div>
    )
  }
}

export default App