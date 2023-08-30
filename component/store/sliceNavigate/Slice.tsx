/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const win = Dimensions.get('window');

const listImage = [
    {
        id: '1',
        uri: 'https://cdn.thuvienphapluat.vn/uploads/tintuc/2022/01/10/thuoc-gia.png',
    },
    {
        id: '2',
        uri: 'https://cdn.thuvienphapluat.vn/uploads/tintuc/2022/01/10/thuoc-gia.png',
    },
    {
        id: '3',
        uri: 'https://cdn.thuvienphapluat.vn/uploads/tintuc/2022/01/10/thuoc-gia.png',
    },
    {
        id: '4',
        uri: 'https://cdn.thuvienphapluat.vn/uploads/tintuc/2022/01/10/thuoc-gia.png',
    },
];

const Slice = () => {
    return (
        <View style={styles.viewListImage}>
            <SwiperFlatList
                autoplay
                autoplayDelay={2}
                autoplayLoop
                index={2}
                showPagination
                data={listImage}
                renderItem={({item}) => (
                    <Image
                        source={{
                            uri: item.uri,
                        }}
                        height={180}
                        width={win.width * 0.9}
                        style={styles.image}
                    />
                )}
                paginationStyleItem={{
                    width: 8,
                    height: 8,
                }}
                paginationActiveColor="#3366FF"
                paginationDefaultColor="#fff"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    viewListImage: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
    },
    image: {
        borderRadius: 10,
        display: 'flex',
        marginHorizontal: 8,
    },
    dots: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        bottom: 10,
        textAlign: 'center',
        left: '50%',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 5,
        backgroundColor: 'blue',
        marginHorizontal: 8,
    },
});

export default Slice;
