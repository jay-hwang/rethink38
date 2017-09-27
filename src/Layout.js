import React from 'react';

// Components
import Navbar from './navbar/Navbar';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='Layout'>
        {/*<Navbar/>*/}
        <div id='Layout-container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
