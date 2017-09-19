import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav id='Navbar'>
        <span id='Navbar-link'>ABOUT US</span>
        <span id='Navbar-link'>OUR WORK</span>
        <span id='Navbar-link'>GET INVOLVED</span>
        <span id='Navbar-link'>DONATE</span>
      </nav>
    );
  }
}

export default Navbar;
