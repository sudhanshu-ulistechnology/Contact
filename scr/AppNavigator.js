import { View, Text, Button } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ContactList from './Screen/ContactList';
import DetailContact from './Screen/DetailContact';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


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
            options={{ title: 'Detail',
            headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#2F95D6',
        borderBottomColor: '#ffffff',
        borderBottomWidth: 3,
      },
      headerTitleStyle: {
        fontSize: RFPercentage(2.3),
        
      },
      headerTitleAlign:'center'
        }}
            />
        </Stack.Navigator>

    </NavigationContainer>

  );
};

export default AppNavigator;