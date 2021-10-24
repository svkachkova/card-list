import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { useStore } from '../hooks/use-store';

const FilterButton = observer(() => {
    const store = useStore();
    const [isEnabled, setIdEnabled] = useState(false);

    const handlePress = () => {
        store.enableFilter(!isEnabled);
        setIdEnabled(!isEnabled);
    };

    return (
        <View>
            <TouchableOpacity onPress={handlePress}>
                <MaterialIcons name='filter-list-alt' size={24} color='black' />
            </TouchableOpacity>
        </View>
    );
});

export { FilterButton };
