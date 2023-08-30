/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, View} from 'react-native';

import {IProduct} from '../../utilities/interfaces/product';
import CardProduct from './Product/Card';
import {listProduct} from '../../fakeData/products';

const ProductHorizontal = () => {
    return (
        <FlatList
            data={listProduct}
            renderItem={({item}: {item: IProduct}) => (
                <View style={{width: 170}}>
                    <CardProduct item={item} />
                </View>
            )}
            keyExtractor={item => item.id}
            horizontal={true}
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}
        />
    );
};

export default ProductHorizontal;
