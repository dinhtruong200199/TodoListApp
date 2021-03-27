/** @format */

import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { helperFunction } from '../../../utils';

function Item({ data }) {
    const navigation = useNavigation();


	return (
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', {
            transData: data
        })}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.header} numberOfLines={2}>{data.remark}</Text>  
                    <View style={[styles.dot, helperFunction.renderStyleDot(data.level)]}></View>  
                </View>
                <Text>{data.timeCreate}</Text>
            </View>
        </TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
        padding: 10,
        backgroundColor: '#fff',
        marginVertical: 10,
        marginHorizontal: 10,
        // flexDirection: 'row',
        borderRadius: 7,
        overflow: 'hidden'
    },
    containerImage: {width: 100, height: 150},
    image: {
        width: 100,
        height: 150,
        resizeMode: 'contain',
    },
    content: {
        flex: 1,
        marginBottom: 10
    },
    header: {
        fontSize: 20,
    },
    price: {
        fontSize: 15,
        marginBottom: 10
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        position: 'absolute',
        right: 10,
        top: 10
    }
});

export default Item;
