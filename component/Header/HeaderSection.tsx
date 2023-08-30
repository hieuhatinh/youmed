/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import stylesGlobal from '../../assets/styles/global';
import {useDispatch} from 'react-redux';
import {transmissionText} from '../../sliceReducer/storeSlice';

interface IPropsHeaderSection {
    title: string;
    link?: {
        text: string;
        screenName: string;
    };
    buttonText?: {
        text: string;
        screenName: string;
    };
}

const HeaderSection = (props: IPropsHeaderSection) => {
    const {title, link, buttonText} = props;
    const navigation = useNavigation<any>();
    const dispatch = useDispatch();

    const handlePressSeeMore = () => {
        navigation.navigate(buttonText?.screenName);
        dispatch(transmissionText(title));
    };

    return (
        <View
            style={StyleSheet.flatten([
                styles.container,
                stylesGlobal.paddingPrimary,
                stylesGlobal.backgroundColorSection,
            ])}>
            <View
                style={StyleSheet.flatten([
                    stylesGlobal.center,
                    {flexDirection: 'row', justifyContent: 'flex-start'},
                ])}>
                <Text
                    style={StyleSheet.flatten([
                        styles.textNormal,
                        styles.text,
                    ])}>
                    {title}
                </Text>
                {link && (
                    <Text
                        style={StyleSheet.flatten([
                            styles.textLink,
                            styles.text,
                        ])}>
                        Dược sĩ YouMed
                    </Text>
                )}
            </View>
            {buttonText && (
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={handlePressSeeMore}>
                    <Text style={styles.textLink}>{buttonText.text}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontWeight: '600',
        fontSize: 16,
    },
    textNormal: {
        color: '#1C1C1C',
    },
    textLink: {
        color: '#3333FF',
        paddingLeft: 4,
    },
});

export default HeaderSection;
