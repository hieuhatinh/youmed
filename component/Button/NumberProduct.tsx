/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import stylesGlobal from '../../assets/styles/global';

const NumberProduct = () => {
    const [numberProduct, setNumberProduct] = useState<number>(1);

    const handleIncrese = () => {
        setNumberProduct(prev => prev + 1);
    };

    const handleDecrese = () => {
        setNumberProduct(prev => prev - 1);
    };

    return (
        <View style={styles.viewButton}>
            <TouchableOpacity
                disabled={numberProduct > 1 ? false : true}
                onPress={handleDecrese}
                activeOpacity={0.9}>
                <Icon
                    name="minus-box"
                    size={30}
                    style={
                        (numberProduct > 1 ? false : true)
                            ? {color: '#ccc'}
                            : stylesGlobal.colorPrimary
                    }
                />
            </TouchableOpacity>
            <Text
                style={StyleSheet.flatten([
                    {fontSize: 18},
                    stylesGlobal.textColor,
                ])}>
                {numberProduct}
            </Text>
            <TouchableOpacity onPress={handleIncrese} activeOpacity={0.9}>
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
