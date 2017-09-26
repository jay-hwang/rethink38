import React from 'react';
import './Navbar.css';

// Components
import NavMenuLinks from './NavMenuLinks';

class Navbar extends React.Component {


  render() {
    return (
      <nav id='Navbar'>
        <div id='hidden-nav-bg' className='hide'>
          <div id='hidden-nav-logo'></div>
        </div>

        {/*<NavMenuLinks/>*/}
      </nav>
    );
  }
}

export default Navbar;
