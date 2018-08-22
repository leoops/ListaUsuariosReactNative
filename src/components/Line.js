import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Line = ({ label,     
                content,
                styleContainer = '',
                styleValue = '', 
                styleContent = ''
            }) => {
                
    return(
        <View style={ styleContainer != '' ? styleContainer :  styles.container}>
          <Text style={ [styles.cell, styleValue != '' ? styleValue :  styles.value] }>{ label }</Text>
          <Text style={ [styles.cell, styleContent != '' ? styleContent :  styles.content ]}>{ content }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: 'row'
    },
    cell: {
        fontSize: 16
    },
    value: {
        flex: 1,
        color: 'blue'
        
    },
    content: {
        flex: 4,
        marginLeft: 10
    }
});

export default Line;