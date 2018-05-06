import React, { Component } from 'react'
import Account from './Account'
import Trade from './Trade'
import TradeCTA from './Trade-CTA'
import '../styles/App.css'

// This is the main App Component
// It loads all the child components need to display the page
class App extends Component {
  render () {
    return (
      <div className="app">
        <div className="app-header">
          <h1>Coin Trade</h1>
        </div>

        <div className="app-body">
          <Account/>
          <Trade/>
          <TradeCTA/>
        </div>
      </div>
    )
  }
}

export default App
