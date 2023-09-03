/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import store from './redux/store';
import HeaderStore from './component/Header/Store/HeaderStore';
import HeaderSeeMore from './component/Header/HeaderSeeMore';
import StoreScreen from './screen/Store';
import SearchProductScreen from './screen/SearchProduct';
import ProductDetailScreen from './screen/ProductDetail';
import OtherProductsScreen from './screen/ProductDetail/OtherProducts';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CartScreen from './screen/Cart';
import PartnerScreen from './screen/Store/Partner';
import PrescriptionConsultScreen from './screen/Store/PrescriptionConsultation';
import HeaderShop from './component/Header/HeaderShop';
import ShopScreen from './screen/Shop';
import ReviewScreen from './screen/Review';
import Filter from './screen/Filter';
const Stack = createNativeStackNavigator();

// 2. code giao diện khi click vào 3 ô ở 'tư vấn đơn thuốc' -> còn tải ảnh lên, kiểm tra tính đúng của input
// 3. giao diện filter -> logic filter
// 7. button xoá 1 sản phẩm ra khỏi giỏ hàng -> xử lý khi click
// 5. logic khi kéo xuống thì loading tải thêm sách, loading lại trang
// 1. làm 1 component icon cart

function App(): JSX.Element {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Provider store={store}>
                <NavigationContainer>
                    <SafeAreaProvider>
                        <Stack.Navigator>
                            <Stack.Screen
                                name="StoreScreen"
                                component={StoreScreen}
                                options={{
                                    header: HeaderStore,
                                    // headerShown: false,
                                }}
                            />
                            <Stack.Screen
                                name="PartnerScreen"
                                component={PartnerScreen}
                                options={{header: HeaderSeeMore}}
                            />
                            <Stack.Screen
                                name="SearchProductScreen"
                                component={SearchProductScreen}
                                options={{
                                    headerShown: false,
                                }}
                            />
                            <Stack.Screen
                                name="ProductDetailScreen"
                                component={ProductDetailScreen}
                            />
                            <Stack.Screen
                                name="OtherProductsScreen"
                                component={OtherProductsScreen}
                                options={{header: HeaderSeeMore}}
                            />
                            <Stack.Screen
                                name="CartScreen"
                                component={CartScreen}
                                options={{
                                    header: HeaderSeeMore,
                                    // headerShown: false,
                                }}
                            />
                            <Stack.Screen
                                name="PrescriptionConsultScreen"
                                component={PrescriptionConsultScreen}
                                options={{header: HeaderSeeMore}}
                            />
                            <Stack.Screen
                                name="ShopScreen"
                                component={ShopScreen}
                                options={{
                                    header: HeaderShop,
                                    headerTransparent: true,
                                }}
                            />
                            <Stack.Screen
                                name="ReviewScreen"
                                component={ReviewScreen}
                                options={{
                                    header: HeaderSeeMore,
                                }}
                            />
                            <Stack.Screen
                                name="Filter"
                                component={Filter}
                                options={{
                                    header: HeaderSeeMore,
                                }}
                            />
                        </Stack.Navigator>
                    </SafeAreaProvider>
                </NavigationContainer>
            </Provider>
        </GestureHandlerRootView>
    );
}

export default App;
