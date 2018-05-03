import React, {Component} from 'react';
import Trade from './Trade';
import '../styles/App.css';

// This is the main App Component
// It loads all the child components need to display the page
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>Coin Trade</h1>
                </div>

                <Trade />
            </div>
        );
    }
}

export default App;