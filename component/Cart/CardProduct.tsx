/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import stylesGlobal from '../../assets/styles/global';
import {IProduct} from '../../utilities/interfaces/product';
import NumberProduct from '../Button/NumberProduct';

interface IPropsProduct {
    product: IProduct;
}

const CardProduct = (props: IPropsProduct) => {
    const {product} = props;

    return (
        <View style={styles.component}>
            <Image
                source={{
                    uri: product.uri,
                }}
                height={100}
                width={100}
                resizeMode="contain"
            />

            <View style={{flex: 1}}>
                <Text
                    style={StyleSheet.flatten([
                        {
                            fontSize: 16,
                            fontWeight: '500',
                        },
                        stylesGlobal.textColor,
                    ])}>
                    {product.name}
                </Text>
                {/* price */}
                <View style={styles.viewPrice}>
                    <Text style={styles.oldPrice}>
                        {product.oldPrice.toLocaleString('vi-VN', {
                            style: 'currency',
                            currency: 'VND',
                        })}
                    </Text>
                    <Text
                        style={StyleSheet.flatten([
                            stylesGlobal.colorPrimary,
                            styles.price,
                        ])}>
                        {product.price.toLocaleString('vi-VN', {
                            style: 'currency',
                            currency: 'VND',
                        })}
                    </Text>
                </View>

                {/* number product */}
                <NumberProduct />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    component: {
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
    },
    textNameProduct: {
        fontSize: 16,
        fontWeight: '500',
    },
    viewInfo: {
        marginLeft: 10,
    },

    // price
    viewPrice: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 5,
    },
    price: {
        fontWeight: '500',
        // fontSize: 18,
        marginLeft: 16,
    },
    oldPrice: {
        color: '#828282',
        fontWeight: '500',
        textDecorationLine: 'line-through',
    },
    viewButton: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 3,
        width: 100,
        borderRadius: 10,
    },
});

export default CardProduct;
