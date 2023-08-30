/* eslint-disable prettier/prettier */
import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import stylesGlobal from '../../assets/styles/global';
import {transmissionText} from '../../sliceReducer/storeSlice';
import {useDispatch} from 'react-redux';
import {Text} from 'react-native';

interface IPropsHeaderProductDetail {
    title: string;
    scrollY: any;
}

const HeaderProductDetail = (props: IPropsHeaderProductDetail) => {
    const {title, scrollY} = props;

    // opacity Header
    const opacity = scrollY.interpolate({
        inputRange: [0, 200],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });

    const navigation = useNavigation<any>();
    const dispatch = useDispatch<any>();

    const handleGoBack = () => {
        navigation.navigate('StoreScreen');
    };

    const handlePressCart = () => {
        navigation.navigate('CartScreen');
        dispatch(transmissionText('Giỏ hàng'));
    };

    return (
        <Animated.View
            style={StyleSheet.flatten([
                stylesGlobal.headerHigh,
                styles.container,
                {opacity},
            ])}>
            <Icon
                name="chevron-left"
                size={25}
                style={StyleSheet.flatten([
                    stylesGlobal.colorPrimary,
                    {paddingHorizontal: 10},
                ])}
                onPress={handleGoBack}
            />
            <Text numberOfLines={1} style={styles.text}>
                Sữa bột FontActiv Complete - Dinh dưỡng cho người ốm yếu và mệt
                mỏi
            </Text>
            <Icon
                name="cart-outline"
                size={25}
                style={StyleSheet.flatten([
                    stylesGlobal.colorPrimary,
                    {paddingHorizontal: 10},
                ])}
                onPress={handlePressCart}
            />
        </Animated.View>
    );
};

// const AnimatedHeaderBackground =
//     Animated.createAnimatedComponent(HeaderProductDetail);

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
    },
    text: {
        flex: 1,
        color: '#111111',
    },
});

export default HeaderProductDetail;
