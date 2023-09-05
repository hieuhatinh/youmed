/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback} from 'react';
import {FlatList, View, RefreshControl} from 'react-native';

import CardProduct from './Product/Card';
import {IProduct} from '../../utilities/interfaces/product';

interface IPropsProducts {
    products: IProduct[];
}

// const wait = (timeout: any) => {
//     return new Promise(resolve => setTimeout(resolve, timeout));
// };

// hiển thị nhiều product
const ProductsVertical = (props: IPropsProducts) => {
    const {products} = props;

    const [data, setData] = useState(products);
    const [refreshing, setRefreshing] = useState(false);

    // tải lại trang
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setData([
            ...data,
            {
                id: '7',
                uri: 'https://kemembe.com/wp-content/themes/yootheme/cache/69/18-1-691508c5.png',
                name: 'Viên uống dưỡng trắng, làm căng bóng da Wacos Cerepron hộp 60 viên',
                price: 875000,
                oldPrice: 920000,
                percentDiscount: 10,
                origin: 'Việt Nam',
                star: 5,
                sold: 32,
            },
        ]);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    // load thêm dữ liệu
    const loadMore = () => {
        // Do something to fetch more data
        setData([
            ...data,
            {
                id: (data.length + 1).toString(),
                uri: 'https://kemembe.com/wp-content/themes/yootheme/cache/69/18-1-691508c5.png',
                name: 'Viên uống dưỡng trắng, làm căng bóng da Wacos Cerepron hộp 60 viên',
                price: 875000,
                oldPrice: 920000,
                percentDiscount: 10,
                origin: 'Việt Nam',
                star: 5,
                sold: 32,
            },
        ]);
    };

    return (
        <FlatList
            data={data}
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
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
        />
    );
};

export default ProductsVertical;
