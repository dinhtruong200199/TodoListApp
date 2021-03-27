import React, { useContext, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { ApplicationStyles } from '../../themes';
import Header from '../../components/Header';
import styles from './styles';
import { Todos } from '../../services';
import Item from './Item';
import Context from '../Context';

function Products({ navigation }) {
    const [context, setContext] = useContext(Context);

    useEffect(() => {
        setContext([...Todos]);
    }, [])

    return (
        <View style={ApplicationStyles.screen.container}>
            <Header 
                label='List'
				rightComponent={(<Text>Add</Text>)}
				rightButton={() => navigation.navigate('Order')}
            ></Header>
            <View style={styles.content}>
                <FlatList
                    data={context}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <Item data={item}></Item>
                        )
                    }}
                ></FlatList>
            </View>
        </View>
    )
}

export default Products;