import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function BackButton({ navigation }: any) {
     return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('promo')}>
                <MaterialIcons name='arrow-back' size={24} color='black' />
            </TouchableOpacity>
        </View>
    );
}

export { BackButton };
