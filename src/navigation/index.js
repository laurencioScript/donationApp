import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from '../pages/login';
import fluxoCadastro from '../pages/fluxoCadastro';

const Stack = createStackNavigator();

export default class Navigation extends Component {

    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="login">
                    <Stack.Screen 
                        name="login" 
                        component={login}
                        options={{ 
                            title: '',
                            headerStyle: {
                                backgroundColor: '#2D363D'
                            }
                        }}
                    />
                    <Stack.Screen 
                        name="fluxoCadastro" 
                        component={fluxoCadastro} 
                        options={{ 
                            title: '',
                            headerStyle: {
                                backgroundColor: '#2D363D'   
                            },
                            headerTintColor: '#fff'
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}