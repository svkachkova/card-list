import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import logo from '../assets/logo.png';

function Promo({ navigation }: any) {
    return (
        <View style={styles.contaiter}>
            <Image source={logo} style={styles.image} />
            <Text style={styles.text}>Collection of Studio Ghibli movies</Text>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('list-of-movies')}
            >
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    contaiter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 300,
        height: 144,
        marginBottom: 50,
    },
    text: {
        fontSize: 24,
        fontWeight: '300',
        textAlign: 'center',
        color: '#333',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#ddd",
        paddingVertical: 20,
        paddingHorizontal: 45,
        margin: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    buttonText: {
        fontSize: 24,
    },
});

export { Promo };
