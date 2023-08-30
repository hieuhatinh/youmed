/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import ReviewProduct from '../../component/ProductDetail/ReviewProduct';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import stylesGlobal from '../../assets/styles/global';

const ReviewScreen = () => {
    return (
        <SafeAreaView>
            <View style={{backgroundColor: 'white'}}>
                <View style={styles.shop}>
                    <Text
                        style={StyleSheet.flatten([
                            stylesGlobal.textColor,
                            {fontWeight: '500', fontSize: 14},
                        ])}>
                        Nhiệt kế điện tử B.Well Swiss WT-04 Standard
                    </Text>
                    <Text>Mã sản phẩm: BW-15</Text>
                    <View
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <Icon name="star" size={15} color="#fde047" />
                            <Icon name="star" size={15} color="#fde047" />
                            <Icon name="star" size={15} color="#fde047" />
                            <Icon name="star" size={15} color="#fde047" />
                            <Icon name="star" size={15} color="#fde047" />
                        </View>
                        <Text
                            style={StyleSheet.flatten([
                                stylesGlobal.textColor,
                                {fontSize: 14},
                            ])}>
                            4 đánh giá
                        </Text>
                    </View>
                </View>
            </View>
            <ScrollView
                style={{
                    backgroundColor: 'white',
                    marginTop: 10,
                    paddingTop: 10,
                }}>
                <ReviewProduct />
                <ReviewProduct />
                <ReviewProduct />
                <ReviewProduct />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    shop: {
        backgroundColor: '#e0f2fe',
        borderRadius: 10,
        margin: 20,
        padding: 10,
    },
});

export default ReviewScreen;
