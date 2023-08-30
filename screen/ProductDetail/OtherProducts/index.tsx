/* eslint-disable prettier/prettier */
import React from 'react';
import ProductsVertical from '../../../component/Products/ProductsVertical';
import {listProduct} from '../../../fakeData/products';

const OtherProductsScreen = () => {
    return <ProductsVertical products={listProduct} />;
};

export default OtherProductsScreen;
