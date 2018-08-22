import React, { Component } from 'react';
import { View, Image, StyleSheet} from 'react-native';

const Avatar = ({ imageUri, 
                styleContainer = '', 
                styleImage = ''}) => {
    return(
        <View style={ styleContainer != '' ? styleContainer :  styles.container } >
          <Image source={ { uri: imageUri } } style={ styleImage != '' ? styleImage :  styles.image } />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    image: {
        width: 200,
        height: 200 ,
        marginTop: 10,
        borderRadius: 100,
    }
})
export default Avatar;