// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Game1 from './components/totoro/Game';
class App extends React.Component {
 
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <p>
          Hello 👋🏼
        </p> 
        <Game1/>
      </header>
    </div>
    )
  }
}

export default App;
