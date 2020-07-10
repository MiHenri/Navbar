import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './App.css';

class App extends Component {
     render() {

      return(
       <div className='App'>
          <nav className='navbar'>     
            <li>
                <NavLink exact className="main-nav" activeClassName="main-nav-active line" to='./Cupertino.js' activeStyle={{color: 'black'}}>Cupertino</NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active line" to='./NewYorkCity.js'activeStyle={{color: 'black'}}>New York City</NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active line" to='./London.js'activeStyle={{color: 'black'}}>London</NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active line" to='./Amsterdam.js'activeStyle={{color: 'black'}}>Amsterdam</NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active line" to='./Tokyo.js'activeStyle={{color: 'black'}}>Tokyo</NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active line" to='./HongKong.js'activeStyle={{color: 'black'}}>Hong Kong</NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active line" to='./Sydney.js'activeStyle={{color: 'black'}}>Sydney</NavLink>
            </li>
          </nav>
       </div>
     );
     
}
}

export default App;
 