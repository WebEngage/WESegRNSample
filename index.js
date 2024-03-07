/**
 * @format
 */

import { AppRegistry } from 'react-native';
import React from 'react';
import { name as appName } from './app.json';

import App from './App';
import MyStack from './src/screens/AppNavigator';

AppRegistry.registerComponent(appName, () => MyStack);
