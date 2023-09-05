/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import stylesGlobal from '../../assets/styles/global';

interface IPropsButton {
    text: string;
    disabled?: boolean;
    handleDispatchFilter: () => void;
}

const Button = (props: IPropsButton) => {
    const {text, disabled, handleDispatchFilter} = props;

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            disabled={disabled}
            style={StyleSheet.flatten([
                disabled
                    ? {backgroundColor: '#e2e8f0'}
                    : stylesGlobal.backgroundColorPrimary,
                styles.button,
            ])}
            onPress={handleDispatchFilter}>
            <Text
                style={StyleSheet.flatten([
                    styles.textButton,
                    {color: disabled ? '#71717a' : 'white'},
                ])}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        margin: 10,
        borderRadius: 10,
        marginBottom: 15,
    },
    textButton: {
        fontSize: 14,
        fontWeight: '500',
        paddingVertical: 12,
        textAlign: 'center',
        color: 'white',
    },
});

export default Button;
