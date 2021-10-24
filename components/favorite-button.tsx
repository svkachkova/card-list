import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { useStore } from '../hooks/use-store';

const FavoriteButton = observer((props: { id: string }) => {
    const store = useStore();
    const [isFavorite, setIsFavorite] = useState(store.movies.get(props.id)?.isFavorite);

    const icon = (isFavorite ? 
        <MaterialIcons name='favorite' size={24} color='red' /> : 
        <MaterialIcons name='favorite-outline' size={24} color='black' />
    );

    const handlePress = () => {
        store.setFavorite(props.id, !isFavorite);
        setIsFavorite(!isFavorite);
    };

    return (
        <View>
            <TouchableOpacity onPress={handlePress}>
                {icon}
            </TouchableOpacity>
        </View>
    );
});

export { FavoriteButton };
