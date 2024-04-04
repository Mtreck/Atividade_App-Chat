import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './src/componentes/Cadastro';
import Login from './src/componentes/Login';
import Chat from './src/componentes/Chat';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Cadastro">
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Chat" component={Chat} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;