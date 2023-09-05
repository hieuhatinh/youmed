/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {transmissionText} from '../../sliceReducer/storeSlice';

interface IPropIconCart {
    styleIcon?: any;
}

const IconCart = (props: IPropIconCart) => {
    const {styleIcon} = props;

    const dispatch = useDispatch();
    const navigation = useNavigation<any>();

    const handlePressCart = () => {
        dispatch(transmissionText('Giỏ hàng'));
        navigation.navigate('CartScreen');
    };

    return (
        <TouchableOpacity activeOpacity={1} onPress={handlePressCart}>
            <Icon
                style={styleIcon || styles.icon}
                color="#fff"
                name="cart-outline"
                size={25}
            />
            <View style={styles.badge}>
                <Text style={{color: 'white', textAlign: 'center'}}>7</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    icon: {
        marginRight: 10,
        marginLeft: 10,
        color: '#E8E8E8',
    },
    badge: {
        position: 'absolute',
        top: -10,
        right: -10,
        left: 20,
        width: 20,
        height: 20,
        backgroundColor: '#ef4444',
        borderRadius: 10,
    },
});

export default IconCart;
