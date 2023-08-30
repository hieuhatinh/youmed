/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ContainerProducts from '../../component/SearchProduct/ContainerProducts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text} from 'react-native';
import HeaderSearchProduct from '../../component/Header/HeaderSearchProduct';

const SearchProductTab = createMaterialTopTabNavigator();

interface IScreen {
    name: string;
    iconFocus?: any;
    iconDefault?: any;
}

const listScreen: IScreen[] = [
    {
        name: 'Mới nhất',
    },
    {
        name: 'Bán chạy',
    },
    {
        name: 'Giá',
        iconFocus: 'arrow-up',
        iconDefault: 'chevron-double-up',
    },
    {
        name: 'Đánh giá',
    },
];

const SearchProductScreen = () => {
    return (
        <SafeAreaView style={{height: '100%'}}>
            <HeaderSearchProduct />
            <SearchProductTab.Navigator
                screenOptions={{
                    tabBarLabelStyle: {
                        textTransform: 'capitalize',
                    },
                    tabBarActiveTintColor: '#0033FF',
                    tabBarInactiveTintColor: '#111111',
                    tabBarPressColor: 'white',
                    swipeEnabled: false,
                }}>
                {listScreen.map(item => (
                    <SearchProductTab.Screen
                        options={{
                            tabBarLabel: ({color, focused}) => (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                    <Text style={{color}}>{item.name}</Text>
                                    <Icon
                                        name={
                                            focused
                                                ? item.iconFocus
                                                : item.iconDefault
                                        }
                                        size={15}
                                        color={color}
                                        style={{marginLeft: 2}}
                                    />
                                </View>
                            ),
                        }}
                        key={item.name}
                        name={item.name}
                        children={() => <ContainerProducts />}
                    />
                ))}
            </SearchProductTab.Navigator>
        </SafeAreaView>
    );
};

export default SearchProductScreen;
