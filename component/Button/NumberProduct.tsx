/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import stylesGlobal from '../../assets/styles/global';

const NumberProduct = () => {
    return (
        <View style={styles.viewButton}>
            <TouchableOpacity disabled>
                <Icon
                    name="minus-box"
                    size={30}
                    // style={stylesGlobal.colorPrimary}
                    color="#ccc"
                />
            </TouchableOpacity>
            <Text
                style={StyleSheet.flatten([
                    {fontSize: 18},
                    stylesGlobal.textColor,
                ])}>
                3
            </Text>
            <TouchableOpacity>
                <Icon
                    name="plus-box"
                    size={30}
                    style={stylesGlobal.colorPrimary}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    viewButton: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 3,
        width: 100,
        borderRadius: 10,
    },
});

export default NumberProduct;
