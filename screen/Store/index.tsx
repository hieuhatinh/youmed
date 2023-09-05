/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import SliceNavigate from '../../component/store/sliceNavigate';
import PrescriptionConsultation from '../../component/store/PrescriptionConsultation';
import Partner from '../../component/store/Partner';
import Section from '../../component/store/Section';
import HeaderStore from '../../component/Header/HeaderStore';
import {StyleSheet} from 'react-native';
import stylesGlobal from '../../assets/styles/global';

const listSection = [
    {
        id: '1',
        title: 'Hotdeal tháng 8',
        buttonText: {
            text: 'Xem tất cả',
            screenName: 'SearchProductScreen',
        },
        type: 'Hotdeal',
    },
    {
        id: '2',
        title: 'Vitamin & khoáng chất',
        buttonText: {
            text: 'Xem tất cả',
            screenName: 'SearchProductScreen',
        },
        type: 'VitaminAndMinerals',
    },
    {
        id: '3',
        title: 'Hỗ trợ điều trị',
        buttonText: {
            text: 'Xem tất cả',
            screenName: 'SearchProductScreen',
        },
        type: 'SupportTreatment',
    },
    {
        id: '4',
        title: 'Chăm sóc sắc đẹp',
        buttonText: {
            text: 'Xem tất cả',
            screenName: 'SearchProductScreen',
        },
        type: 'BeautyCare',
    },
    {
        id: '5',
        title: 'Dinh dưỡng',
        buttonText: {
            text: 'Xem tất cả',
            screenName: 'SearchProductScreen',
        },
        type: 'Nutrition',
    },
    {
        id: '6',
        title: 'Thiết bị y tế',
        buttonText: {
            text: 'Xem tất cả',
            screenName: 'SearchProductScreen',
        },
        type: 'MedicalEquipment',
    },
    {
        id: '7',
        title: 'Thuốc không kê đơn',
        buttonText: {
            text: 'Xem tất cả',
            screenName: 'SearchProductScreen',
        },
        type: 'OverCounterDrugs',
    },
];

const StoreScreen = () => {
    // bottom sheet
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['25%'], []);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleBackdropPress = useCallback(() => {
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
                topInset={0}
                backgrounColor="white"
            />
        ),
        [handleBackdropPress],
    );

    // refresh
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <SafeAreaView
            style={{height: '100%', width: '100%', backgroundColor: '#f5f5fa'}}>
            <HeaderStore handlePresentModalPress={handlePresentModalPress} />
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }>
                <View style={{marginBottom: 8}}>
                    <SliceNavigate />
                    <PrescriptionConsultation />
                    <Partner />
                    {listSection.map(item => (
                        <Section key={item.id} value={item} />
                    ))}
                </View>
            </ScrollView>

            {/* Button sheet */}
            <BottomSheetModalProvider>
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    snapPoints={snapPoints}
                    enablePanDownToClose={true}
                    backdropComponent={renderBackdrop}
                    style={styles.bottomModal}>
                    <View style={styles.headerModal}>
                        <Text
                            style={StyleSheet.flatten([
                                styles.textHeader,
                                stylesGlobal.textColor,
                            ])}>
                            Chọn phương thức tư vấn
                        </Text>
                        <Icon
                            name="close"
                            size={25}
                            onPress={handleBackdropPress}
                        />
                    </View>
                    <TouchableOpacity
                        disabled
                        activeOpacity={0.9}
                        style={styles.item}>
                        <Icon name="camera" size={30} />
                        <Text
                            style={StyleSheet.flatten([
                                styles.textItem,
                                stylesGlobal.textColor,
                            ])}>
                            Chụp đơn thuốc
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        disabled
                        activeOpacity={0.9}
                        style={styles.item}>
                        <Icon name="phone" size={30} />
                        <Text
                            style={StyleSheet.flatten([
                                styles.textItem,
                                stylesGlobal.textColor,
                            ])}>
                            Tư vấn hotline (1.000đ/phút)
                        </Text>
                    </TouchableOpacity>
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bottomModal: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 10,
        zIndex: 10,
    },
    headerModal: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textHeader: {
        fontWeight: '500',
        fontSize: 16,
        textAlign: 'center',
        flex: 1,
        // left: '100%',
        // transform: [{translateX: 100}],
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginVertical: 10,
    },
    textItem: {
        fontSize: 14,
        marginLeft: 10,
    },
});

export default StoreScreen;
