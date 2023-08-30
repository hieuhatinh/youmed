/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

import stylesGlobal from '../../assets/styles/global';
import {getText} from '../../redux/selector';

const HeaderSearchProduct = () => {
    const textPlaceholder = useSelector(getText);
    const navigation = useNavigation();

    const handlePressGoback = () => {
        navigation.goBack();
    };

    return (
        <View
            style={StyleSheet.flatten([
                stylesGlobal.backgroundColorPrimary,
                stylesGlobal.headerHigh,
                styles.header,
            ])}>
            <Icon
                name="chevron-left"
                size={25}
                style={{padding: 10, color: 'white'}}
                onPress={handlePressGoback}
            />
            <View style={styles.viewInput}>
                <Icon name="magnify" size={25} style={styles.iconSearch} />
                <TextInput
                    style={styles.input}
                    placeholder={textPlaceholder}
                    placeholderTextColor="#E8E8E8"
                />
            </View>
            <Icon
                style={styles.iconSearch}
                color="#fff"
                name="filter"
                size={25}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
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
        color: 'white',
    },
    input: {
        height: '100%',
        padding: 10,
        paddingLeft: 0,
        color: 'white',
    },
});

export default HeaderSearchProduct;
