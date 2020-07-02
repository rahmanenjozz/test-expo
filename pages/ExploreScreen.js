import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, ScrollView, Image, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Category from './components/Explore/Category';
import Content from './components/Explore/Content';

const { height, width } = Dimensions.get('window')

export default class ExploreScreen extends React.Component {
    //Explore Screen to show in Explore Option
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', height: this.startHeaderHeight }}>
                <View style={{
                    flexDirection: 'row', padding: 10,
                    backgroundColor: 'white', marginHorizontal: 20, marginTop: 20,
                    shadowOffset: { width: 0, height: 0 },
                    shadowColor: 'black',
                    shadowOpacity: 0.2,
                    elevation: 1
                }}>
                    <Ionicons name="ios-search" size={20} style={{ marginRight: 10, color: 'grey' }} />
                    <TextInput
                        placeholder="Mau Sayur Apa?"
                        placeholderTextColor="grey"
                        style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
                    />
                </View>
                <ScrollView scrollEventThrottle={16}>
                    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: '700', paddingHorizontal: 20, color: 'grey' }}>
                            Sayuran Top
                        </Text>
                        <View style={{ height: 130, marginTop: 20 }}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <Category imageUri={require('../assets/sawi.jpg')} name="Sawi Pakcoy" />
                                <Category imageUri={require('../assets/cabai.jpg')} name="Cabai Keriting Merah" />
                                <Category imageUri={require('../assets/lengkuas.jpg')} name="Lengkuas" />
                            </ScrollView>
                        </View>
                        <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: '700', color: 'grey' }}>
                                Sayuran Segar
                            </Text>
                            <Text style={{ fontWeight: '100', color: 'grey', marginTop: 10 }}>
                                Baru di panen dari lahan pertanian
                            </Text>
                            <View style={{ marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                <Content imageUri={require('../assets/mentimun.jpg')} width={width} name="Mentimun" price="5,000" stok="30" />
                                <Content imageUri={require('../assets/kentang.jpg')} width={width} name="Kentang" price="2,500" stok="80" />
                                <Content imageUri={require('../assets/bawang.jpeg')} width={width} name="Bawang Merah" price="3,000" stok="45" />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}