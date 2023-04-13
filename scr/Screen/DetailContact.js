/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/Feather';

const DetailContact = ({ navigation, route }) => {
    const { firstName, lastName, email, image, maidenName, phone } = route.params.item;
    return (
        <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>

            <View>
                <View style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    padding: 70,
                    marginTop: 90,
                    alignItems: 'center',
                    // shadowColor: '#000',
                    // shadowOffset: {
                    //     width: 0,
                    //     height: 2,
                    //   },
                    //   shadowOpacity: 0.25,
                    //   shadowRadius: 4,
                    //   elevation: 5,
                }}>
                    <View>

                        <Image source={{ uri: image }}
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 100,
                                alignSelf: 'center',
                                marginTop: -130,
                            }} />
                    </View>
                    <Text style={{
                        fontSize: RFPercentage(2.5),
                        color: '#000',
                        textAlign: 'center',
                        marginLeft: 0,
                        marginTop: -15,
                        // fontWeight: "bold"
                    }}>{firstName} {maidenName} {lastName}</Text>
                    <Text>Mobile {phone}</Text>
                    <View>
          <TouchableOpacity onPress={() => { }}>
            <Icon name="phone-call" size={30} color="#ffd369" />
          </TouchableOpacity>
          {/* <Icon name="phone" size={30} color="#000"/> */}
          </View>
                </View>
                <View style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    padding: 30,
                    borderColor: '#ccc',
                    marginTop: 90,
                    alignItems: 'center',
                    // shadowColor: '#000',
                    // shadowOffset: {
                    //     width: 0,
                    //     height: 2,
                    //   },
                    //   shadowOpacity: 0.25,
                    //   shadowRadius: 4,
                    //   elevation: 1,
                }}>
                    <Text>Hello</Text>
                </View>
            </View>
        </View>
    );
};

export default DetailContact;