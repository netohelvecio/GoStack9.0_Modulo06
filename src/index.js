import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

import './config/ReactotronConfig';

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="ligh-content" backgroundColor="#7159C1" />
        <Routes />
      </>
    );
  }
}
