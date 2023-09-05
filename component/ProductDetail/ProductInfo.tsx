/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import stylesGlobal from '../../assets/styles/global';

const win = Dimensions.get('window');

interface ImageItem {
    id: string;
    uri: string;
}

const listImage = [
    {
        id: '1',
        uri: 'https://cdn.thuvienphapluat.vn/uploads/tintuc/2022/01/10/thuoc-gia.png',
    },
    {
        id: '2',
        uri: 'https://cdn.thuvienphapluat.vn/uploads/tintuc/2022/01/10/thuoc-gia.png',
    },
    {
        id: '3',
        uri: 'https://cdn.thuvienphapluat.vn/uploads/tintuc/2022/01/10/thuoc-gia.png',
    },
    {
        id: '4',
        uri: 'https://cdn.thuvienphapluat.vn/uploads/tintuc/2022/01/10/thuoc-gia.png',
    },
];

const ProductInfo = () => {
    const [indexImg, setIndexImg] = useState(0);

    return (
        <View style={styles.productInfo}>
            {/* slice ảnh */}
            <View style={styles.viewSliceImg}>
                <SwiperFlatList
                    index={0}
                    data={listImage}
                    renderItem={({item}) => (
                        <Image
                            source={{
                                uri: item.uri,
                            }}
                            height={300}
                            width={win.width}
                            resizeMode="cover"
                        />
                    )}
                    keyExtractor={(item: ImageItem) => item.id}
                    onChangeIndex={({index}) => setIndexImg(index)}
                />
                <View style={styles.numberImg}>
                    <Text style={styles.textNumber}>
                        {indexImg + 1} / {listImage.length.toString()}
                    </Text>
                </View>
            </View>
            <View style={{padding: 10}}>
                <Text
                    style={StyleSheet.flatten([
                        styles.nameProduct,
                        stylesGlobal.textColor,
                    ])}>
                    Sữa bột FontActiv Complete - Dinh dưỡng cho người ốm yếu và
                    mệt mỏi
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
                    <Text>Công ty Pharma Foods International (PFI)</Text>
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

                {/* Review */}
                <View style={styles.viewReview}>
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
    );
};

const styles = StyleSheet.create({
    // slice img
    viewSliceImg: {
        position: 'relative',
    },
    numberImg: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        minWidth: 50,
        minHeight: 20,
        backgroundColor: '#f1f5f9',
        borderRadius: 9999,
        padding: 3,
    },
    textNumber: {
        textAlign: 'center',
    },
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

    // productInfo: Review
    viewReview: {
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
});

export default ProductInfo;
