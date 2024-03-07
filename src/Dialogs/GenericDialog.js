import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const GenericDialog = ({ firstBox, secondBox, visible, onClose, onConfirm }) => {
    const [name, setName] = useState('');
    const [attribute, setAttribute] = useState('');

    const handleConfirm = () => {
        try {
            const propertiesObject = attribute ? JSON.parse(attribute) : null
            if (name && (propertiesObject || attribute === '')) {
                onConfirm(name, propertiesObject);
            } else {
                Alert.alert('Error', 'Please provide valid event name and properties');
            }
        } catch (error) {
            Alert.alert('Error', 'Invalid JSON format for event attributes' + error);
        }
    };
    const placeholderText = `Enter ${firstBox}`;
    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>

                    <Text>{firstBox}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={placeholderText}
                        onChangeText={setName}
                        value={name}
                    />

                    <Text>{secondBox} Attributes</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter properties (JSON format)"
                        onChangeText={setAttribute}
                        value={attribute}
                    />
                    <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                        <Text>Confirm {name}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        width: '80%',
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
    confirmButton: {
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    closeButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default GenericDialog;
