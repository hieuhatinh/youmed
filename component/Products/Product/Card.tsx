/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import stylesGlobal from '../../../assets/styles/global';
import {IProduct} from '../../../utilities/interfaces/product';

interface IPropCardProduct {
    item: IProduct;
}

const CardProduct = (props: IPropCardProduct) => {
    const {item} = props;

    const navigation = useNavigation<any>();

    const handlePress = () => {
        navigation.navigate('ProductDetailScreen');
    };

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={handlePress}
            style={styles.container}>
            <Image
                source={{
                    uri: item.uri,
                }}
                height={150}
                width={200}
                resizeMode="contain"
            />
            <View style={styles.info}>
                {/* Product name */}
                <Text
                    style={styles.textTitle}
                    numberOfLines={2}
                    ellipsizeMode="tail">
                    {item.name}
                </Text>

                {/* Price */}
                <Text
                    style={StyleSheet.flatten([
                        stylesGlobal.colorPrimary,
                        styles.price,
                    ])}>
                    {item.price.toLocaleString('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                    })}
                </Text>
                <View style={styles.viewOldPrice}>
                    <Text style={styles.oldPrice}>
                        {item.oldPrice.toLocaleString('vi-VN', {
                            style: 'currency',
                            currency: 'VND',
                        })}
                    </Text>
                    <View style={styles.percentDiscount}>
                        <Text style={{color: '#EE3B3B', padding: 2}}>
                            - {item.percentDiscount}%
                        </Text>
                    </View>
                </View>
                <Text style={{marginTop: 10, marginBottom: 10}}>
                    Xuất xứ: {item.origin}
                </Text>

                {/* Evaluate: Đánh giá */}
                <View
                    style={StyleSheet.flatten([
                        stylesGlobal.centerSpaceBetween,
                        styles.viewEvaluate,
                    ])}>
                    <View style={styles.star}>
                        <Icon name="star" size={15} color="#FF9900" />
                        <Text style={{marginLeft: 5}}>{item.star}</Text>
                    </View>
                    <Text>Đã bán {item.sold}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginRight: 0.5,
        marginLeft: 0.5,
        marginBottom: 1,
        backgroundColor: 'white',
    },
    info: {
        padding: 10,
    },
    textTitle: {
        color: '#1C1C1C',
        fontWeight: '500',
    },
    // price
    price: {
        fontWeight: '500',
    },
    viewOldPrice: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    oldPrice: {
        color: '#828282',
        fontWeight: '500',
        textDecorationLine: 'line-through',
    },
    percentDiscount: {
        borderWidth: 1,
        borderColor: '#EE3B3B',
        borderRadius: 5,
        backgroundColor: '#FF00001A',
        minWidth: 20,
        marginLeft: 10,
    },
    // evaluate
    viewEvaluate: {
        flexDirection: 'row',
    },
    star: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
});

export default CardProduct;
