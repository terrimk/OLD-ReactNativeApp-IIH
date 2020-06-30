/**
 * App for the community of people living with IIH (Idiopathic Intracanial Hypertension) and the people who love them.
 * https://github.com/facebook/react-native
 *
 * Created by: Terri Kellerman
 * Summer of 2020
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';

import Heading from './Heading';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Heading />
        </View>

        <Text style={styles.menu}>MENU WILL BE HERE</Text>
       
        <Text style={styles.footer}>FOOTER WILL BE HERE</Text>
      </View>
    </>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
  },
  menu: {
    flex: 3,
  },
  footer: {
    flex: 1,
  },
});
export default App;
