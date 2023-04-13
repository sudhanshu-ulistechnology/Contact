/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

const DetailContact = ({ navigation, route }) => {
    const { first_name, last_name, email, avatar } = route.params.item;
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>

<View>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../images/back.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: '#000',
                marginBottom: 0,
                marginLeft: 30
              }}
            />
          </TouchableOpacity>
          <View>
          <Text style={{
            fontSize: 25,
            color: '#333300',
            textAlign: 'center',
            fontWeight: "bold",
          }}>Profile</Text>
          </View>
          </View>
          </View>
    </View>
  );
};

export default DetailContact;