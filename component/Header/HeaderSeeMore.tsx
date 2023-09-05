/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import stylesGlobal from '../../assets/styles/global';
import {getText} from '../../redux/selector';
import {filteredValue} from '../../sliceReducer/storeSlice';

interface IPropsHeader {
    text?: any;
}

const HeaderSeeMore = (props: IPropsHeader) => {
    const {text} = props;

    const navigation = useNavigation<any>();
    const dispatch = useDispatch<any>();

    const handlePressGoback = () => {
        navigation.goBack('StoreScreen');
    };

    // redux-toolkit -> storeSlice
    const title = useSelector(getText);

    const handleRemoveFilter = () => {
        dispatch(filteredValue({origin: '', evaluate: ''}));
    };

    return (
        <View
            style={StyleSheet.flatten([
                stylesGlobal.backgroundColorPrimary,
                stylesGlobal.headerHeight,
                styles.container,
            ])}>
            <Icon
                name="chevron-left"
                size={30}
                style={styles.iconBack}
                onPress={handlePressGoback}
            />
            <Text style={styles.title}>{title}</Text>
            {text?.length > 0 && (
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={handleRemoveFilter}>
                    <Text style={{color: 'white', fontSize: 16}}>{text}</Text>
                </TouchableOpacity>
            )}
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
