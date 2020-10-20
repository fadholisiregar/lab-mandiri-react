import React from 'react';
import logo from './logo.svg';
import './App.css';

class Form extends React.Component {
  render() {
    return (
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <input type="text" placeholder='Username' />
        <input type="Password" placeholder='Password' />
        <input type="submit" value='submit' />
      </form>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Selamat dayang di aplikasi React</h3>
        <Form />
      </header>
    </div>
  );
}

export default App;
