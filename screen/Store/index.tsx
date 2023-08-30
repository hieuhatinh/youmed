/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import SliceNavigate from '../../component/store/sliceNavigate';
import PrescriptionConsultation from '../../component/store/PrescriptionConsultation';
import Partner from '../../component/store/Partner';
import Section from '../../component/store/Section';

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
    return (
        <SafeAreaView
            style={{height: '100%', width: '100%', backgroundColor: '#f5f5fa'}}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                <View style={{marginBottom: 8}}>
                    {/* <HeaderStore /> */}
                    <SliceNavigate />
                    <PrescriptionConsultation />
                    <Partner />
                    {listSection.map(item => (
                        <Section key={item.id} value={item} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default StoreScreen;
