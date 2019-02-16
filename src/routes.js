import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './components/principal.android';
import SobreJogo from './components/sobreJogo.android';
import OutrosJogos from './components/outrosJogos.android';
import Resultado from './components/resultado.android';

const Routes = () => (
  <Router sceneStyle={{ paddingTop: 50 }}>
    <Scene key='app'>
      <Scene key='principal' component={Principal} initial title="Cara ou coroa" />
      <Scene key='sobrejogo' component={SobreJogo} title="Sobre o Jogo" />
      <Scene key='outrosjogos' component={OutrosJogos} title="Outros Jogos" />
      <Scene key='resultado' component={Resultado} title="Resultado" />
    </Scene>
  </Router>
);

export default Routes;
