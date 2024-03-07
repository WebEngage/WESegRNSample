import { Button, View, StyleSheet } from "react-native";
import React, { useState, useEffect } from 'react';
import EventDialog from "../Dialogs/GenericDialog";
import GenericDialog from "../Dialogs/GenericDialog";
import AppAnalytics from "../Analytics/AppAnalytics";

export default HomeScreen = ({ navigation }) => {


    const [isEventDialogVisible, setEventDialogVisible] = useState(false);
    const [isIdentifyDialogVisible, setIdentifyDialogVisible] = useState(false);
    const [isScreenDialogVisible, setScreenDialogVisible] = useState(false);

    const handleEventConfirm = (eventName, properties) => {
        console.log('Tracking Event:', eventName, 'with Properties:', properties);
        AppAnalytics.getInstance().trackEvent(eventName, properties);
        handleClose();
    };

    const handleIdentifyConfirm = (userID, attributes) => {
        console.log('Tracking User:', userID, 'with Properties:', attributes);
        AppAnalytics.getInstance().trackIdentify(userID, attributes);
        handleClose();
    };

    const handleScreenConfirm = (name, attributes) => {
        console.log('Tracking screen:', name, 'with Properties:', attributes);
        AppAnalytics.getInstance().trackScreen(name, attributes);
        handleClose();
    };

    const handleClose = () => {
        setEventDialogVisible(false);
        setIdentifyDialogVisible(false);
        setScreenDialogVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.space} />
            <Button title="Login Screen" onPress={() => navigation.navigate("Login")} />
            <View style={styles.space} />
            <Button title="Event" onPress={() => setEventDialogVisible(true)} />
            <GenericDialog
                firstBox="Event"
                secondBox="Event"
                visible={isEventDialogVisible}
                onClose={handleClose}
                onConfirm={handleEventConfirm}
            />
            <View style={styles.space} />
            <Button title="Identify" onPress={() => setIdentifyDialogVisible(true)} />
            <GenericDialog
                firstBox="userID"
                secondBox="User"
                visible={isIdentifyDialogVisible}
                onClose={handleClose}
                onConfirm={handleIdentifyConfirm}
            />
            <View style={styles.space} />

            <Button title="Screen" onPress={() => setScreenDialogVisible(true)} />
            <GenericDialog
                firstBox="screen name"
                secondBox="Screen"
                visible={isScreenDialogVisible}
                onClose={handleClose}
                onConfirm={handleScreenConfirm}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#d6d3cb",
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
    },

    space: {
        marginVertical: 10,
    },
});