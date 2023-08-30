/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import ProductsVertical from '../../Products/ProductsVertical';
import {listProduct} from '../../../fakeData/products';

const ContainerProducts = () => {
    return (
        <SafeAreaView>
            <ProductsVertical products={listProduct} />
        </SafeAreaView>
    );
};

export default ContainerProducts;
