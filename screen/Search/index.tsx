/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, TextInput, View, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import stylesGlobal from '../../assets/styles/global';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native';

const Search = () => {
    const navigation = useNavigation<any>();

    const [searchString, setSearchString] = useState<string>('');

    const handleSearch = (value: string) => {
        setSearchString(value);
    };

    const handleClearTextSearch = () => {
        setSearchString('');
    };

    const handlePressClose = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView>
            <View
                style={StyleSheet.flatten([
                    stylesGlobal.backgroundColorPrimary,
                    stylesGlobal.headerHeight,
                    styles.container,
                ])}>
                <View style={styles.viewInput}>
                    <Icon name="magnify" size={25} style={styles.iconSearch} />
                    <TextInput
                        style={styles.input}
                        placeholder="Bạn tìm sản phẩm nào?"
                        placeholderTextColor="#E8E8E8"
                        cursorColor="#10b981"
                        value={searchString}
                        onChangeText={handleSearch}
                    />
                    {searchString && (
                        <Icon
                            name="close-circle"
                            size={20}
                            color="white"
                            style={{marginRight: 10}}
                            onPress={handleClearTextSearch}
                        />
                    )}
                </View>
                <Icon
                    name="close"
                    size={25}
                    style={styles.icon}
                    onPress={handlePressClose}
                />
            </View>
            <View style={styles.searchHistory}>
                <Text
                    style={StyleSheet.flatten([
                        stylesGlobal.textColor,
                        {marginVertical: 5},
                    ])}>
                    sữa
                </Text>
                <Text
                    style={StyleSheet.flatten([
                        stylesGlobal.textColor,
                        {marginVertical: 5},
                    ])}>
                    cà chua
                </Text>
                <Text
                    style={StyleSheet.flatten([
                        stylesGlobal.textColor,
                        {marginVertical: 5},
                    ])}>
                    nước mắm
                </Text>
                <Text
                    style={StyleSheet.flatten([
                        stylesGlobal.textColor,
                        {marginVertical: 5},
                    ])}>
                    trà
                </Text>
                <TouchableOpacity style={styles.buttonDeleteHistory}>
                    <Text style={styles.textButtonDeleteHistory}>
                        Xoá lịch sử tìm kiếm
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
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
    icon: {
        color: 'white',
        marginRight: 10,
    },
    input: {
        height: '100%',
        padding: 10,
        paddingLeft: 0,
        color: 'white',
        flex: 1,
    },
    searchHistory: {
        backgroundColor: 'white',
        padding: 10,
    },
    textHistory: {},
    buttonDeleteHistory: {
        marginTop: 10,
    },
    textButtonDeleteHistory: {
        textAlign: 'center',
        fontSize: 14,
        color: '#a1a1aa',
    },
});

export default Search;
