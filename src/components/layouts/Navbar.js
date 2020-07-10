import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import "../App.css";

class Navbar extends Component {
     render() {

      return(
       <div className='App'>
          <nav className='navbar line'>     
            <li>
                <NavLink exact className="main-nav" activeClassName="main-nav-active" to='/'>Cupertino</NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active" to='/NewYorkCity' >New York City</NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active" to='/London' >London</NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active" to='/Amsterdam'>Amsterdam</NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active" to='/Tokyo'>Tokyo</NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active" to='/HongKong'>Hong Kong</NavLink>
                <NavLink exact className="main-nav" activeClassName="main-nav-active" to='/Sydney'>Sydney</NavLink>
            </li>
          </nav>
       </div>
     );
     
}
}

export default Navbar;
 