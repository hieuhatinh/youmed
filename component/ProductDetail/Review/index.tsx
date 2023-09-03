/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {transmissionText} from '../../../sliceReducer/storeSlice';
import HeaderSection from '../../Header/HeaderSection';
import Divider from '../../Divider';
import stylesGlobal from '../../../assets/styles/global';
import ReviewProductItem from './ReviewProductItem';

const ReviewProduct = () => {
    const dispatch = useDispatch<any>();
    const navigation = useNavigation<any>();

    // navigate đến trang Đánh giá sản phẩm
    const handlePress = () => {
        dispatch(transmissionText('Đánh giá sản phẩm'));
        navigation.navigate('ReviewScreen');
    };

    return (
        <View style={{backgroundColor: 'white', marginTop: 10}}>
            <HeaderSection title="Đánh giá sản phẩm" />
            <Divider />
            {/* <Text
        style={{
            textAlign: 'center',
            top: '50%',
            transform: [{translateY: -50}],
            height: 100,
        }}>
        Chưa có đánh giá nào cho sản phẩm này
    </Text> */}
            <ReviewProductItem />
            <ReviewProductItem />
            <ReviewProductItem />
            <ReviewProductItem />
            <ReviewProductItem />
            <TouchableOpacity
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 10,
                }}
                onPress={handlePress}>
                <Text
                    style={StyleSheet.flatten([
                        stylesGlobal.colorPrimary,
                        {fontWeight: '500'},
                    ])}>
                    Xem tất cả (4)
                </Text>
                <Icon
                    name="chevron-right"
                    size={20}
                    style={StyleSheet.flatten([stylesGlobal.colorPrimary])}
                />
            </TouchableOpacity>
        </View>
    );
};

export default ReviewProduct;
