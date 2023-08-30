/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {transmissionText} from '../../../sliceReducer/storeSlice';
import {useNavigation} from '@react-navigation/native';
import stylesGlobal from '../../../assets/styles/global';

interface ItemNavigate {
    id: number | string;
    uri: string;
    title: string;
}

interface IPropNavigate {
    item: ItemNavigate;
}

const Navigate = (props: IPropNavigate) => {
    const dispatch = useDispatch();
    const {item} = props;
    const navigation = useNavigation<any>();

    const handlePress = () => {
        dispatch(transmissionText(item.title));
        navigation.navigate('SearchProductScreen');
    };

    return (
        <TouchableOpacity
            activeOpacity={1}
            style={styles.container}
            onPress={handlePress}>
            <Image
                source={{
                    uri: item.uri,
                }}
                height={50}
                width={50}
                style={{borderRadius: 5}}
            />
            <Text
                style={StyleSheet.flatten([
                    styles.text,
                    stylesGlobal.textColor,
                ])}>
                {item.title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 100,
        flex: 1,
        paddingHorizontal: 5,
        marginHorizontal: 2,
    },
    text: {
        color: '#363636',
        paddingTop: 4,
        textAlign: 'center',
        height: 50,
        fontSize: 14,
    },
});

export default Navigate;
