import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function BackButton() {
     return (
        <View>
            <TouchableOpacity onPress={() => {}}>
                <MaterialIcons name='arrow-back' size={24} color='black' />
            </TouchableOpacity>
        </View>
    );
}

export { BackButton };
