import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import * as firebase from 'firebase'; 

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBpNiRidWt1BEFpILOl-YLms7AB4ZgC5xs",
  authDomain: "mobileproject-02.firebaseapp.com",
  databaseURL: "https://mobileproject-02.firebaseio.com",
  projectId: "mobileproject-02",
  storageBucket: "",
  messagingSenderId: "519664018201",
  appId: "1:519664018201:web:1c17e3a4064fd8a486db88"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const AppStack = createStackNavigator({
      Home: HomeScreen
})

const AuthStack = createStackNavigator({
    Login:LoginScreen,
    Register:RegisterScreen
})

export default createAppContainer(
  createAppContainer(
    {
      Loading:LoadingScreen,
      App:AppStack,
      Auth:AuthStack
    },
    {
      initialRouteName:"Loading"
    }
  )
);
