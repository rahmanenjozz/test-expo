import React from 'react';
//import all the basic component
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class DetailScreen extends React.Component {
    //Detail Screen to show from any Open detail button
    render() {
        return (
            <View style={styles.container}>
                <Text>Detail Screen</Text>
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