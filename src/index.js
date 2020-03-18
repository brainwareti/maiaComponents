import React, {Component} from 'react';

import {View} from 'react-native';

// import { Container } from './styles';
import AlertModal from './components/AlertModal';

export default class App extends Component {
  state = {
    showAlert: true,
  };

  render() {
    return (
      <View style={{backgroundColor: '#007DB6', flex: 1}}>
        <AlertModal type="material" />
        {/* <AlertModal type="chamada" status="refused" /> */}
        {/* <AlertModal type="chamada" status="success" /> */}
        {/* <AlertModal type="chamada" status="unavailable" /> */}
        {/* <AlertModal type="emergency" /> */}
      </View>
    );
  }
}
