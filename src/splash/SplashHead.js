import React from 'react';

export default class SplashHead extends React.Component {
  render() {
    return (
      <div id="SplashHead" className='flex--center flex-direction--column'>
        <h3 className='color--white'>#Rethink38</h3>
        <p className='color--white'>
          Rethink how you will spend $38 a month to help to support  a child in the Inner City today!
        </p>
        <button className='btn sponsor-btn' title="Sponsor a Child">
          SPONSOR NOW
        </button>
      </div>
    );
  }
}
