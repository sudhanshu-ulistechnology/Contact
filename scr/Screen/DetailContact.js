/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/MaterialIcons';


const DetailContact = ({ navigation, route }) => {
    const { firstName, lastName, email, image, maidenName, phone } = route.params.item;
    return (
        <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>

            <View>
                <View style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    padding: 65,
                    paddingBottom: 25,
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
                                alignSelf: 'center',
                                marginTop: -130,
                                borderColor: 'black',
                                borderRadius: 100,
                                borderWidth: 0.1,
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
                    <Text style={{ marginTop: 5 }}>Mobile {phone}</Text>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between', marginTop: 25,
                    }}>
                        <TouchableOpacity onPress={() => { }}
                            style={{

                                marginHorizontal: 30
                            }}
                        >
                            <Icon name="phone" size={30} color="black" />

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { }}
                            style={{
                                // flexDirection: 'row',
                                // justifyContent: 'space-between',
                                marginHorizontal: 30
                            }}
                        >
                            <Icon name="message" size={30} color="black" />

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { }}
                            style={{
                                // flexDirection: 'row',
                                // justifyContent: 'space-between',
                                marginHorizontal: 30
                            }}
                        >
                            <Icon name="video-call" size={30} color="black" />

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { }}
                            style={{
                                // flexDirection: 'row',
                                // justifyContent: 'space-between',
                                marginHorizontal: 30
                            }}
                        >
                            <Icon name="email" size={30} color="black" />

                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    padding: 25,
                    borderColor: '#ccc',
                    marginTop: 20,
                }}>
                    <Text
                        style={{ marginTop: -15, fontSize: RFPercentage(1.5), color: '#000' }}
                    >Home</Text>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ fontSize: RFPercentage(2.1), fontWeight: 'bold', color: '#000' }}>{email}</Text>
                        <View style={{ marginStart: 180 }}>
                            <Icon name="email" size={24} color="black" />
                        </View>
                    </View>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => { }}
                    >
                        <View style={{
                            borderRadius: 45,
                            padding: 10,
                            margin: 70,
                            backgroundColor: '#DCDCDC',
                            marginTop: 20,
                        }}>
                            <Text style={{ fontWeight: 'bold', textAlign: 'center', color: '#000' }}>History</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { }}
                    >
                        <View style={{
                            borderRadius: 45,
                            padding: 10,
                            margin: 70,
                            backgroundColor: '#DCDCDC',
                            marginTop: -50,
                        }}>
                            <Text style={{ fontWeight: 'bold', textAlign: 'center', color: '#000' }}>Storage locations</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                margin: 25,
                justifyContent: 'space-between',
                marginVertical: 160
            }}>
                <TouchableOpacity
                    onPress={() => { }}
                    style={{
                        // marginHorizontal: 22,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Icon name="star-outline" size={26} color="black" />
                    <Text>Favourites</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { }}
                    style={{
                        // marginHorizontal: 15,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Icon name="edit" size={26} color="black" />
                    <Text>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { }}
                    style={{
                        // marginHorizontal: 38,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Icon name="share" size={26} color="black" />
                    <Text>Share</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { }}
                    style={{
                        // marginHorizontal: 30,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Icon name="more-vert" size={26} color="black" />
                    <Text>More</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default DetailContact;