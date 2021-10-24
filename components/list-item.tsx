import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { FavoriteButton } from './favorite-button';
import { RemoveButton } from './remove-button';

type Props = {
    movie: Movie;
};

import { Movie } from '../types';

function ListItem(props: Props) {
    const { id, image, title } = props.movie;

    return (
        <View style={styles.item}>
            <View>
                <Image style={styles.image} source={{ uri: image }}/>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.buttons}>
                <FavoriteButton id={id} />
                <RemoveButton id={id} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        width: '45%',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 15,
        margin: 10,
        borderRadius: 5,

        shadowColor: "#333",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    title: {
        fontSize: 18,
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 2/3,
        marginBottom: 10,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
});

export { ListItem };
