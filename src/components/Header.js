import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Header = props => 
    (
        <View style={ style.viewHeader }>
            <Text style={ style.textTitle } >{ props.title }</Text>
        </View>
    );

const style = StyleSheet.create({
    viewHeader: {
        backgroundColor: '#00ffff',
        height: 80,
        justifyContent: 'center'
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default Header;