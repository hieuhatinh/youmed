/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import stylesGlobal from '../../assets/styles/global';
import Divider from '../Divider';

const Bottom = () => {
    // bottom sheet
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['40%'], []);

    // callbacks
    // open model
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    // close model
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

    return (
        <BottomSheetModalProvider>
            <View style={styles.viewBottom}>
                <View style={styles.viewSumPrice}>
                    <View style={styles.priceBottom}>
                        <Text>Tổng thanh toán</Text>
                        <Text
                            style={StyleSheet.flatten([
                                stylesGlobal.colorPrimary,
                                styles.price,
                            ])}>
                            5.995.000 đ
                        </Text>
                    </View>
                    <View
                        style={StyleSheet.flatten([
                            styles.priceBottom,
                            {marginTop: 5},
                        ])}>
                        <Text>Tổng giảm giá</Text>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                            onPress={handlePresentModalPress}>
                            <Text
                                style={StyleSheet.flatten([
                                    {color: '#FFCC00'},
                                    styles.price,
                                ])}>
                                -15.000 đ
                            </Text>
                            <Icon name="chevron-up" size={16} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={StyleSheet.flatten([
                        stylesGlobal.backgroundColorPrimary,
                        styles.buttonBuy,
                    ])}>
                    <Text style={styles.textButton}>Mua hàng</Text>
                </TouchableOpacity>
            </View>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                snapPoints={snapPoints}
                enablePanDownToClose={true}
                backdropComponent={renderBackdrop}>
                <View style={{backgroundColor: 'white'}}>
                    <View style={styles.headerBottom}>
                        <Text
                            style={StyleSheet.flatten([
                                {
                                    textAlign: 'center',
                                    fontSize: 14,
                                    flex: 1,
                                    fontWeight: '500',
                                },
                                stylesGlobal.textColor,
                            ])}>
                            Thông tin đơn hàng
                        </Text>
                        <Icon
                            name="close-circle"
                            size={25}
                            onPress={handleBackdropPress}
                        />
                    </View>
                    <Divider />
                    <View style={{margin: 10, marginBottom: 0}}>
                        <View
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                            }}>
                            <Text style={stylesGlobal.textColor}>
                                Tổng tiền hàng
                            </Text>
                            <Text style={stylesGlobal.colorPrimary}>
                                2.455.000đ
                            </Text>
                        </View>
                        <View
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                            }}>
                            <Text style={stylesGlobal.textColor}>
                                Phí vận chuyển
                            </Text>
                            <Text style={stylesGlobal.colorPrimary}>0đ</Text>
                        </View>
                        <View
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                            }}>
                            <Text style={stylesGlobal.textColor}>
                                Tổng voucher giảm giá
                            </Text>
                            <Text style={stylesGlobal.colorPrimary}>
                                2.455.000đ
                            </Text>
                        </View>
                    </View>
                </View>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
};

const styles = StyleSheet.create({
    viewBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 20,
        marginTop: 10,
        height: 80,
        zIndex: 1,
        borderWidth: 0.25,
        borderColor: '#ccc',
    },
    viewSumPrice: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: 10,
    },
    priceBottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontWeight: '500',
        marginLeft: 16,
    },
    buttonBuy: {
        width: 100,
    },
    textButton: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        top: '-50%',
        transform: [{translateY: 50}],
        fontWeight: '500',
    },
    // bottom sheet
    headerBottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 5,
    },
});

export default Bottom;
