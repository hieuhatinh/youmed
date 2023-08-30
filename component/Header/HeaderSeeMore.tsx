/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import stylesGlobal from '../../assets/styles/global';
import {getText} from '../../redux/selector';

const HeaderSeeMore = () => {
    const navigation = useNavigation<any>();

    const handlePressGoback = () => {
        navigation.goBack('StoreScreen');
    };

    // redux-toolkit -> storeSlice
    const title = useSelector(getText);

    return (
        <View
            style={StyleSheet.flatten([
                stylesGlobal.backgroundColorPrimary,
                stylesGlobal.headerHigh,
                styles.container,
            ])}>
            <Icon
                name="chevron-left"
                size={30}
                style={styles.iconBack}
                onPress={handlePressGoback}
            />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 10,
    },
    iconBack: {
        color: 'white',
        padding: 10,
    },
    title: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
        flex: 1,
        textAlign: 'center',
    },
});

export default HeaderSeeMore;
