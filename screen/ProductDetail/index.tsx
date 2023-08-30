/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useMemo, useCallback, useState} from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import stylesGlobal from '../../assets/styles/global';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderSection from '../../component/Header/HeaderSection';
import ProductHorizontal from '../../component/Products/ProductsHorizontal';
import Divider from '../../component/Divider';
import NumberProduct from '../../component/Button/NumberProduct';
import ReviewProduct from '../../component/ProductDetail/ReviewProduct';
import {transmissionText} from '../../sliceReducer/storeSlice';
import HeaderProductDetail from '../../component/Header/HeaderProductDetail';
import {Animated} from 'react-native';

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

const ProductDetailScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<any>();

    const [textButtonSheet, setTextButtonSheet] = useState<string>('');

    const scrollY = useRef(new Animated.Value(0)).current;
    console.log(scrollY);

    // bottom sheet
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['40%'], []);

    // callbacks
    const handlePresentModalPress = useCallback((text: string) => {
        bottomSheetModalRef.current?.present();
        setTextButtonSheet(text);
    }, []);

    const handleBackdropPress = React.useCallback(() => {
        bottomSheetModalRef.current?.close();
    }, []);

    // render
    const renderBackdrop = useCallback(
        (props: any) => (
            <BottomSheetBackdrop
                {...props}
                opacity={0.6}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
                pressBehavior="close"
                onPress={handleBackdropPress}
                closeOnPress
            />
        ),
        [],
    );

    // navigate đến trang Đánh giá sản phẩm
    const handlePress = () => {
        dispatch(transmissionText('Đánh giá sản phẩm'));
        navigation.navigate('ReviewScreen');
    };

    return (
        <SafeAreaView>
            <View style={{position: 'absolute', left: 0, right: 0, top: 0}}>
                <HeaderProductDetail
                    title="Sữa bột FontActiv Complete - Dinh dưỡng cho người ốm yếu và mệt mỏi"
                    scrollY={scrollY}
                />
            </View>
            <ScrollView
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
                <View style={styles.productInfo}>
                    <Image
                        source={{
                            uri: 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/8/30/uong-thuoc-thoi-diem-nao-16618466465071926930931.png',
                        }}
                        height={300}
                        resizeMode="cover"
                    />
                    <View style={{padding: 10}}>
                        <Text
                            style={StyleSheet.flatten([
                                styles.nameProduct,
                                stylesGlobal.textColor,
                            ])}>
                            Sữa bột FontActiv Complete - Dinh dưỡng cho người ốm
                            yếu và mệt mỏi
                        </Text>

                        {/* price */}
                        <View style={styles.viewPrice}>
                            <Text
                                style={StyleSheet.flatten([
                                    stylesGlobal.colorPrimary,
                                    styles.price,
                                ])}>
                                {/* {item.price.toLocaleString('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                            })} */}
                                875.000đ
                            </Text>
                            <View style={styles.viewOldPrice}>
                                <Text style={styles.oldPrice}>
                                    {/* {item.oldPrice.toLocaleString('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND',
                                })} */}
                                    920.000đ
                                </Text>
                                <View style={styles.percentDiscount}>
                                    <Text
                                        style={{
                                            color: '#EE3B3B',
                                            padding: 2,
                                        }}>
                                        {/* - {item.percentDiscount}% */}- 5%
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <Text
                            style={StyleSheet.flatten([
                                stylesGlobal.textColor,
                                {marginTop: 10},
                            ])}>
                            Sản xuất bởi:
                            <Text>
                                Công ty Pharma Foods International (PFI)
                            </Text>
                        </Text>

                        {/* origin & product code */}
                        <View style={styles.viewOrigin}>
                            <Text style={stylesGlobal.textColor}>
                                Xuất xứ: Nhật Bản
                            </Text>
                            <Text style={stylesGlobal.textColor}>
                                Mã sản phẩm: Wacos-01
                            </Text>
                        </View>

                        {/* horizontal line */}
                        <View
                            style={{
                                borderWidth: 0.25,
                                borderColor: '#ccc',
                                marginVertical: 8,
                            }}
                        />

                        {/* evaluate */}
                        <View style={styles.viewEvaluate}>
                            <View style={styles.star}>
                                <Icon name="star" size={14} color="#FF9900" />
                                <Text
                                    style={StyleSheet.flatten([
                                        stylesGlobal.textColor,
                                        {fontSize: 14},
                                    ])}>
                                    10
                                </Text>
                            </View>
                            <View
                                style={{
                                    width: 1,
                                    height: '100%',
                                    backgroundColor: '#ccc',
                                    marginVertical: 6,
                                    marginHorizontal: 8,
                                }}
                            />
                            <Text
                                style={StyleSheet.flatten([
                                    stylesGlobal.textColor,
                                    {fontSize: 14},
                                ])}>
                                0 đánh giá
                            </Text>
                            <View
                                style={{
                                    width: 1,
                                    height: '100%',
                                    backgroundColor: '#ccc',
                                    marginVertical: 6,
                                    marginHorizontal: 8,
                                }}
                            />
                            <Text
                                style={StyleSheet.flatten([
                                    stylesGlobal.textColor,
                                    {fontSize: 14},
                                ])}>
                                Đã bán 4
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Shop */}
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
                    <ReviewProduct />
                    <ReviewProduct />
                    <ReviewProduct />
                    <ReviewProduct />
                    <ReviewProduct />
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
                            style={StyleSheet.flatten([
                                stylesGlobal.colorPrimary,
                            ])}
                        />
                    </TouchableOpacity>
                </View>

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
            </ScrollView>

            <BottomSheetModalProvider>
                <View>
                    {/* Buttons */}
                    <View style={styles.viewButton}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                backgroundColor: 'white',
                                flex: 1,
                                paddingVertical: 10,
                            }}
                            onPress={() =>
                                handlePresentModalPress('Thêm vào giỏ hàng')
                            }>
                            <Icon
                                name="cart-minus"
                                size={25}
                                style={stylesGlobal.colorPrimary}
                            />
                            <Text
                                style={StyleSheet.flatten([
                                    stylesGlobal.colorPrimary,
                                    {marginLeft: 5},
                                ])}>
                                Thêm vào giỏ hàng
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={StyleSheet.flatten([
                                stylesGlobal.backgroundColorPrimary,
                                {flex: 1, paddingVertical: 10},
                            ])}
                            activeOpacity={0.9}
                            onPress={() => handlePresentModalPress('Mua hàng')}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontWeight: '500',
                                    fontSize: 16,
                                    textAlign: 'center',
                                }}>
                                Mua ngay
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* bottom sheet */}
                    <BottomSheetModal
                        ref={bottomSheetModalRef}
                        snapPoints={snapPoints}
                        enablePanDownToClose={true}
                        backdropComponent={renderBackdrop}>
                        <View
                            style={{
                                display: 'flex',
                                alignItems: 'flex-end',
                                marginRight: 10,
                            }}>
                            <Icon
                                name="close"
                                size={25}
                                onPress={handleBackdropPress}
                            />
                        </View>
                        <View style={styles.viewBottomSheet}>
                            <Image
                                source={{
                                    uri: 'data:image/jpeg;base64,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',
                                }}
                                height={100}
                                width={100}
                            />
                            <View
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    height: '100%',
                                    marginLeft: 10,
                                }}>
                                <Text
                                    style={StyleSheet.flatten([
                                        stylesGlobal.textColor,
                                        {fontSize: 14, fontWeight: '500'},
                                    ])}
                                    numberOfLines={3}>
                                    Bộ sản phẩm ngừa lão hóa da "đúng chuẩn"
                                </Text>
                                <Text>
                                    Giá:
                                    <Text
                                        style={StyleSheet.flatten([
                                            stylesGlobal.colorPrimary,
                                            styles.price,
                                        ])}>
                                        875.000đ
                                    </Text>
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                                marginHorizontal: 15,
                            }}>
                            <Text
                                style={StyleSheet.flatten([
                                    {fontSize: 14},
                                    stylesGlobal.textColor,
                                ])}>
                                Số lượng
                            </Text>
                            <NumberProduct />
                        </View>
                        <TouchableOpacity
                            disabled
                            activeOpacity={0.9}
                            style={StyleSheet.flatten([
                                styles.button,
                                stylesGlobal.backgroundColorPrimary,
                                {
                                    marginHorizontal: 15,
                                    marginTop: 10,
                                    borderColor: 'transparent',
                                },
                            ])}>
                            <Text
                                style={StyleSheet.flatten([styles.textButton])}>
                                {textButtonSheet}
                            </Text>
                        </TouchableOpacity>
                    </BottomSheetModal>
                </View>
            </BottomSheetModalProvider>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    // productInfo
    productInfo: {
        backgroundColor: 'white',
    },
    nameProduct: {
        fontWeight: '600',
        fontSize: 16,
    },
    // productInfo: price
    viewPrice: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 5,
    },
    price: {
        fontWeight: '500',
        paddingRight: 16,
        fontSize: 18,
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

    // productInfo: origin & product code
    viewOrigin: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 8,
    },

    // productInfo: Evaluate
    viewEvaluate: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    star: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },

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

    // buttons
    viewButton: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },
    textButton: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '600',
        fontSize: 14,
        padding: 10,
    },

    // bottom sheet
    viewBottomSheet: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 15,
        height: 100,
    },
});

export default ProductDetailScreen;
