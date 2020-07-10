import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component {
     render() {
      return(
       <div className='App'>
          <h1>Hello from React</h1>
          <img src={logo} className="App-logo" alt="logo" />
       </div>
     );
}
}

export default App;
