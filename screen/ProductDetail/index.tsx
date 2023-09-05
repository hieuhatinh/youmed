/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useEffect, useState} from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Animated,
} from 'react-native';
import ContentLoader, {Rect} from 'react-content-loader/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import stylesGlobal from '../../assets/styles/global';
import HeaderSection from '../../component/Header/HeaderSection';
import ProductHorizontal from '../../component/Products/ProductsHorizontal';
import Divider from '../../component/Divider';
import HeaderProductDetail from '../../component/Header/HeaderProductDetail';
import Bottom from '../../component/ProductDetail/Bottom';
import Shop from '../../component/ProductDetail/Shop';
import ProductInfo from '../../component/ProductDetail/ProductInfo';
import ReviewProduct from '../../component/ProductDetail/Review';
import {Dimensions} from 'react-native';

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

const screen = Dimensions.get('window');

const ProductDetailScreen = ({navigation}: any) => {
    // header opacity
    const scrollY = useRef(new Animated.Value(0)).current;
    const [loading, setLoading] = useState<boolean>(false);

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
                opacity: 0,
            },
            headerBackground: () => null,
            headerTransparent: true,
            header: () => (
                <HeaderProductDetail
                    title="Sữa bột FontActiv Complete - Dinh dưỡng cho người ốm yếu và mệt mỏi"
                    opacity={opacity}
                    scrollY={scrollY}
                />
            ),
        });
    }, [opacity, navigation, scrollY]);

    // loading
    useEffect(() => {
        setLoading(true);
        const timoutId = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timoutId);
    }, []);

    if (loading) {
        return (
            <View
                style={{
                    height: '100%',
                    backgroundColor: 'white',
                }}>
                <ContentLoader style={{padding: 10}}>
                    <Rect
                        x="0"
                        y="0"
                        rx="4"
                        ry="4"
                        width={screen.width}
                        height={screen.height / 2}
                    />
                    <Rect
                        x="10"
                        y={screen.height / 2 + 10}
                        rx="5"
                        ry="5"
                        width={screen.width}
                        height="30"
                    />
                    <Rect
                        x="10"
                        y={screen.height / 2 + 50}
                        rx="5"
                        ry="5"
                        width="200"
                        height="20"
                    />
                    <Rect
                        x="10"
                        y={screen.height / 2 + 80}
                        rx="5"
                        ry="5"
                        width={screen.width}
                        height="60"
                    />
                    {/* <ContentLoader
                        // ${screen.height / 2 + 150}
                        viewBox={`0 0 ${screen.width} 50`}>
                        <Rect
                            x="0"
                            y="0"
                            rx="5"
                            ry="5"
                            width="70"
                            height="70"
                        />
                        <Rect
                            x="80"
                            y="17"
                            rx="4"
                            ry="4"
                            width="300"
                            height="13"
                        />
                        <Rect
                            x="80"
                            y="40"
                            rx="3"
                            ry="3"
                            width="250"
                            height="10"
                        />
                    </ContentLoader> */}
                </ContentLoader>
            </View>
        );
    }

    return (
        <SafeAreaView>
            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    position: 'relative',
                    bottom: 45,
                }}
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
