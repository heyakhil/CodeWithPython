import React from 'react'
import SignUp from "./SignUp";
import Login from "./Login";
import Splash from "./Splash";
import Register from "./Register";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// here we install the library for navigation (stack and native)


const Stack = createStackNavigator();

export default class App extends React.Component {
    render(){
        return(
          
      // here we navigate the all files

    <NavigationContainer>
    <Stack.Navigator  
        screenOptions={{
          headerShown: false
        }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
    </NavigationContainer>
    
        )
    }
}









