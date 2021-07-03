import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Screen4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableNativeFeedback
                        background={TouchableNativeFeedback.Ripple('#E0DCDB50', true)}>
                        <View style={styles.iconBtn}>
                            <Icon name="menu" size={28} color="#fff" />
                        </View>
                    </TouchableNativeFeedback>
                    <View>
                        <Text style={styles.screenText}>Screen 4</Text>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECECEC',
    },

    header: {
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#784800',
        paddingHorizontal: 15,
    },

    iconBtn: {
        backgroundColor: '#784800',
    },

    headerIcon: {
        width: 22,
        height: 22,
        marginHorizontal: 12,
    },
    screenText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },

});
