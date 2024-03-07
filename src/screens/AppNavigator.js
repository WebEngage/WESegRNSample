
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import AppAnalytics from '../Analytics/AppAnalytics';

const Stack = createNativeStackNavigator();

export default MyStack = () => {

    useEffect(() => {
        const analytics = AppAnalytics.getInstance();
        analytics.init();
        analytics.addWebEngage();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'WebEngage Segment RN' }}
                />
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};