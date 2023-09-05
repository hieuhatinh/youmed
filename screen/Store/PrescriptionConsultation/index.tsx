/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchImageLibrary} from 'react-native-image-picker';
import {v4 as uuidv4} from 'uuid';

import stylesGlobal from '../../../assets/styles/global';
import Button from '../../../component/Button';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface IUriImg {
    id: string;
    uri: string;
}

const width = Dimensions.get('screen').width / 100;

const PrescriptionConsultScreen = () => {
    const [imgs, setImgs] = useState<IUriImg[]>([]);
    const [name, setName] = useState<string>('');
    const [inputChanged, setInputChanged] = useState<boolean>(false);
    const [diseaseSymptoms, setDiseaseSymptoms] = useState<string>('');

    const handleChangeName = (value: string) => {
        setName(value);
        setInputChanged(true);
    };

    const handleChangeDiseaseSymptoms = (value: string) => {
        setDiseaseSymptoms(value);
    };

    // upload
    const handleChoosePhoto = async () => {
        const result: any = await launchImageLibrary({mediaType: 'photo'});
        if (result.didCancel) {
            setImgs([...imgs]);
        } else {
            setImgs([...imgs, {id: uuidv4(), uri: result.assets[0].uri}]);
        }
    };

    const handlePressMinus = (id: string) => {
        const exitItem = imgs.find(img => img.id === id);
        if (!!exitItem) {
            setImgs(imgs.filter(img => img.id !== id));
        }
    };

    // check disabled button
    const checkDisabled = () => {
        if (!name) {
            return true;
        }
        if (imgs.length === 0 && !diseaseSymptoms) {
            return true;
        }
        return false;
    };

    return (
        <SafeAreaView
            style={{
                height: '100%',
            }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{marginBottom: 50}}>
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
                            style={StyleSheet.flatten([
                                styles.inputActive,
                                {
                                    borderColor: inputChanged
                                        ? name
                                            ? '#22c55e'
                                            : '#e11d48'
                                        : '#ccc',
                                },
                            ])}
                            value={name}
                            onChangeText={handleChangeName}
                        />
                        {inputChanged && !name && (
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                }}>
                                <Icon name="alert" size={10} color="#e11d48" />
                                <Text style={{color: '#e11d48', marginLeft: 5}}>
                                    Họ tên không được để trống
                                </Text>
                            </View>
                        )}
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
                            style={StyleSheet.flatten([
                                {
                                    height: 40,
                                    backgroundColor: '#f1f5f9',
                                    padding: 10,
                                },
                                stylesGlobal.textColor,
                            ])}
                            editable={false}
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
                            value={diseaseSymptoms}
                            onChangeText={handleChangeDiseaseSymptoms}
                        />
                    </View>
                    <Text style={{marginBottom: 10, color: '#dc2626'}}>
                        hoặc
                    </Text>
                    <View style={styles.viewInput}>
                        <Text
                            style={StyleSheet.flatten([
                                stylesGlobal.textColor,
                                {marginBottom: 5},
                            ])}>
                            Hình ảnh đơn thuốc ({imgs.length}/3)
                        </Text>

                        {/* hiển thị hình ảnh */}
                        <View style={styles.viewImgs}>
                            {imgs?.map(img => (
                                <View
                                    key={img?.id}
                                    style={{
                                        position: 'relative',
                                        marginRight: 14,
                                        width: width * (100 / 3 - 5),
                                    }}>
                                    <Image
                                        source={{uri: img.uri}}
                                        resizeMode="cover"
                                        style={{
                                            height: 125,
                                            width: '100%',
                                        }}
                                    />
                                    <Icon
                                        name="minus-circle"
                                        size={28}
                                        color="#ef4444"
                                        style={styles.iconMinus}
                                        onPress={() => handlePressMinus(img.id)}
                                    />
                                </View>
                            ))}
                            {/* input tải ảnh lên */}
                            {imgs?.length >= 0 && imgs?.length < 3 && (
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    style={styles.fileUpload}
                                    onPress={handleChoosePhoto}>
                                    <Icon
                                        name="file-upload-outline"
                                        size={30}
                                    />
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.viewButton}>
                <Button text="Gửi đơn thuốc" disabled={checkDisabled()} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    component: {
        // position: 'relative',
        // bottom: 60,
        backgroundColor: 'white',
        padding: 10,
    },
    viewInput: {
        marginBottom: 10,
        width: '100%',
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
    fileUpload: {
        backgroundColor: '#f1f5f9',
        width: 125,
        height: 125,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewImgs: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    iconMinus: {
        position: 'absolute',
        top: -10,
        right: -10,
    },
});

export default PrescriptionConsultScreen;
