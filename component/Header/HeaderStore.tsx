/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import stylesGlobal from '../../assets/styles/global';
import IconCart from '../Button/IconCart';
import {Text} from 'react-native';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';

interface IPropsHeaderStore {
    handlePresentModalPress: () => void;
}

const HeaderStore = (props: IPropsHeaderStore) => {
    const {handlePresentModalPress} = props;

    const navigation = useNavigation<any>();

    const handlePressSearch = () => {
        navigation.navigate('Search');
    };

    return (
        <SafeAreaView>
            <View
                style={StyleSheet.flatten([
                    stylesGlobal.backgroundColorPrimary,
                    stylesGlobal.headerHeight,
                    styles.header,
                ])}>
                <View style={styles.viewInput}>
                    <TouchableOpacity
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}
                        activeOpacity={1}
                        onPress={handlePressSearch}>
                        <Icon
                            name="magnify"
                            size={25}
                            style={styles.iconSearch}
                        />
                        <View style={styles.input}>
                            <Text style={{color: '#E8E8E8'}}>
                                Bạn tìm sản phẩm nào?
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View
                    style={StyleSheet.flatten([
                        styles.viewIcons,
                        stylesGlobal.center,
                        {position: 'relative'},
                    ])}>
                    <IconCart />
                    <Icon
                        style={{marginLeft: 10}}
                        color="#fff"
                        name="message-processing"
                        size={25}
                        onPress={handlePresentModalPress}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 10,
        zIndex: -1,
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
    input: {
        height: '100%',
        padding: 10,
        paddingLeft: 0,
        color: 'white',
    },
    viewIcons: {
        flexDirection: 'row',
    },
});

export default HeaderStore;
