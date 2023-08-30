/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList} from 'react-native';
import {View} from 'react-native';

import CardProduct from './Product/Card';
import {IProduct} from '../../utilities/interfaces/product';

interface IPropsProducts {
    products: IProduct[];
}

// hiển thị nhiều product
const ProductsVertical = (props: IPropsProducts) => {
    const {products} = props;

    return (
        <FlatList
            data={products}
            renderItem={({item}) => (
                <View style={{width: '50%', marginLeft: 0.5, marginRight: 0.5}}>
                    <CardProduct item={item} />
                </View>
            )}
            keyExtractor={item => item.id}
            numColumns={2}
            scrollEnabled={true}
            style={{width: '100%'}}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default ProductsVertical;
