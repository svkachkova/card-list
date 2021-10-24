import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from '../assets/logo.png';

function Promo() {
    return (
        <View style={styles.contaiter}>
            <Image source={logo} style={styles.image} />
            {/* <Image source={require('../assets/logo.png')} style={styles.image} /> */}
            <Text style={styles.text}>Collection of Studio Ghibli movies</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    contaiter: {
        // flex: 1,
        alignItems: 'center', 
    },
    image: {
        width: 300,
        height: 144,
        marginBottom: 50,
    },
    text: {
        fontSize: 24,
        fontWeight: '300',
        color: '#333',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#eee",
        paddingVertical: 20,
        paddingHorizontal: 45,
        margin: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    buttonText: {
        fontSize: 24,
    },
});

export { Promo };
