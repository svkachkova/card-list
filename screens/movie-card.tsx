import React from 'react';
import { observer } from 'mobx-react-lite';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { useStore } from '../hooks/use-store';
import { CloseButton } from '../components/close-button';

const MovieCard = observer(({ route, navigation }: any): any => {
    const store = useStore();
    const movie = store.movies.get(route.params.id);

    if (movie === undefined) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    const { image, title, description, rt_score, release_date } = movie;

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.button}>
                    <CloseButton navigation={navigation} />
                </View>
                <Image source={{ uri: image }} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>Score: {rt_score}, {release_date}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </ScrollView>
    );
});

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 15,
    },
    scrollView: {
        flex: 1,
    },
    button: {
        alignItems: 'flex-end',
        width: '100%',
        padding: 10,
    },
    image: {
        width: '75%',
        height: undefined,
        aspectRatio: 2/3,
        marginBottom: 25,
    },
    title: {
        fontSize: 26,
        textAlign: 'center',
    },
    subtitle: {
        marginVertical: 10,
        color: '#555',
    },
    description: {
        padding: 15,
        fontSize: 18,
        lineHeight: 26,
        color: '#333',
    },
});

export { MovieCard };
