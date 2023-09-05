/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
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
import {useDispatch, useSelector} from 'react-redux';

import stylesGlobal from '../../assets/styles/global';
import Divider from '../../component/Divider';
import Button from '../../component/Button';
import {filteredValue} from '../../sliceReducer/storeSlice';
import HeaderSeeMore from '../../component/Header/HeaderSeeMore';
import {useNavigation} from '@react-navigation/native';

const origin = [
    {
        label: 'Tất cả',
        value: 'all',
    },
    {
        label: 'Việt Nam',
        value: 'vietnam',
    },
    {
        label: 'Mỹ',
        value: 'america',
    },
    {
        label: 'Pháp',
        value: 'france',
    },
    {
        label: 'Nhật Bản',
        value: 'japan',
    },
    {
        label: 'Hàn Quốc',
        value: 'korea',
    },
    {
        label: 'Ấn Độ',
        value: 'India',
    },
    {
        label: 'Đức',
        value: 'germany',
    },
    {
        label: 'Hà Lan',
        value: 'netherlands',
    },
    {
        label: 'Hungary',
        value: 'hungary',
    },
    {
        label: 'Hy Lạp',
        value: 'greek',
    },
    {
        label: 'Thụy Điển',
        value: 'sweden',
    },
    {
        label: 'Trung Quốc',
        value: 'china',
    },
    {
        label: 'Indoneia',
        value: 'indonesia',
    },
    {
        label: 'Puerto Rico',
        value: 'puertoRico',
    },
    {
        label: 'Slovenia',
        value: 'slovenia',
    },
    {
        label: 'Tây Ban Nha',
        value: 'spain',
    },
    {
        label: 'Thổ Nhĩ Kỳ',
        value: 'turkey',
    },
    {
        label: 'Thụy Sỹ',
        value: 'switzerland',
    },
    {
        label: 'Úc',
        value: 'australia',
    },
];

const evaluates = [
    {
        label: 'Tất cả',
        value: 'all',
    },
    {
        label: 'Từ 5 sao',
        value: 'five-star',
    },
    {
        label: 'Từ 4 sao',
        value: 'four-star',
    },
    {
        label: 'Từ 3 sao',
        value: 'three-star',
    },
    {
        label: 'Từ 2 sao',
        value: 'two-star',
    },
    {
        label: 'Từ 1 sao',
        value: 'one-star',
    },
];

const Filter = () => {
    const dispatch = useDispatch<any>();
    const navigation = useNavigation<any>();

    // xử lý filter
    const filtered = useSelector((state: any) => state.store.filtered);
    const [text, setText] = useState<string>('');
    const [changeSelected, setChangeSelected] = useState<boolean>(false);

    const [pressOriginValue, setOriginPressValue] = useState<string>(
        filtered.origin || origin[0].value,
    );
    const [pressEvaluatesValue, setEvaluatesPressValue] = useState<string>(
        filtered.evaluate || evaluates[0].value,
    );

    const handleChangeOrigin = (value: string) => {
        setOriginPressValue(value);
        if (pressOriginValue !== value) {
            setChangeSelected(true);
        } else {
            setChangeSelected(false);
        }
    };

    const handleChangeEvaluate = (value: string) => {
        setEvaluatesPressValue(value);
        if (pressEvaluatesValue !== value) {
            setChangeSelected(true);
        } else {
            setChangeSelected(false);
        }
    };

    const handleDispatchFilter = () => {
        dispatch(
            filteredValue({
                origin: pressOriginValue,
                evaluate: pressEvaluatesValue,
            }),
        );
        navigation.goBack();
    };

    // quyết định hiện button 'bỏ lọc'
    useEffect(() => {
        if (
            changeSelected ||
            filtered.origin.length > 0 ||
            filtered.evaluate.length > 0
        ) {
            setText('Bỏ lọc');
        }
    }, [filtered, changeSelected, dispatch]);

    // disabled button
    const disabled = () => {
        if (changeSelected) {
            return false;
        }

        return true;
    };

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

    return (
        <SafeAreaView style={{height: '100%'}}>
            <HeaderSeeMore text={text} />
            <ScrollView
                style={{
                    backgroundColor: 'white',
                    marginBottom: 60,
                }}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}>
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
                            scrollEnabled={false}
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
                                    key={item.value}
                                    id={item.value}
                                    label={item.label}
                                    value={item.value}
                                    selected={pressOriginValue === item.value}
                                    onPress={() =>
                                        handleChangeOrigin(item.value)
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
                        scrollEnabled={false}
                        data={evaluates}
                        renderItem={({item}) => (
                            <RadioButton
                                key={item.value}
                                id={item.value}
                                label={item.label}
                                value={item.value}
                                selected={pressEvaluatesValue === item.value}
                                onPress={() => handleChangeEvaluate(item.value)}
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
                                    pressEvaluatesValue === item.value
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
            </ScrollView>
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'white',
                }}>
                <Button
                    text="Áp dụng"
                    disabled={disabled()}
                    handleDispatchFilter={handleDispatchFilter}
                />
            </View>
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
