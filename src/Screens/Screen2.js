import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Screen2 extends Component {
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
                        <Text style={styles.screenText}>Screen 2</Text>
                    </View>
                </View>
                <View style={styles.viewBtn}>
                    <TouchableOpacity style={styles.stylesTouchable} onPress={() => this.props.navigation.navigate('Screen5')}>
                        <Text style={styles.gotoText}>Go to Add Photo Screen</Text>
                    </TouchableOpacity>
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
    viewBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    stylesTouchable: {
        width: '60%',
        height: 55,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },
    gotoText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    }

});
