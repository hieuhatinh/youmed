/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import stylesGlobal from '../../../assets/styles/global';
import Card from './Card';
import HeaderSection from '../../Header/HeaderSection';
import {transmissionText} from '../../../sliceReducer/storeSlice';

const listButtonInfo = [
    {
        id: '1',
        icon: 'camera',
        title: 'Chụp đơn thuốc',
    },
    {
        id: '2',
        icon: 'magnify',
        title: 'Để lại thông tin',
    },
    {
        id: '3',
        icon: 'account-box',
        title: 'Tư vấn 24/7',
    },
];

const PrescriptionConsultation = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<any>();

    const handlePress = () => {
        dispatch(transmissionText('Tư vấn sản phẩm thuốc'));
        navigation.navigate('PrescriptionConsultScreen');
    };

    return (
        <View
            style={StyleSheet.flatten([
                stylesGlobal.backgroundColorSection,
                stylesGlobal.sectionMargin,
            ])}>
            <HeaderSection
                title="Tư vấn thuốc với "
                link={{text: 'Dược sĩ YouMed', screenName: ''}}
            />
            <View style={stylesGlobal.paddingPrimary}>
                <View style={styles.viewCard}>
                    {listButtonInfo.map(item => (
                        <Card key={item.id} item={item} />
                    ))}
                </View>
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={StyleSheet.flatten([
                        styles.button,
                        stylesGlobal.center,
                        stylesGlobal.backgroundColorPrimary,
                    ])}
                    onPress={handlePress}>
                    <Text style={StyleSheet.flatten([styles.textButton])}>
                        Tư vấn thuốc ngay
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewCard: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
    },
    button: {
        borderRadius: 5,
        height: 40,
    },
    textButton: {
        color: 'white',
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: '600',
    },
});

export default PrescriptionConsultation;
