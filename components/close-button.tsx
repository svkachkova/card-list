import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function CloseButton({ navigation }: any) {
     return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name='close' size={24} color='black' />
            </TouchableOpacity>
        </View>
    );
}

export { CloseButton };
