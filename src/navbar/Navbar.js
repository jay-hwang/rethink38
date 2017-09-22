import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {

  render() {
    return (
      <nav id='Navbar'>
        <div id='hidden-nav-bg' className='hide'>
          <div id='nav-logo' className='hidden-nav-logo'></div>
        </div>

        <ul id='nav-links'>
          <li id='Navbar-link'>ABOUT US</li>
          <li id='Navbar-link'>OUR WORK</li>
          <li id='Navbar-link'>GET INVOLVED</li>
          <li id='Navbar-link'>DONATE</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
