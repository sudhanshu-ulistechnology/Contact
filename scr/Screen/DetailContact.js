/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { Text, 
         View, 
         Image, 
         TouchableOpacity, 
         StyleSheet, 
         Alert, 
         Modal } from 'react-native';
import { useState } from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const DetailContact = ({ navigation, route }) => {
    const { firstName, lastName, email, image, maidenName, phone } = route.params.item;
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleShare, setModalVisibleShare] = useState(false);
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
                }}>
                    <View>

                        <Image source={{ uri: image }}
                            style={styles.profile} />
                    </View>
                    <Text style={styles.profileData}>
                        {firstName} {maidenName} {lastName}</Text>
                        <View style={{ flexDirection:'row' }}>
                    <Text style={{ marginTop: 3, color:'#000'}}>Mobile</Text>
                    <Text style={{marginTop:2, 
                                  marginLeft:15, 
                                  fontWeight:'bold', 
                                  color:'#000'}}>{phone}</Text>
                        </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between', 
                        marginTop: 25,
                    }}>
                        <TouchableOpacity onPress={() => { }}
                            style={styles.topIcon}
                        >
                            <Icon name="phone" size={30} color="#00804d" />

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { }}
                            style={styles.topIcon}
                        >
                            <Icon name="message" size={30} color="lightblue" />

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { }}
                            style={styles.topIcon}
                        >
                            <Icon name="video-call" size={30} color="black" />

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { }}
                            style={styles.topIcon}
                        >
                            <Icon name="email" size={30} color="grey" />

                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    padding: 25,
                    borderColor: '#ccc',
                    marginTop: 20,
                    height: hp('9%'),
                    width: wp('100%')
                }}>
                    <Text
                        style={{ marginTop: -15, 
                                 fontSize: RFPercentage(1.5), 
                                 color: '#000' }}
                    >Email</Text>
                    <View style={{ flex: 1, flexDirection: 'row'}}>
                        <Text style={{ fontSize: RFPercentage(2), 
                                       fontWeight: 'bold', 
                                       color: '#000' }}>{email}</Text>
                        <View style={{
                            flex: 1, marginStart: 170, 
                            height: hp('9%'),
                            width: wp('100%')
                        }}>
                            <Icon name="email" size={24} color="grey" />
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
                            <Text style={{ fontWeight: 'bold',
                                           textAlign: 'center', 
                                           color: '#000' }}>History</Text>
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
                            <Text style={{ fontWeight: 'bold', 
                                           textAlign: 'center', 
                                           color: '#000' }}>Storage locations</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                        // setModalVisible(false)
                        setModalVisible(true);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalTitleText}>Alert</Text>
                            <Text style={styles.modalMessageText}>Do you To Edit Contact?</Text>
                            <View style={styles.insideButton}>
                                <View>
                                    <TouchableOpacity
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.textStyleCancel}>Cancel</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity

                                        style={[styles.button, styles.buttonContinue]}
                                        onPress={() => {
                                            navigation.navigate('Edit');
                                        }}
                                    >
                                        <Text style={styles.textStyleCancel}>Continue</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

                <View>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisibleShare}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisibleShare(!modalVisibleShare);
                            // setModalVisible(false)
                            setModalVisibleShare(true);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                {/* <Text style={styles.modalTitleText}>Alert</Text> */}
                                <Text style={styles.modalMessageText}>Comming Soon</Text>
                                <View style={styles.insideButton}>
                                    <View>
                                        <TouchableOpacity
                                            style={[styles.button, styles.ShareCancleButton]}
                                            onPress={() => setModalVisibleShare(!modalVisibleShare)}>
                                            <Text style={styles.textStyleCancel}>Cancel</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </Modal>

                    {/* <View style={{ flex: 1 }}>
                        <View style={{
                            // flex:2,
                            flexDirection: 'row',
                            margin: 25,
                            justifyContent: 'space-between',
                            marginBottom: -50,
                            marginVertical: 140,
                            height: hp('4%'),
                            width: wp('88%')
                        }}>
                            <TouchableOpacity
                                onPress={() => { }}
                                style={styles.bottomIcon}
                            >
                                <Icon name="star-outline" size={26} color="black" />
                                <Text style={styles.bottomText}>Favourites</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setModalVisible(true)}
                                style={styles.bottomIcon}
                            >
                                <Icon name="edit" size={26} color="black" />
                                <Text style={styles.bottomText}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setModalVisibleShare(true)}
                                style={styles.bottomIcon}
                            >
                                <Icon name="share" size={26} color="black" />
                                <Text style={styles.bottomText}>Share</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { }}
                                style={styles.bottomIcon}
                            >
                                <Icon name="more-vert" size={26} color="black" />
                                <Text style={styles.bottomText}>More</Text>
                            </TouchableOpacity>
                        </View>
                    </View> */}
                </View>
            </View>
        </View>
    );
};

export default DetailContact;



const styles = StyleSheet.create({
    profileData: {
        fontSize: RFPercentage(2.5),
        color: '#000',
        textAlign: 'center',
        marginTop: -15,
    },
    profile: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: -130,
        borderColor: 'black',
        borderRadius: 100,
        borderWidth: 0.1,
    },
    topIcon: {
        marginHorizontal: 30,
    },
    bottomIcon: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },



    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        paddingBottom: 2,
        paddingVertical: 30,
        paddingHorizontal: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    bottomText:{
        color:'#000'
    },

    buttonOpen: {
        marginTop: 100,
    },
    ShareCancleButton:{
        alignSelf:'center',
        paddingBottom:15,
    },
    buttonClose: {
        marginTop: 8,
        // alignContent:'center',

        borderRadius: 10,
        padding: 8,
        marginRight: 60,
    },
    modalMessageText: {
        color: 'black',
        fontWeight: 'bold',
    },
    buttonContinue: {
        marginTop: 8,

        borderRadius: 10,
        padding: 8,
    },
    textStyle: {
        color: 'black',
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalTitleText: {
        marginBottom: 15,
        marginTop: -28,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    textStyleCancel: {
        color: '#2196F3',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    insideButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 30,
    },

});