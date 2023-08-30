/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';

import stylesGlobal from '../../../assets/styles/global';
import HeaderSection from '../../Header/HeaderSection';
import ProductHorizontal from '../../Products/ProductsHorizontal';

interface ISection {
    id: string;
    title: string;
    buttonText: {
        text: string;
        screenName: string;
    };
    type: string;
}

interface IPropItem {
    value: ISection;
}

const Section = (props: IPropItem) => {
    const {value} = props;

    return (
        <View
            style={StyleSheet.flatten([
                {backgroundColor: '#f5f5fa'},
                stylesGlobal.sectionMargin,
            ])}>
            <HeaderSection title={value.title} buttonText={value.buttonText} />
            <ProductHorizontal />
        </View>
    );
};

export default Section;
