/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import stylesGlobal from '../../assets/styles/global';
import Divider from '../Divider';

const ReviewProduct = () => {
    return (
        <View style={styles.component}>
            <View style={{minHeight: 100}}>
                <View style={styles.shared}>
                    <Text
                        style={StyleSheet.flatten([
                            stylesGlobal.textColor,
                            {
                                fontSize: 14,
                                fontWeight: '500',
                            },
                        ])}>
                        Khôi Nguyên
                    </Text>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Icon name="star" size={15} color="#fde047" />
                        <Icon name="star" size={15} color="#fde047" />
                        <Icon name="star" size={15} color="#fde047" />
                        <Icon name="star" size={15} color="#fde047" />
                    </View>
                </View>
                <View style={styles.shared}>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Icon
                            name="check-circle"
                            size={15}
                            style={{color: '#22c55e'}}
                        />
                        <Text
                            style={{
                                color: '#22c55e',
                                fontWeight: '500',
                                marginLeft: 5,
                            }}>
                            Đã mua hàng
                        </Text>
                    </View>
                    <Text>26/06/2023 - 04:47</Text>
                </View>
                <Text
                    style={StyleSheet.flatten([
                        {marginTop: 10},
                        stylesGlobal.textColor,
                    ])}>
                    Rất hài lòng. Có tờ hướng dẫn bằng tiếng việt nên rất tiện.
                    Gói hàng kĩ lưỡng. Rất đáng mua
                </Text>
            </View>
            <Divider />
        </View>
    );
};

const styles = StyleSheet.create({
    component: {
        display: 'flex',
        marginHorizontal: 10,
    },
    shared: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    check: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default ReviewProduct;
