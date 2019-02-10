import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './src/components/principal.android';
import SobreJogo from './src/components/sobreJogo.android';
import OutrosJogos from './src/components/outrosJogos.android';

export default class app6 extends Component {
  render() {
    return (
      <Router>
        <Scene key='app'>
          <Scene key='principal' component={Principal} initial title='Cara ou coroa' />
          <Scene key='sobrejogo' component={SobreJogo} />
          <Scene key='outrosjogos' component={OutrosJogos} />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('app6', () => app6);
