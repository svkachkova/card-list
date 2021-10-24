import React from 'react';
import { observer } from 'mobx-react-lite';
import { StyleSheet, Text, View } from 'react-native';

import { BackButton } from './back-button';
import { FilterButton } from './filter-button';

const ListHeader = observer(() => {
    return (
        <View style={styles.container}>
            <BackButton />
            <Text style={styles.text}>Movies</Text>
            <FilterButton />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',

        shadowColor: "#333",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 1,
    },
    text: {
        fontSize: 24,
    },
});

export { ListHeader };
