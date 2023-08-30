/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {transmissionText} from '../../../sliceReducer/storeSlice';

interface IButtonInfo {
    id: string;
    title: string;
    icon: string;
}

interface IPropCard {
    item: IButtonInfo;
}

const Card = (props: IPropCard) => {
    const {item} = props;

    const dispatch = useDispatch();
    const navigation = useNavigation<any>();

    const handlePress = () => {
        dispatch(transmissionText('Tư vấn sản phẩm thuốc'));
        navigation.navigate('PrescriptionConsultScreen');
    };

    return (
        <TouchableOpacity
            activeOpacity={1}
            style={styles.container}
            onPress={handlePress}>
            <Icon name={item.icon} size={20} color="#0066FF" />
            <Text style={{color: '#363636', marginTop: 10}}>{item.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CCFFFF',
        flex: 1,
        height: '100%',
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        padding: 5,
    },
});

export default Card;
