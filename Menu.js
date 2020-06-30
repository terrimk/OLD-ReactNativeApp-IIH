/* eslint-disable prettier/prettier */
/**
 * App for the community of people living with IIH (Idiopathic Intracanial Hypertension) and the people who love them.
 * https://github.com/facebook/react-native
 *
 * Created by: Terri Kellerman
 * Summer of 2020
 * 
 * File: Menu.js
 * - contains the menu items for the homepage of the app
 * - menu consists of buttons that link to new pages
 * 
 */

import React, {Component} from 'react';

import {View,Text,StyleSheet,TouchableHighlight} from 'react-native';

const Button = () => (
    <View style={StyleSheet.buttonContainer}>
        <Text>
            COMMUNITY
        </Text>
    </View>
)

const styles = StyleSheet.create({
    buttonContainer:{
        fontSize: 18,
    },
    button: {
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#ffffff',
        width: 20,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Button;