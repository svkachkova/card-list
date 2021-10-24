import React from 'react';
import { observer } from 'mobx-react-lite';
import { TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useStore } from '../hooks/use-store';

const RemoveButton = observer((props: { id: string }) => {
    const store = useStore();

    return (
        <View>
            <TouchableOpacity onPress={() => store.removeMovie(props.id)}>
                <MaterialCommunityIcons name='trash-can-outline' size={24} color='black' />
            </TouchableOpacity>
        </View>
    );
});

export { RemoveButton };
