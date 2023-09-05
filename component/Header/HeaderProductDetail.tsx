/* eslint-disable prettier/prettier */
import React from 'react';
import {Animated, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import stylesGlobal from '../../assets/styles/global';
import {transmissionText} from '../../sliceReducer/storeSlice';
import {useDispatch} from 'react-redux';
import IconCart from '../Button/IconCart';

interface IPropsHeaderProductDetail {
    title: string;
    opacity: any;
    scrollY: any;
}

const HeaderProductDetail = (props: IPropsHeaderProductDetail) => {
    const {title, scrollY} = props;

    const navigation = useNavigation<any>();
    const dispatch = useDispatch<any>();

    const handleGoBack = () => {
        navigation.navigate('StoreScreen');
    };

    const handlePressCart = () => {
        navigation.navigate('CartScreen');
        dispatch(transmissionText('Giỏ hàng'));
    };

    // chỉnh màu cho header và button
    const showTitle = scrollY.interpolate({
        inputRange: [0, 60],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });

    const iconBackgroundColor = scrollY.interpolate({
        inputRange: [0, 60],
        outputRange: ['#DDDDDD', 'transparent'],
        extrapolate: 'clamp',
    });

    const headerBackground = scrollY.interpolate({
        inputRange: [0, 60],
        outputRange: ['transparent', '#fff'],
        extrapolate: 'clamp',
    });

    return (
        <Animated.View
            style={StyleSheet.flatten([
                stylesGlobal.headerHeight,
                styles.container,
                {backgroundColor: headerBackground},
            ])}>
            <TouchableOpacity activeOpacity={0.9} onPress={handleGoBack}>
                <Animated.View
                    style={StyleSheet.flatten([
                        {
                            backgroundColor: iconBackgroundColor,
                        },
                        styles.icon,
                    ])}>
                    <Icon
                        name="chevron-left"
                        size={25}
                        onPress={handleGoBack}
                        style={StyleSheet.flatten([
                            stylesGlobal.colorPrimary,
                            styles.iconTransparentHeader,
                        ])}
                    />
                </Animated.View>
            </TouchableOpacity>
            <Animated.Text
                style={StyleSheet.flatten([styles.text, {opacity: showTitle}])}
                numberOfLines={1}>
                {title}
            </Animated.Text>
            <TouchableOpacity activeOpacity={0.9} onPress={handlePressCart}>
                <Animated.View
                    style={StyleSheet.flatten([
                        {
                            backgroundColor: iconBackgroundColor,
                        },
                        styles.icon,
                    ])}>
                    <IconCart
                        styleIcon={StyleSheet.flatten([
                            stylesGlobal.colorPrimary,
                            styles.iconTransparentHeader,
                        ])}
                    />
                </Animated.View>
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        paddingHorizontal: 10,
    },
    text: {
        flex: 1,
        color: '#111111',
    },
    iconTransparentHeader: {
        textAlign: 'center',
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        padding: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HeaderProductDetail;
