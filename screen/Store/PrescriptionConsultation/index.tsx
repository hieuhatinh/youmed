/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import stylesGlobal from '../../../assets/styles/global';

const PrescriptionConsultScreen = () => {
    return (
        <SafeAreaView style={{height: '100%'}}>
            <View style={styles.component}>
                <View style={styles.viewInput}>
                    <View
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            flexDirection: 'row',
                            marginBottom: 5,
                        }}>
                        <Text
                            style={StyleSheet.flatten([
                                stylesGlobal.textColor,
                            ])}>
                            Họ tên
                        </Text>
                        <Icon
                            name="hexagram"
                            size={10}
                            color="#dc2626"
                            style={{marginLeft: 5}}
                        />
                    </View>
                    <TextInput
                        placeholder="Họ và tên người liên hệ"
                        style={styles.inputActive}
                    />
                </View>
                <View style={styles.viewInput}>
                    <Text
                        style={StyleSheet.flatten([
                            stylesGlobal.textColor,
                            {marginBottom: 5},
                        ])}>
                        Số điện thoại
                    </Text>
                    <TextInput
                        placeholder="Số điện thoại"
                        value="0926533472"
                        style={{
                            height: 40,
                            backgroundColor: '#ecfeff',
                            padding: 10,
                        }}
                    />
                </View>
                <View style={styles.viewInput}>
                    <Text
                        style={StyleSheet.flatten([
                            stylesGlobal.textColor,
                            {marginBottom: 5},
                        ])}>
                        Nhập triệu chứng bệnh
                    </Text>
                    <TextInput
                        placeholder="VD: đau họng, nhức mỏi người..."
                        style={styles.inputActive}
                    />
                </View>
                <Text style={{marginBottom: 10, color: '#dc2626'}}>hoặc</Text>
                <View style={styles.viewInput}>
                    <Text
                        style={StyleSheet.flatten([
                            stylesGlobal.textColor,
                            {marginBottom: 5},
                        ])}>
                        Hình ảnh đơn thuốc (0/3)
                    </Text>

                    {/* input tải ảnh lên */}
                </View>
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity
                    disabled
                    activeOpacity={0.9}
                    style={StyleSheet.flatten([
                        // stylesGlobal.backgroundColorPrimary,
                        styles.button,
                        {backgroundColor: '#d4d4d8'},
                    ])}>
                    {/* <Text style={styles.textButton}>Gửi đơn thuốc</Text> */}
                    <Text
                        style={StyleSheet.flatten([
                            styles.textButton,
                            {color: '#71717a'},
                        ])}>
                        Gửi đơn thuốc
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    component: {
        backgroundColor: 'white',
        padding: 10,
    },
    viewInput: {
        marginBottom: 10,
    },
    inputActive: {
        borderWidth: 1,
        borderColor: '#ccc',
        fontSize: 14,
        borderRadius: 5,
        height: 40,
        padding: 10,
    },
    viewButton: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: 20,
    },
    button: {
        borderRadius: 5,
        height: 40,
    },
    textButton: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '600',
        fontSize: 14,
        padding: 10,
    },
});

export default PrescriptionConsultScreen;
