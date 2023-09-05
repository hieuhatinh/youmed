/* eslint-disable react/no-unstable-nested-components */
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
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import store from './redux/store';
import StoreScreen from './screen/Store';
import SearchProductScreen from './screen/SearchProduct';
import ProductDetailScreen from './screen/ProductDetail';
import OtherProductsScreen from './screen/ProductDetail/OtherProducts';
import CartScreen from './screen/Cart';
import PartnerScreen from './screen/Store/Partner';
import PrescriptionConsultScreen from './screen/Store/PrescriptionConsultation';
import HeaderShop from './component/Header/HeaderShop';
import ShopScreen from './screen/Shop';
import ReviewScreen from './screen/Review';
import Filter from './screen/Filter';
import Search from './screen/Search';
import HeaderSeeMore from './component/Header/HeaderSeeMore';
const Stack = createNativeStackNavigator();

// 3. giao diện filter -> logic filter
// 1. làm trang chờ loading

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
                                    headerShown: false,
                                }}
                            />
                            <Stack.Screen
                                name="Search"
                                component={Search}
                                options={{headerShown: false}}
                            />
                            <Stack.Screen
                                name="PartnerScreen"
                                component={PartnerScreen}
                                options={{header: () => <HeaderSeeMore />}}
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
                                options={{header: () => <HeaderSeeMore />}}
                            />
                            <Stack.Screen
                                name="CartScreen"
                                component={CartScreen}
                                options={{
                                    header: () => <HeaderSeeMore />,
                                }}
                            />
                            <Stack.Screen
                                name="PrescriptionConsultScreen"
                                component={PrescriptionConsultScreen}
                                options={{header: () => <HeaderSeeMore />}}
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
                                    header: () => <HeaderSeeMore />,
                                }}
                            />
                            <Stack.Screen
                                name="Filter"
                                component={Filter}
                                options={{
                                    // header: HeaderSeeMore,
                                    headerShown: false,
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
