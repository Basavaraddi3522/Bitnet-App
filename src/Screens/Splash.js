import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export default class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cirleStyles}>
                    <Text style={styles.compText}> Bitnet Infotech </Text>
                    <Text style={styles.testText}> Practical Interview | React Native </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    compText: {
        fontSize: 28,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'blue'
    },
    testText: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'white'
    },
    cirleStyles: {
        width: width - 80,
        height: width - 80,
        borderRadius: 250,
        backgroundColor: 'black',
        alignSelf: 'center',
        justifyContent: 'center',
        opacity: 0.8
    }

});
