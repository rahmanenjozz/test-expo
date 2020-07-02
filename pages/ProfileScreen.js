import React from 'react';
//import all the basic component
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class ProfileScreen extends React.Component {
    //Profile Screen to show in Profile Option
    render() {
        return (
            <View style={styles.container}>
                <Text>Profile Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});