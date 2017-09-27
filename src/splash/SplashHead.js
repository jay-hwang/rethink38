import React from 'react';

export default class SplashHead extends React.Component {
  render() {
    return (
      <div id="SplashHead">
        <div id='nav-logo'></div>

        <h3 id='Rethink38-title' className='color--white'>#Rethink38</h3>
        <p id='splashHead-p' className='color--white font-size--x'>
          Rethink how you will spend $38 a month to help to support a child in the Inner City today!
        </p>
        <button className='btn sponsor-btn' title="Sponsor a Child">
          SPONSOR NOW
        </button>
      </div>
    );
  }
}
