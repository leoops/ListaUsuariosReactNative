import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/screen/Home';
import DetailScreen from './src/screen/Detalhe';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: ({navigation}) => {
        const userName = navigation.state.params.user.name
        return({
          title: userName,
        })
      }
    }
  },
  {
    navigationOptions: {
      title: "Usuários",
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#0987FF",
      },
      headerTitleStyle: {
        color: "#fff",
        fontSize: 20
      }
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default RootStack;