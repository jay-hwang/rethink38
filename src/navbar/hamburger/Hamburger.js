import React from 'react';

// Components
import HamburgerMenu from './HamburgerMenu';

export default class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleModal = () => this.setState({ isOpen: !this.state.isOpen }).bind(this);
  }

  render() {
    return (
      <div id='hamburger-menu' onClick={this.toggleModal}>
        <span className='hamburger-slab'></span>
        <span className='hamburger-slab'></span>
        <span className='hamburger-slab'></span>
        <HamburgerMenu isHamburger={true}/>
      </div>
    );
  }
}
