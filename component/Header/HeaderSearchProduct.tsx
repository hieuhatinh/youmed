/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';

import stylesGlobal from '../../assets/styles/global';
import {getFilteredValue, getText} from '../../redux/selector';
import {transmissionText} from '../../sliceReducer/storeSlice';

const HeaderSearchProduct = () => {
    const navigation = useNavigation<any>();
    const dispatch = useDispatch<any>();
    const isFocused = useIsFocused();

    const textPlaceholder = useSelector(getText);
    const filteredValue = useSelector(getFilteredValue);

    const handlePressGoback = () => {
        navigation.goBack();
    };

    const handlePressFilter = () => {
        navigation.navigate('Filter');
        dispatch(transmissionText('Lọc kết quả'));
    };

    // lấy filter value
    console.log(filteredValue);
    useEffect(() => {
        if (
            isFocused &&
            filteredValue.origin.length > 0 &&
            filteredValue.evaluate.length > 0
        ) {
        }
    }, [filteredValue, isFocused]);

    return (
        <View
            style={StyleSheet.flatten([
                stylesGlobal.backgroundColorPrimary,
                stylesGlobal.headerHeight,
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
            <View style={{position: 'relative'}}>
                <Icon
                    style={styles.iconSearch}
                    color="#fff"
                    name="filter"
                    size={25}
                    onPress={handlePressFilter}
                />
                {filteredValue.origin.length > 0 &&
                    filteredValue.evaluate.length > 0 && (
                        <View
                            style={{
                                position: 'absolute',
                                left: 10,
                                bottom: 5,
                                height: 10,
                                width: 10,
                                borderRadius: 5,
                                backgroundColor: 'red',
                            }}
                        />
                    )}
            </View>
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
