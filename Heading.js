/* eslint-disable prettier/prettier */

/**
 * App for the community of people living with IIH (Idiopathic Intracanial Hypertension) and the people who love them.
 * https://github.com/facebook/react-native
 *
 * Created by: Terri Kellerman
 * Summer of 2020
 * 
 * File: Heading.js
 * - contains the image and header for the homepage of the app
 * 
 */
import React from 'react';

import {View,Text,StyleSheet,Image} from 'react-native';

const Heading = () => (
    <View style={styles.header}>
      
        <Text style={styles.headerText}>
            Living with IIH
        </Text>
        <Image
                style = {styles.image} 
                source={require('./header_image.jpeg')} />
        <Text style={styles.sectionDescription}>
                Welcome to the community of people living with Idiopathic Intracanial Hypertension
        </Text>
    </View>
);

const styles = StyleSheet.create({
    header:{
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#ddd',
    },
    headerText: {
        fontSize: 35,
        fontWeight: '400',
    },
    sectionDescription: {
        textAlign: 'center',
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
      },
    image:{
        marginTop: 10,
        marginBottom: 10,
        width: 300,
        height: 80,
    },
});

export default Heading;
