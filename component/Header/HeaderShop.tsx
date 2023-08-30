/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Image,
    ImageBackground,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const HeaderShop = () => {
    const navigation = useNavigation();

    const handlePressGoback = () => {
        navigation.goBack();
    };

    return (
        <ImageBackground
            source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HmjqxBA7ORRCRwdh6WZoS8KbgF_Xgqrr2g&usqp=CAU',
            }}
            resizeMode="cover"
            style={{flex: 1, width: '100%'}}
            height={150}>
            {/* <View style={{backgroundColor: '#bbceed'}}> */}
            <View style={styles.header}>
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
                        placeholder="Tìm trong shop này"
                        placeholderTextColor="#E8E8E8"
                    />
                </View>
            </View>

            {/* Profile shop */}
            <View style={styles.viewShop}>
                <Image
                    source={{
                        uri: 'data:image/png;base64,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',
                    }}
                    height={60}
                    width={60}
                    resizeMode="contain"
                    style={{borderRadius: 60 / 2, marginRight: 10}}
                />
                <View>
                    <Text style={styles.shopName}>
                        Blackmores Official Store
                    </Text>
                    <View
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                        <Icon name="star" size={20} color="#fbbf24" />
                        <Text style={{color: 'white', marginLeft: 10}}>
                            0/5.0 | 14 Sản phẩm
                        </Text>
                    </View>
                </View>
            </View>
            {/* </View> */}
        </ImageBackground>
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

    // profile shop
    viewShop: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingBottom: 10,
        marginTop: 10,
    },
    shopName: {
        color: 'white',
        fontWeight: '700',
        fontSize: 18,
    },
});

export default HeaderShop;
