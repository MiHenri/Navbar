import React, {Component} from 'react';
import "../App.css";

class HongKong extends Component {
     render() {

      return(
       <div className='App'>
          <nav className='navbar a bottom-border '>     
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
                <a href='#'class=''>Amsterdam</a>
              </li>
              <li>
                <a href='#'class=''>Tokyo</a>
              </li>
              <li>
                <a href='#'class='city'>Hong Kong</a>
              </li>
              <li>
                <a href='#'class=''>Sydney</a>
              </li>
            </ul>
          </nav>
       </div>
     );
     
}
}

export default HongKong;
 