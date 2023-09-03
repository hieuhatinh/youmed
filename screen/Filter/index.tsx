/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {RadioButton} from 'react-native-radio-buttons-group';

import stylesGlobal from '../../assets/styles/global';
import Divider from '../../component/Divider';
import Button from '../../component/Button';

// interface IPressValue {
//     origin: string;
//     evaluate: string;
// }

const origin = [
    {
        id: '1',
        label: 'Tất cả',
        value: 'all',
    },
    {
        id: '2',
        label: 'Việt Nam',
        value: 'vietnam',
    },
    {
        id: '3',
        label: 'Mỹ',
        value: 'america',
    },
    {
        id: '4',
        label: 'Pháp',
        value: 'france',
    },
    {
        id: '5',
        label: 'Nhật Bản',
        value: 'japan',
    },
    {
        id: '6',
        label: 'Hàn Quốc',
        value: 'korea',
    },
    {
        id: '7',
        label: 'Ấn Độ',
        value: 'India',
    },
    {
        id: '8',
        label: 'Đức',
        value: 'germany',
    },
    {
        id: '9',
        label: 'Hà Lan',
        value: 'netherlands',
    },
    {
        id: '10',
        label: 'Hungary',
        value: 'hungary',
    },
    {
        id: '11',
        label: 'Hy Lạp',
        value: 'greek',
    },
    {
        id: '12',
        label: 'Thụy Điển',
        value: 'sweden',
    },
    {
        id: '13',
        label: 'Trung Quốc',
        value: 'china',
    },
    {
        id: '14',
        label: 'Indoneia',
        value: 'indonesia',
    },
    {
        id: '15',
        label: 'Puerto Rico',
        value: 'puertoRico',
    },
    {
        id: '16',
        label: 'Slovenia',
        value: 'slovenia',
    },
    {
        id: '17',
        label: 'Tây Ban Nha',
        value: 'spain',
    },
    {
        id: '18',
        label: 'Thổ Nhĩ Kỳ',
        value: 'turkey',
    },
    {
        id: '19',
        label: 'Thụy Sỹ',
        value: 'switzerland',
    },
    {
        id: '20',
        label: 'Úc',
        value: 'australia',
    },
];

const evaluates = [
    {
        id: '1',
        label: 'Tất cả',
        value: 'all',
    },
    {
        id: '2',
        label: 'Từ 5 sao',
        value: 'five-star',
    },
    {
        id: '3',
        label: 'Từ 4 sao',
        value: 'four-star',
    },
    {
        id: '4',
        label: 'Từ 3 sao',
        value: 'three-star',
    },
    {
        id: '5',
        label: 'Từ 2 sao',
        value: 'two-star',
    },
    {
        id: '6',
        label: 'Từ 1 sao',
        value: 'one-star',
    },
];

