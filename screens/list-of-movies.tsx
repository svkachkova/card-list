import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ListHeader } from '../components/list-header';
import { MovieList } from '../components/movie-list';

function ListOfMovies() {
    return (
        <View style={styles.container}>
            <ListHeader />
			<MovieList />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
        width: '100%',
        backgroundColor: '#eee',
    },
});

export { ListOfMovies };
