import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ContactList from './Screen/ContactList';
import DetailContact from './Screen/DetailContact';


const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            component={ContactList}
            name="List"
            options={{headerShown: false}}
            />
            <Stack.Screen
            component={DetailContact}
            name="DetailContact"
            options={{headerShown: false}}

            />
        </Stack.Navigator>

    </NavigationContainer>

  );
};

export default AppNavigator;