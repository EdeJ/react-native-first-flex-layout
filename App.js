import { StatusBar } from 'react-native';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor="darkred" />
      <View style={{ height: 40, backgroundColor: 'darkred' }} />
      <View style={{ flex: 2, flexDirection: 'row' }}>
        <View style={{ paddingTop: 20, paddingBottom: 20, justifyContent: 'space-between', alignItems: 'center', height: '100%', flex: 1, backgroundColor: 'lightpink' }} >
          <Text style={{ color: '#fff' }}>I'am on the left</Text>
          <View style={{ backgroundColor: 'darkred' }}>
            <Text style={{ color: '#fff', padding: 20 }}>Floatin' here</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%', flex: 1, backgroundColor: 'powderblue' }} >
          <Text>I'am on the right</Text>
        </View>
      </View>
      <View style={{ padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 70, backgroundColor: '#fff' }} >
        <Text style={{ color: 'black' }}>I want all the space</Text>
        <TouchableOpacity style={{}}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>OK</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
