/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';

import CardProduct from '../../component/Cart/CardProduct';
import stylesGlobal from '../../assets/styles/global';
import Divider from '../../component/Divider';
import {productsCart} from '../../fakeData/products';

const CartScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView
                style={{
                    backgroundColor: 'white',
                    position: 'relative',
                    bottom: 45,
                    top: 0,
                }}
                showsVerticalScrollIndicator={false}>
                {productsCart.map(item => (
                    <View
                        key={item.id}
                        style={{
                            backgroundColor: 'white',
                            marginHorizontal: 10,
                        }}>
                        <Text
                            style={StyleSheet.flatten([
                                styles.textStore,
                                stylesGlobal.textColor,
                            ])}>
                            {item.store}
                        </Text>
                        <Divider />
                        {item.products.map(product => (
                            <CardProduct key={product.id} product={product} />
                        ))}
                    </View>
                ))}
            </ScrollView>
            <View style={styles.viewBottom}>
                <View style={styles.viewSumPrice}>
                    <View style={styles.priceBottom}>
                        <Text>Tổng thanh toán</Text>
                        <Text
                            style={StyleSheet.flatten([
                                stylesGlobal.colorPrimary,
                                styles.price,
                            ])}>
                            5.995.000đ
                        </Text>
                    </View>
                    <View
                        style={StyleSheet.flatten([
                            styles.priceBottom,
                            {marginTop: 5},
                        ])}>
                        <Text>Tổng giảm giá</Text>
                        <Text
                            style={StyleSheet.flatten([
                                {color: '#FFCC00'},
                                styles.price,
                            ])}>
                            -15.000đ
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={StyleSheet.flatten([
                        stylesGlobal.backgroundColorPrimary,
                        styles.buttonBuy,
                    ])}>
                    <Text style={styles.textButton}>Mua hàng</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textStore: {
        fontSize: 18,
        paddingHorizontal: 10,
        paddingTop: 10,
        fontWeight: '500',
    },
    viewBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        // paddingBottom: 20,
        marginTop: 10,
    },
    viewSumPrice: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: 10,
    },
    priceBottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontWeight: '500',
        marginLeft: 16,
    },
    buttonBuy: {
        width: 100,
    },
    textButton: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        top: '-50%',
        transform: [{translateY: 50}],
        fontWeight: '500',
    },
});

export default CartScreen;
