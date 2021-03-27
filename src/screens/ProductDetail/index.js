/** @format */

import React, { useEffect, useState, useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ApplicationStyles } from '../../themes';
import Header from '../../components/Header';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Context from '../Context';

function ProductDetail({ route }) {
	const [product, setProduct] = useState({});
	const [data, setData] = useState({});
	const navigation = useNavigation();
	const [context, setContext] = useContext(Context);

	const { transData } = route.params;

	useEffect(() => {
		const data = context.find((item) => item.id === transData.id);
		console.log(context, data, transData.id)
		setData(data);
	}, []);

	const handleBuy = () => {
		if(Object.keys(product).length === 0) {
			return;
		}

		setContext(state => {
			return [...state, product]
		});
		navigation.navigate('Products')
	}

	return (
		<View style={ApplicationStyles.screen.container}>
			<Header
				goBack={() => navigation.navigate('Products')}
				label={data.remark}
			></Header>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.content}>
					<Text
						style={{
							fontSize: 25,
							marginBottom: 20,
						}}
					>
						{data.remark}
					</Text>
					{(data && data.list) && data.list.map((item, index) => {
						return (
							<View 
								key={index.toString()}
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginBottom: 10,
							}}>
								<View style={{
									height: 10,
									width: 10,
									backgroundColor: '#000',
									borderRadius: 5,
									marginRight: 5
								}}></View>
								<Text>
									{item}
								</Text>
							</View>
						)
					})}
					<Text
						style={{
							fontSize: 13,
						}}
					>
						Time created: {data.timeCreate}
					</Text>
				</View>
			</ScrollView>
		</View>
	);
}

export default ProductDetail;
