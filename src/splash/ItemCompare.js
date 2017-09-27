import React from 'react';

const ItemCompare = ({ topItemUrl, topItemText, botItemUrl, botItemText }) => (
  <li className='itemCompare'>
    <div className='itemCompare-half'>
      <div><img className='top-item-img item-img' src={topItemUrl}/></div>
      <p className='top-item-text item-text'>{topItemText}</p>
    </div>

    <div id='itemCompare-div'>
      <div id='divider'></div>
      <div id='divider-OR'>OR</div>
      <div id='divider'></div>
    </div>

    <div className='itemCompare-half'>
      <p className='bot-item-text item-text'>{botItemText}</p>
      <div><img className='bot-item-img item-img' src={botItemUrl}/></div>
    </div>
  </li>
);

export default ItemCompare;
