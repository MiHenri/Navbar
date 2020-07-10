import React, {Component} from 'react';
import Navbar from './layouts/Navbar';
import "../App.css";

class Amsterdam extends Component {
     render() {

      return(
        <React.Fragment>
        <Navbar />
       <div className='App'>
          <nav className=' '>     
            <ul>
              <li>
                <a href='#'class='' >Cupertino</a>
              </li>
              <li>
                <a href='#'class='' >New York City</a>
              </li>
              <li>
                <a href='#'class='' >London</a>
              </li>
              <li>
                <a href='#'class='navbar'>Amsterdam</a>
              </li>
              <li>
                <a href='#'class=''>Tokyo</a>
              </li>
              <li>
                <a href='#'class=''>Hong Kong</a>
              </li>
              <li>
                <a href='#'class=''>Sydney</a>
              </li>
            </ul>
          </nav>
       </div>
        
        </React.Fragment>
     );
     
}
}

export default Amsterdam;
 