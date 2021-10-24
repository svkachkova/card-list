import React from 'react';
import { observer } from 'mobx-react-lite';
import { FlatList, ScrollView, StyleSheet } from 'react-native';

import { useStore } from '../hooks/use-store';
import { ListItem } from '../components/list-item';
import { Movie } from '../types';

const ListOfMovies = observer(({ navigation }: any) => {
    const store = useStore();
    const renderItem = ({ item }: { item: Movie }) => 
        <ListItem movie={item} navigation={navigation} />;

    return (
        <ScrollView style={styles.container}>
            <FlatList 
                data={store.viewData} 
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </ScrollView>
        
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
		width: '100%',
		padding: 10,
        backgroundColor: '#eee',
    },
});

export { ListOfMovies };
