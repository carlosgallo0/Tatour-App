import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';

import {MapPage} from './src/screens/MapPage';

console.log('app started')
export default function App() {
  return (
    <SafeAreaView> 
      <StatusBar
        hidden={true}
      />
      <MapPage/>
      <Text>Hello </Text>
    </SafeAreaView>
  )
}

