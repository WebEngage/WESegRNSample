import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import React, { useState } from 'react';
import AppAnalytics from "../Analytics/AppAnalytics";


export default LoginScreen = ({ navigation, route }) => {

    const [userID, setUserID] = useState('');

    const handleLogin = () => {
        AppAnalytics.getInstance().trackIdentify(userID, null);
    };

    const handleLogout = () => {
        AppAnalytics.getInstance().logout();
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter userID"
                onChangeText={(text) => setUserID(text)}
            />
            <Button title="Login" onPress={handleLogin} />
            <View style={{ marginVertical: 10, }} />
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'top',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 8,
        paddingRight: 8,
        width: '100%',
    },
});