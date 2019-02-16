import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

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

          <TouchableHighlight
            onPress={() => { Actions.resultado(); }}
          >
            <Image source={btnJogar} />
          </TouchableHighlight>
        </View>

        <View style={styles.rodape}>
          <TouchableHighlight
            onPress={() => { Actions.sobrejogos(); }}
          >
            <Image source={btnSobreJogo} />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => { Actions.outrosjogos(); }}
          >
            <Image source={btnOutrosJogos} />
          </TouchableHighlight>
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
