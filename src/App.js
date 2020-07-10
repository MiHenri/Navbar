import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './App.css';

class App extends Component {
     render() {

      return(
       <div className='App'>
          <nav className='navbar'>     
            <li>
                <NavLink exact className="main-nav " activeClassName="main-nav-active" to='./Cupertino.js'>Cupertino</NavLink>
                <NavLink exact className="main-nav " activeClassName="main-nav-active" to='./NewYorkCity.js'>New York City</NavLink>
                <NavLink exact className="main-nav " activeClassName="main-nav-active" to='./London.js'>London</NavLink>
                <NavLink exact className="main-nav " activeClassName="main-nav-active" to='./Amsterdam.js'>Amsterdam</NavLink>
                <NavLink exact className="main-nav " activeClassName="main-nav-active" to='./Tokyo.js'>Tokyo</NavLink>
                <NavLink exact className="main-nav " activeClassName="main-nav-active" to='./HongKong.js'>Hong Kong</NavLink>
                <NavLink exact className="main-nav " activeClassName="main-nav-active" to='./Sydney.js'>Sydney</NavLink>
            </li>
          </nav>
       </div>
     );
     
}
}

export default App;
 