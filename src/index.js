import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

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
