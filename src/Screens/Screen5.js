import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const { width, height } = Dimensions.get('screen');

export default class Screen5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileImage: ''
        };
    }

    pickImage = () => {
        const options = {
            title: 'Select your profile image.',
            storageOptions: {
                skipBackup: true,
                path: 'Pictures/myAppPicture/',
                privateDirectory: true
            }
        };
        launchImageLibrary(options, (response) => {
            if (response.error) {

            } else {
                response.assets ? this.setState({ profileImage: response.assets[0] }) : null

            }
        });

    }

    deleteImage = () => {
        this.setState({ profileImage: '' })
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.userImage}>
                    {this.state.profileImage ? <Image
                        source={{ uri: this.state.profileImage.uri }}
                        style={styles.realImage}
                    /> : <AntDesign name='user' size={120} color='white' />}
                </View>
                <View style={styles.btnStyleView} >
                    <TouchableOpacity style={styles.btnStyleTouchable} onPress={this.state.profileImage ? this.deleteImage : this.pickImage}>
                        <Text style={styles.textStyle}>{this.state.profileImage ? "Delete Photo" : "Add Photo"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '10%'
    },
    userImage: {
        width: width - 50,
        height: width - 50,
        backgroundColor: 'gray',
        borderRadius: 250,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black'
    },
    realImage: {
        width: width - 50,
        height: width - 50,
        backgroundColor: 'gray',
        borderRadius: 250,
        borderWidth: 2,
        borderColor: 'black'
    },
    btnStyleView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    btnStyleTouchable: {
        width: '80%',
        height: 55,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },
    textStyle: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    }

});