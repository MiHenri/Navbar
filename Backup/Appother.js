import React, {Component} from 'react';
import logo from './logo.svg';
import Navbar from '../src/components/layouts/Navbar';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  foo = () => 'Central Asia';

     render() {
       const name = 'Kazakhstan';
       const name2 = 'Kyrgyzstan';
       const loading = false;
       const showName = false;
      
      return(
       <div className='App'>
         <Navbar title="Central Asia" />
         {loading ? <h4>Welcome to Central Asia</h4> : <h1>Hello from {showName ? name :name2}</h1>}
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello from {this.foo()}</h1>
       </div>
     );
}
}

export default App;
 