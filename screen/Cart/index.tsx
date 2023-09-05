/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

import CardProduct from '../../component/Cart/CardProduct';
import stylesGlobal from '../../assets/styles/global';
import {productsCart} from '../../fakeData/products';
import Bottom from '../../component/Cart/Bottom';

const CartScreen = () => {
    const [dataProduct, setDataProduct] = useState(productsCart);

    const handlePressDelete = (rowMap: any, item: any) => {
        setDataProduct(productsCart =>
            productsCart.map(section => {
                if (section.id === item.section.id) {
                    return {
                        ...section,
                        data: section.data.filter(
                            product => product.id !== item.item.id,
                        ),
                    };
                }
                return section;
            }),
        );
    };

    return (
        <SafeAreaView style={{height: '100%'}}>
            <ScrollView
                style={{
                    marginBottom: 10,
                }}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}>
                <View style={{marginBottom: 80, backgroundColor: 'white'}}>
                    <SwipeListView
                        useSectionList
                        sections={dataProduct}
                        keyExtractor={item => item.id}
                        renderSectionHeader={({section: {store}}) => (
                            <Text
                                style={StyleSheet.flatten([
                                    styles.textStore,
                                    stylesGlobal.textColor,
                                ])}>
                                {store}
                            </Text>
                        )}
                        renderItem={(data: any) => (
                            <CardProduct product={data.item} />
                        )}
                        renderHiddenItem={(rowData, rowMap) => (
                            <TouchableOpacity
                                activeOpacity={0.9}
                                style={styles.deleteButton}
                                onPress={() =>
                                    handlePressDelete(rowMap, rowData)
                                }>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: 'white',
                                        fontSize: 16,
                                    }}>
                                    Xoá
                                </Text>
                            </TouchableOpacity>
                        )}
                        onRowOpen={(rowKey, rowMap) => {
                            setTimeout(() => {
                                if (rowMap[rowKey]) {
                                    rowMap[rowKey].closeRow();
                                }
                            }, 3000);
                        }}
                        closeOnRowOpen={false}
                        stopRightSwipe={-80}
                        rightOpenValue={-80}
                        disableRightSwipe
                        scrollEnabled={false}
                        nestedScrollEnabled
                    />
                </View>
            </ScrollView>

            {/* Bottom */}
            <Bottom />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textStore: {
        fontSize: 18,
        paddingHorizontal: 10,
        paddingTop: 10,
        fontWeight: '500',
        width: '100%',
        marginBottom: 10,
    },
    viewBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 20,
        marginTop: 10,
        height: 80,
        zIndex: 1,
        borderWidth: 0.25,
        borderColor: '#ccc',
    },
    viewSumPrice: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: 10,
    },
    priceBottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontWeight: '500',
        marginLeft: 16,
    },
    buttonBuy: {
        width: 100,
    },
    textButton: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        top: '-50%',
        transform: [{translateY: 50}],
        fontWeight: '500',
    },
    // bottom sheet
    headerBottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 5,
    },

    deleteButton: {
        position: 'absolute',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 80,
        right: 0,
        bottom: 0,
        top: 1,
        zIndex: -1,
    },
});

export default CartScreen;
