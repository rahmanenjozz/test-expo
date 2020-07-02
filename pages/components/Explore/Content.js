import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';

export default class Content extends React.Component {
    render() {
        return (
            <View style={{ marginBottom: 20, width: this.props.width / 2 - 30, height: this.props.width / 2 - 30, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                        source={this.props.imageUri} />
                </View>
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 12 }}>{this.props.name}</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>IDR {this.props.price} /Kg</Text>
                    <Text style={{ fontSize: 10 }}>Tersedia {this.props.stok} Kg</Text>
                </View>
            </View>
        );
    }
}