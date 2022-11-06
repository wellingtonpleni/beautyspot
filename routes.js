/* eslint-disable prettier/prettier */
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from './src/pages/Preload';
import Login from './src/pages/Login';
import Home from './src/pages/Home';

const Routes = () => {

    const Stack = createStackNavigator();
    return (
       <NavigationContainer>
            <Stack.Navigator initialRouteName="Preload">
                <Stack.Screen options={{headerShown: false}} name="Preload" component={Preload} />
                <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
                <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
            </Stack.Navigator>
       </NavigationContainer>
    );
};

export default Routes;
