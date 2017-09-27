import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

document.addEventListener('DOMContentLoaded', () => {
  // window.addEventListener('scroll', function() {
  //   let $hiddenNavBG = document.getElementById('hidden-nav-bg');
  //   let y = window.pageYOffset, vh = window.innerHeight - 100;
  //   if (y >= vh) {
  //     $hiddenNavBG.classList.remove('hide');
  //   } else {
  //     $hiddenNavBG.classList.add('hide');
  //   }
  // });

  ReactDOM.render(<App />, document.getElementById('root'));
});

// registerServiceWorker();
