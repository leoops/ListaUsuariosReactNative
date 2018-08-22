
import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';

import Avatar from '../components/Avatar';
import Line from '../components/Line';

class DetailScreen extends Component {
  render() {
    
    const { user } = this.props.navigation.state.params;
    return (
      <View>
        <Avatar imageUri= 'https://picsum.photos/200/300' />
        <Line label='Name' content={ user.name }/>
        <Line label='User Name:' content={ user.username }/>
        <Line label='Email' content={ user.email }/>
        <Line label='Phone:' content={ user.phone }/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    alignContent: 'center',
  }
});

export default DetailScreen;
