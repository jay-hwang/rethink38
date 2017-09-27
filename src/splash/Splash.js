import React from 'react';
import './Splash.css';

// Components
import Layout from '../Layout.js';
import SplashHead from './SplashHead';
import SplashBody from './SplashBody';

export default class Splash extends React.Component {
  

  render() {
    return (
      <Layout>
        <div id='Splash'>
          <SplashHead/>
          <SplashBody/>
        </div>
      </Layout>
    );
  }
}
