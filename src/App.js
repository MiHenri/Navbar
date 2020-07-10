import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './App.css';

class App extends Component {
     render() {

      return(
       <div className='App'>
          <nav className='navbar'>     
            <li>
                <NavLink exact className="main-nav" activeClassName="main-nav-active line" to='./Cupertino.js'>Cupertino</NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active line" to='./NewYorkCity.js'>New York City</NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active line" to='./London.js'>London</NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active line" to='./Amsterdam.js'>Amsterdam</NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active line" to='./Tokyo.js'>Tokyo</NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active line" to='./HongKong.js'>Hong Kong</NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active line" to='./Sydney.js'>Sydney</NavLink>
            </li>
          </nav>
       </div>
     );
     
}
}

export default App;
 