/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import Card from '../../../component/SeeMore/Card';
import stylesGlobal from '../../../assets/styles/global';

const listPartner = [
    {
        id: '1',
        uri: 'https://vn-test-11.slatic.net/shop/9a157659b6f9129cc1a814e97682b7d8.png',
        name: 'MEGA WECARE',
    },
    {
        id: '2',
        uri: 'https://vn-test-11.slatic.net/shop/9a157659b6f9129cc1a814e97682b7d8.png',
        name: 'MEGA WECARE',
    },
    {
        id: '3',
        uri: 'https://vn-test-11.slatic.net/shop/9a157659b6f9129cc1a814e97682b7d8.png',
        name: 'MEGA WECARE',
    },
    {
        id: '4',
        uri: 'https://vn-test-11.slatic.net/shop/9a157659b6f9129cc1a814e97682b7d8.png',
        name: 'MEGA WECARE',
    },
    {
        id: '5',
        uri: 'https://vn-test-11.slatic.net/shop/9a157659b6f9129cc1a814e97682b7d8.png',
        name: 'MEGA WECARE',
    },
    {
        id: '6',
        uri: 'https://vn-test-11.slatic.net/shop/9a157659b6f9129cc1a814e97682b7d8.png',
        name: 'MEGA WECARE',
    },
    {
        id: '7',
        uri: 'https://vn-test-11.slatic.net/shop/9a157659b6f9129cc1a814e97682b7d8.png',
        name: 'MEGA WECARE',
    },
    {
        id: '8',
        uri: 'https://vn-test-11.slatic.net/shop/9a157659b6f9129cc1a814e97682b7d8.png',
        name: 'MEGA WECARE',
    },
    {
        id: '9',
        uri: 'https://vn-test-11.slatic.net/shop/9a157659b6f9129cc1a814e97682b7d8.png',
        name: 'MEGA WECARE',
    },
];

const PartnerScreen = () => {
    return (
        <SafeAreaView
            style={StyleSheet.flatten([
                stylesGlobal.backgroundColorSection,
                styles.container,
            ])}>
            <FlatList
                data={listPartner}
                renderItem={({item}) => (
                    <View style={{width: '50%'}}>
                        <Card item={item} />
                    </View>
                )}
                numColumns={2}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default PartnerScreen;
