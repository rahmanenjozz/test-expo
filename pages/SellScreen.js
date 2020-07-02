import React, { Component } from 'react';
//import all the basic component
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, Picker, Dimensions, TouchableWithoutFeedbackBase, Image } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import * as ImagePicker from 'expo-image-picker';
import Constant from 'expo-constants';
import * as Permissions from 'expo-permissions';

const { height, width } = Dimensions.get('window')

export default class SellScreen extends React.Component {
    //Sell Screen to show in Sell Option

    state = {
        judul: '',
        stok: '',
        harga: '',
        dataUnit: ['Kg', 'Gram', 'Unit'],
        image: null,
        deskripsi: '',
    };

    render() {
        let { judul, harga, stok, image, deskripsi } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: 'white', height: this.startHeaderHeight }}>
                <View style={{
                    paddingTop: 20, paddingBottom: 20, shadowOffset: { width: 0, height: 0 },
                    shadowColor: 'black',
                    shadowOpacity: 0.2,
                    elevation: 1,
                    backgroundColor: 'white'
                }}>
                    <Text style={{ fontSize: 16, fontWeight: '700', paddingHorizontal: 20, color: 'grey' }}>Ayo Berjualan</Text>
                </View>
                <ScrollView scrollEventThrottle={16}>
                    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                        <View style={{ paddingHorizontal: 20 }}>
                            <View style={{ marginBottom: 5 }}>
                                <TextField
                                    label='Judul'
                                    value={judul}
                                    tintColor="#1FB25F"
                                    baseColor="grey"
                                    textColor="black"
                                />
                                <Text style={{ fontSize: 11, color: 'grey', fontStyle: 'italic' }}>Contoh: Cabai Keriting</Text>
                            </View>
                            <View style={{ marginBottom: 5, flexDirection: 'row', flexWrap: 'wrap' }}>
                                <View
                                    style={{ width: width / 4 }}>
                                    <TextField
                                        label='Stok'
                                        value={stok}
                                        tintColor="#1FB25F"
                                        baseColor="grey"
                                        textColor="black"
                                        keyboardType="number-pad"
                                    />
                                    <Text style={{ fontSize: 11, color: 'grey', fontStyle: 'italic' }}>Contoh: 80</Text>
                                </View>
                                <View style={{ flex: 1, width: width / 3 }}>
                                    <Picker selectedValue={this.state.menu}
                                        onValueChange={(itemValue, itemIndex) => this.setState({ menu: itemValue })}
                                        mode="dropdown">
                                        <Picker.Item label="Gram" value="gram" />
                                        <Picker.Item label="Kg" value="kg" />
                                        <Picker.Item label="Kwintal" value="kwintal" />
                                        <Picker.Item label="Ton" value="ton" />
                                        <Picker.Item label="Liter" value="liter" />
                                        <Picker.Item label="Ekor" value="ekor" />
                                        <Picker.Item label="Biji" value="biji" />
                                        <Picker.Item label="Unit" value="unit" />
                                        <Picker.Item label="Butir" value="butir" />
                                        <Picker.Item label="Buah" value="buah" />
                                        <Picker.Item label="Item" value="item" />
                                        <Picker.Item label="Kodi" value="kodi" />
                                        <Picker.Item label="Lusin" value="lusin" />
                                        <Picker.Item label="Sanchet" value="sanchet" />
                                        <Picker.Item label="Batang" value="batang" />
                                        <Picker.Item label="Meter" value="meter" />
                                    </Picker>
                                </View>
                            </View >
                            <View style={{ marginBottom: 5 }}>
                                <TextField
                                    label='Harga per stok'
                                    value={harga}
                                    tintColor="#1FB25F"
                                    baseColor="grey"
                                    textColor="black"
                                    keyboardType="number-pad"
                                />
                                <Text style={{ fontSize: 11, color: 'grey', fontStyle: 'italic' }}>Contoh: 5000</Text>
                            </View>
                            <View style={{ marginBottom: 20 }}>
                                <TextField
                                    label='Deskripsi'
                                    value={deskripsi}
                                    tintColor="#1FB25F"
                                    baseColor="grey"
                                    textColor="black"
                                    multiline
                                    numberOfLines={5}
                                />
                            </View>
                            <View style={{ marginBottom: 20 }}>
                                <Button
                                    title="Upload Gambar"
                                    onPress={this.__pickImage}
                                    color="#1FB25F"
                                />
                                <View style={{ marginTop: 20, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    {image && <Image source={{ uri: image }} style={{ width: 250, height: 200 }} />}
                                </View>
                            </View>
                            <View style={{ marginBottom: 20 }}>
                                <Button
                                    title="Mulai Posting"
                                    color="#1FB25F"
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View >
        );
    }
    componentDidMount() {
        this.getPermissionAsync();
    }
    getPermissionAsync = async () => {
        if (Constant.platform.android) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permission to make this work!');
            }
        }
    };
    __pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }
            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };
}