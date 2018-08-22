
import React, { Component } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import axios from "axios";
// Importação de componnentes para a tela
import ListaItens from '../components/ListaItens';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        userList: [],
        loading: false,
        error: false,
    };
  };

  renderPage() {
    if (this.state.loading){
      return <ActivityIndicator size="large"color="blue" />
    } 
    if (this.state.error) {
      return <Text style={ style.error }>Deu merda</Text>
    }
    return (<ListaItens 
              userList={this.state.userList} 
              onPressItem={ user => {
                this.props.navigation.navigate('Detail', user)
              }}
            />
          ); 
  }
  componentDidMount() {
    this.setState({ loading: true});
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then( response => { 
        const result = response.data;
        this.setState({ 
          userList: result,
          loading: false,
        });
      })
      .catch( error => {
        this.setState({ 
          loading: false,
          error: true,
        })
      });
  };
  render() {
    return (
      <View style={ style.container}>
        {  this.renderPage() }
        
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    padding: 40,
    backgroundColor: 'red',
    color: 'black',
    fontSize: 20,
    alignSelf: 'center',
  }
});
export default HomeScreen;
