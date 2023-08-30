/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import ProductsVertical from '../../component/Products/ProductsVertical';
import {listProduct} from '../../fakeData/products';
import {SafeAreaView} from 'react-native';

const ShopScreen = () => {
    return (
        <SafeAreaView style={{top: 140}}>
            <ProductsVertical products={listProduct} />
        </SafeAreaView>
    );
};

export default ShopScreen;
