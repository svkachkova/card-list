import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { Promo } from '../screens/promo';
import { ListOfMovies } from '../screens/list-of-movies';
import { MovieCard } from '../screens/movie-card';

import { BackButton } from '../components/back-button';
import { FilterButton } from '../components/filter-button';

const Stack = createNativeStackNavigator();

function Navigation() {
    const listOfMoviesOptions = ({ navigation }: { navigation: any }) => ({
        title: 'Movies',
        headerTitleStyle: { fontSize: 20 },
        headerLeft: () => <BackButton navigation={navigation} />,
        headerRight: () => <FilterButton />,
    })
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='promo' component={Promo} options={{ headerShown: false }} />
                <Stack.Screen 
                    name='list-of-movies' 
                    component={ListOfMovies} 
                    options={listOfMoviesOptions as NativeStackNavigationOptions} 
                />
                <Stack.Group screenOptions={{ presentation: 'modal' }}>
                    <Stack.Screen 
                        name='movie-card' 
                        component={MovieCard} 
                        options={{ headerShown: false }} 
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export { Navigation };
