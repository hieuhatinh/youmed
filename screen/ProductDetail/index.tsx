/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import stylesGlobal from '../../assets/styles/global';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderSection from '../../component/Header/HeaderSection';
import ProductHorizontal from '../../component/Products/ProductsHorizontal';
import Divider from '../../component/Divider';
import {Animated} from 'react-native';
import HeaderProductDetail from '../../component/Header/HeaderProductDetail';
import Bottom from '../../component/ProductDetail/Bottom';
import Shop from '../../component/ProductDetail/Shop';
import ProductInfo from '../../component/ProductDetail/ProductInfo';
import ReviewProduct from '../../component/ProductDetail/Review';

const listOther = [
    {
        id: '1',
        icon: 'truck',
        title: 'Miễn phí vận chuyển',
    },
    {
        id: '2',
        icon: 'doctor',
        title: 'Dược sĩ tư vấn 24/7',
    },
    {
        id: '3',
        icon: 'shield-check',
        title: 'Hàng chính hãng',
    },
    {
        id: '4',
        icon: 'truck-fast',
        title: 'Giao hàng nhanh 2h',
    },
    {
        id: '5',
        icon: 'label-percent',
        title: 'Tiết kiệm 5% cho thành viên',
    },
];

const ProductDetailScreen = ({navigation}: any) => {
    // header
    const scrollY = useRef(new Animated.Value(0)).current;

    const opacity: Animated.AnimatedInterpolation<number> = scrollY.interpolate(
        {
            inputRange: [0, 60],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        },
    );

    useEffect(() => {
        navigation.setOptions({
            headerStyle: {
                opacity: 0, // Set opacity to 0 to make header transparent
            },
            headerBackground: () => null,
            headerTransparent: true,
            header: () => (
                <HeaderProductDetail
                    title="Sữa bột FontActiv Complete - Dinh dưỡng cho người ốm yếu và mệt mỏi"
                    opacity={opacity}
                    scrollY={scrollY} // Add a prop to hide the title
                />
            ),
        });
    }, [opacity, navigation, scrollY]);

    return (
        <SafeAreaView>
            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                style={{position: 'relative', bottom: 45}}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: {
                                    y: scrollY,
                                },
                            },
                        },
                    ],
                    {useNativeDriver: false},
                )}
                scrollEventThrottle={16}>
                {/* product infomation */}
                <ProductInfo />

                {/* Shop */}
                <Shop />

                {/* More infomation */}
                <View style={styles.viewShared}>
                    <FlatList
                        data={listOther}
                        renderItem={({item}) => (
                            <View style={styles.viewOtherItem}>
                                <Icon name={item.icon} size={20} />
                                <Text
                                    style={StyleSheet.flatten([
                                        stylesGlobal.textColorSecondary,
                                        {marginLeft: 10},
                                    ])}>
                                    {item.title}
                                </Text>
                            </View>
                        )}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        scrollEnabled={false}
                    />
                </View>

                {/* update */}
                <View style={styles.viewShared}>
                    <View
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 10,
                        }}>
                        <Icon name="clock-time-five" size={20} />
                        <Text style={{marginLeft: 10}}>
                            Cập nhật: 02/08/2023
                        </Text>
                    </View>
                    <Divider />
                </View>

                {/* product reviews */}
                <ReviewProduct />

                {/* other product */}
                <View style={{marginVertical: 10}}>
                    <HeaderSection
                        title="Sản phẩm khác"
                        buttonText={{
                            text: 'Xem tất cả',
                            screenName: 'OtherProductsScreen',
                        }}
                    />
                    <ProductHorizontal />
                </View>
            </Animated.ScrollView>

            <Bottom />
        </SafeAreaView>
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

    // more information / other
    viewShared: {
        marginTop: 10,
        backgroundColor: 'white',
        padding: 10,
    },
    viewOtherItem: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        paddingVertical: 2,
    },
});

export default ProductDetailScreen;
