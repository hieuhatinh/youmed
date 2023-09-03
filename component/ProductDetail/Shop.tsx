/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import stylesGlobal from '../../assets/styles/global';

const Shop = () => {
    return (
        <View style={styles.viewShop}>
            <View style={styles.viewProfileShop}>
                <Image
                    source={{
                        uri: 'https://vn-test-11.slatic.net/shop/9a157659b6f9129cc1a814e97682b7d8.png',
                    }}
                    height={90}
                    width={90}
                    resizeMode="cover"
                />
                <View>
                    <Text
                        style={StyleSheet.flatten([
                            stylesGlobal.textColor,
                            {fontSize: 14, fontWeight: '500'},
                        ])}>
                        YouMed Store
                    </Text>
                    <Text
                        style={StyleSheet.flatten([
                            stylesGlobal.textColorSecondary,
                            {fontSize: 12},
                        ])}>
                        <Text
                            style={StyleSheet.flatten([
                                stylesGlobal.colorPrimary,
                                {fontWeight: '500'},
                            ])}>
                            363
                        </Text>{' '}
                        Sản phẩm
                    </Text>
                    <Text
                        style={StyleSheet.flatten([
                            stylesGlobal.textColorSecondary,
                            {fontSize: 12},
                        ])}>
                        <Text
                            style={StyleSheet.flatten([
                                stylesGlobal.colorPrimary,
                                {fontWeight: '500'},
                            ])}>
                            0
                        </Text>{' '}
                        Đánh giá
                    </Text>
                </View>
            </View>

            <View style={StyleSheet.flatten([styles.button])}>
                <Text
                    style={StyleSheet.flatten([
                        stylesGlobal.colorPrimary,
                        {fontWeight: '500', padding: 5},
                    ])}>
                    Xem Shop
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    // shop
    viewShop: {
        marginTop: 10,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    viewProfileShop: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        borderWidth: 1,
        borderColor: '#0066FF',
        borderRadius: 5,
    },
});

export default Shop;
