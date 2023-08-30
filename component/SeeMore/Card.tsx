/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface IPartner {
    id: string;
    uri: string;
    name: string;
}

interface IPropCard {
    item: IPartner;
}

const Card = (props: IPropCard) => {
    const {item} = props;

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: item.uri,
                }}
                height={120}
                width={120}
            />
            <Text style={styles.text}>{item.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 5,
        height: 160,
        borderColor: '#CCCCCC',
        margin: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    text: {
        color: 'black',
        paddingBottom: 10,
    },
});

export default Card;
