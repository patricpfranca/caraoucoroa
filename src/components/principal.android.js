import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

const btnJogar = require('../img/botao_jogar.png');
const btnSobreJogo = require('../img/sobre_jogo.png');
const btnOutrosJogos = require('../img/outros_jogos.png');
const logo = require('../img/logo.png');

export default class Principal extends Component {
  render() {
    return (
      <View style={styles.principal}>
        <View style={styles.apresentacao}>
          <Image source={logo} />
          <Image source={btnJogar} />
        </View>
        <View style={styles.rodape}>
          <Image source={btnSobreJogo} />
          <Image source={btnOutrosJogos} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#61bd8c'
  },
  apresentacao: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rodape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
