import React from 'react';

export default class SplashBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="SplashBody" className='flex--center flex-direction--column'>
        <h3>YOU COULD BUY</h3>
        <ul className='flex'>
          <li className='couldBuyItem'></li>
          <li className='couldBuyItem'></li>
          <li className='couldBuyItem'></li>
          <li className='couldBuyItem'></li>
          <li className='couldBuyItem'></li>
        </ul>
      </div>
    );
  }
}
