/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useMemo, useRef} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import stylesGlobal from '../../../assets/styles/global';
import {transmissionText} from '../../../sliceReducer/storeSlice';
// import {
//     BottomSheetBackdrop,
//     BottomSheetModal,
//     ,
// } from '@gorhom/bottom-sheet';

const HeaderStore = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<any>();

    const handlePressCart = () => {
        dispatch(transmissionText('Giỏ hàng'));
        navigation.navigate('CartScreen');
    };

    // bottom sheet
    // const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    // const snapPoints = useMemo(() => ['40%'], []);

    // // callbacks
    // const handlePresentModalPress = useCallback(() => {
    //     bottomSheetModalRef.current?.present();
    // }, []);

    // const handleBackdropPress = useCallback(() => {
    //     bottomSheetModalRef.current?.close();
    // }, []);

    // // render
    // const renderBackdrop = useCallback(
    //     (props: any) => (
    //         <BottomSheetBackdrop
    //             {...props}
    //             opacity={0.6}
    //             disappearsOnIndex={-1}
    //             appearsOnIndex={0}
    //             pressBehavior="close"
    //             onPress={handleBackdropPress}
    //             closeOnPress
    //         />
    //     ),
    //     [],
    // );

    return (
        <SafeAreaView>
            <View
                style={StyleSheet.flatten([
                    stylesGlobal.backgroundColorPrimary,
                    stylesGlobal.headerHigh,
                    styles.header,
                ])}>
                <View style={styles.viewInput}>
                    <Icon name="magnify" size={25} style={styles.iconSearch} />
                    <TextInput
                        style={styles.input}
                        placeholder="Bạn tìm sản phẩm nào?"
                        placeholderTextColor="#E8E8E8"
                    />
                </View>
                <View
                    style={StyleSheet.flatten([
                        styles.viewIcons,
                        stylesGlobal.center,
                        {position: 'relative'},
                    ])}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={handlePressCart}>
                        <Icon
                            style={styles.iconSearch}
                            color="#fff"
                            name="cart-outline"
                            size={25}
                        />
                        <View style={styles.badge}>
                            <Text style={{color: 'white', textAlign: 'center'}}>
                                7
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Icon
                        style={{marginLeft: 10}}
                        color="#fff"
                        name="message-processing"
                        size={25}
                        // onPress={handlePresentModalPress}
                    />
                </View>
            </View>
            {/* Button sheet */}
            {/* <BottomSheetModalProvider>
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
                        <Text>Chọn phương thức tư vấn</Text>
                        <Icon
                            name="close"
                            size={25}
                            onPress={handleBackdropPress}
                        />
                    </View>
                    <TouchableOpacity disabled activeOpacity={0.9}>
                        <Icon name="camera" size={30} />
                        <Text>Chụp đơn thuốc</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled activeOpacity={0.9}>
                        <Icon name="phone" size={30} />
                        <Text>Tư vấn hotline (1.000đ/phút)</Text>
                    </TouchableOpacity>
                </BottomSheetModal>
            </BottomSheetModalProvider> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 10,
    },
    viewInput: {
        flex: 1,
        margin: 10,
        backgroundColor: '#000099',
        borderRadius: 5,
        height: 40,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    iconSearch: {
        marginRight: 10,
        marginLeft: 10,
        color: '#E8E8E8',
    },
    input: {
        height: '100%',
        padding: 10,
        paddingLeft: 0,
        color: 'white',
    },
    viewIcons: {
        flexDirection: 'row',
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

export default HeaderStore;