const Filter = () => {
    const [pressOriginValue, setOriginPressValue] = useState<string>(
        origin[0].value,
    );
    const [pressEvaluatesValue, setEvaluatesPressValue] = useState<string>(
        evaluates[0].value,
    );

    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    // const [pressValue, setPressValue] = useState<IPressValue>({
    //     origin: origin[0].value,
    //     evaluate: evaluates[0].value,
    // });

    // xem tất cả nơi xuất xứ
    const [seeAllOrigin, setSeeAllOrigin] = useState({
        numberButton: 6,
        title: 'Xem tất cả',
    });

    const showButon = () => {
        if (seeAllOrigin.numberButton === 6) {
            setSeeAllOrigin({
                numberButton: origin.length,
                title: 'Thu gọn',
            });
        } else {
            setSeeAllOrigin({
                numberButton: 6,
                title: 'Xem tất cả',
            });
        }
    };

    useEffect(() => {
        // Đọc giá trị pressId từ AsyncStorage khi vào lại ứng dụng
        const getPressId = async () => {
            try {
                const result: any = await AsyncStorage.getItem('FilterValue');
                const value = JSON.parse(result);
                if (value !== null) {
                    setOriginPressValue(value.pressOriginValue);
                    setEvaluatesPressValue(value.pressEvaluatesValue);
                }
            } catch (e) {
                // Lỗi đọc giá trị
            }
        };
        getPressId();
    }, []);

    // useEffect(() => {
    //     // Lưu giá trị pressId vào AsyncStorage khi thay đổi
    //     const storePressId = async (value: any) => {
    //         try {
    //             await AsyncStorage.setItem(
    //                 'FilterValue',
    //                 JSON.stringify(value),
    //             );
    //         } catch (e) {
    //             // Lỗi lưu giá trị
    //         }
    //     };
    //     storePressId({pressOriginValue, pressEvaluatesValue});
    // }, [pressOriginValue, pressEvaluatesValue]);

    useEffect(() => {
        setIsDisabled(!isDisabled);
    }, [pressOriginValue, pressEvaluatesValue, isDisabled]);

    return (
        <SafeAreaView>
            <ScrollView
                style={{backgroundColor: 'white'}}
                nestedScrollEnabled
                showsVerticalScrollIndicator={false}>
                <View>
                    <Text
                        style={StyleSheet.flatten([
                            styles.textSection,
                            stylesGlobal.textColor,
                        ])}>
                        Xuất xứ
                    </Text>
                    <View style={styles.origin}>
                        <FlatList
                            nestedScrollEnabled
                            ItemSeparatorComponent={({leadingItem}) => {
                                // Kiểm tra nếu item không phải là cuối cùng
                                if (leadingItem !== origin[origin.length - 1]) {
                                    return <Divider />;
                                } else {
                                    return null;
                                }
                            }}
                            data={origin.slice(0, seeAllOrigin.numberButton)}
                            renderItem={({item}) => (
                                <RadioButton
                                    key={item.id}
                                    id={item.id}
                                    label={item.label}
                                    value={item.value}
                                    selected={
                                        pressOriginValue === item.value
                                            ? true
                                            : false
                                    }
                                    onPress={() =>
                                        setOriginPressValue(item.value)
                                    }
                                    size={16}
                                    color="#0066FF"
                                    borderColor={
                                        pressOriginValue === item.value
                                            ? '#0066FF'
                                            : '#ccc'
                                    }
                                    labelStyle={StyleSheet.flatten([
                                        {fontSize: 14},
                                        stylesGlobal.textColor,
                                    ])}
                                />
                            )}
                        />
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.textButton}
                            onPress={showButon}>
                            <Text style={stylesGlobal.textColor}>
                                {seeAllOrigin.title}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text
                        style={StyleSheet.flatten([
                            styles.textSection,
                            stylesGlobal.textColor,
                        ])}>
                        Đánh giá
                    </Text>
                    <FlatList
                        nestedScrollEnabled
                        data={evaluates}
                        renderItem={({item}) => (
                            <RadioButton
                                key={item.id}
                                id={item.id}
                                label={item.label}
                                value={item.value}
                                selected={
                                    pressEvaluatesValue === item.id
                                        ? true
                                        : false
                                }
                                onPress={() => setEvaluatesPressValue(item.id)}
                                size={16}
                                containerStyle={{
                                    borderWidth: 1,
                                    borderColor: '#ccc',
                                    borderRadius: 10,
                                    flex: 1,
                                    paddingHorizontal: 10,
                                    paddingVertical: 15,
                                }}
                                color="#0066FF"
                                borderColor={
                                    pressEvaluatesValue === item.id
                                        ? '#0066FF'
                                        : '#ccc'
                                }
                                labelStyle={StyleSheet.flatten([
                                    {fontSize: 14},
                                    stylesGlobal.textColor,
                                ])}
                            />
                        )}
                        numColumns={2}
                        style={{
                            padding: 10,
                        }}
                    />
                </View>

                <Divider />
                <Button text="Áp dụng" disabled={isDisabled} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textSection: {
        fontSize: 16,
        fontWeight: '500',
        padding: 10,
        paddingBottom: 0,
    },
    origin: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
    },
    textButton: {
        marginVertical: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Filter;
