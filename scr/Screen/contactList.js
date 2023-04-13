/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import {
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const ContactList = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const getdata = async () => {
        try {
            const response = await fetch('https://dummyjson.com/users');
            const json = await response.json();
            setUsers(json.users);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(item => {
        getdata();
    }, []);
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{padding:5}}>
                <Text style={{color:'#000', textAlign:'center', fontSize: RFPercentage(3),}}>
                    Contact List
                </Text>
            </View>
            {/* <View
                style={{
                    // width: '100%',
                    // height: 60,
                    width: wp('80%'),
                    height: hp('10%'),
                    flexDirection: 'row',
                    alignItems: 'center',
                    
                }}>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'center',
                    alignContent:'center',
                    alignItems:'center',
                    // textAlign: 'center',
                }}>
                    <Text
                        style={{
                            // fontSize: RFPercentage(3),
                            // fontSize: 25,
                            color: '#000',
                            // justifyContent:'center',
                            // alignContent:'center',
                            // alignItems:'center',
                            // textAlign: 'center',
                            // marginLeft: 90,
                            // marginTop: -50,
                            // fontWeight: 'bold',
                        }}>
                        Contact List
                    </Text>
                </View>
            </View> */}
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={users}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    // alwaysBounceVertical={true}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item }) => (
                        <>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('DetailContact', { item });
                                }}>
                                    <View style={{marginLeft:12, marginRight:20}}>
                                <Image
                                    style={{
                                        height: 50,
                                        width: 50,
                                        borderRadius: 100,
                                        flexDirection: 'row',
                                        top: 10,
                                        borderColor: 'black',
                                        borderWidth: 0.5,
                                    }}
                                    source={{ uri: item.image }}/>
                                <Text
                                    style={{
                                        fontSize: RFPercentage(2),
                                        // fontSize: 20,
                                        // flexDirection: 'row',
                                        // marginLeft: 60,
                                        bottom: 37,
                                        color: '#000',
                                        marginLeft: 70,
                                        marginBottom: -22,
                                        // color:'#000',
                                    }}>
                                    {item.firstName} {item.lastName}
                                </Text>
                                <View style={{
                                    width: wp('80%'),
                                    height: hp('1%'),
                                }}>
                                    <Text style={{
                                        fontSize: RFPercentage(1.7),
                                        // fontSize: 20,
                                        // flexDirection: 'row',
                                        // marginLeft: 60,
                                        bottom: 19,
                                        color: '#000',
                                        marginLeft: 70,
                                        marginBottom: -15,
                                        // color:'#000',
                                    }}>
                                        {item.email}
                                    </Text>
                                </View>
                                <View style={{
                                    height: 1,
                                    width: "100%",
                                    backgroundColor: '#D3D3D3',
                                    marginTop: 5,
                                    marginBottom: -5,
                                }}>
                                    <Text></Text>
                                </View>
                                </View>
                            </TouchableOpacity>
                        </>
                    )}
                />
            )}
        </View>
    );
};



export default ContactList;