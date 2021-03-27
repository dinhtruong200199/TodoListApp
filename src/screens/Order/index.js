/** @format */

import React, { useContext, useState } from 'react';
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	Alert,
	TextInput,
} from 'react-native';
import { ApplicationStyles } from '../../themes';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Context from '../Context';

function ItemInputTodo({ value, onChange, index }) {
	return (
		<TextInput
			onChangeText={(text) => onChange(text, index)}
			style={[styles.input, styles.inputTodo]}
			value={value}
		></TextInput>
	);
}

ItemInputTodo.defaultProps = {
	value: '',
	onChange: () => {},
	index: -1,
};

function Order(props) {
	const [title, setTitle] = useState('');
	const [listTodo, setListTodo] = useState([]);
	const navigation = useNavigation();
	const [context, setContext] = useContext(Context);

	const handleBuy = () => {
		if (!title.trim()) {
			return Alert.alert('Title cant be blank.');
		}

		if (listTodo.length === 0) {
			return Alert.alert('Todo list cant be blank.');
		}

		var time = new Date();
		const currentTime = `${time.getHours()}:${time.getMinutes()} ${time.getDate()}/${
			time.getMonth() + 1
		}/${time.getFullYear()}`;
		setContext((state) => [
			...state,
			{
				id: context.length + 1,
				remark: title,
				timeCreate: currentTime,
				list: listTodo,
			},
		]);
		navigation.navigate('Products');
	};

	const handleAddItemTodo = () => {
		setListTodo((state) => {
			return [...state, ''];
		});
	};

	const handleChangeText = (text, index) => {
		if (index === -1) {
			return setListTodo([text]);
		}

		setListTodo((state) => {
			const cloneList = [...state];
			cloneList[index] = text;
			return cloneList;
		});
	};

	const renderItemTodo = () => {
		if (listTodo.length < 2) {
			return (
				<ItemInputTodo
					onChange={handleChangeText}
					index={-1}
					value={listTodo[0]}
				></ItemInputTodo>
			);
		}

		return (
			<>
				{listTodo.map((item, index) => {
					return (
						<ItemInputTodo
							onChange={handleChangeText}
							index={index}
							key={index.toString()}
							value={item}
						></ItemInputTodo>
					);
				})}
			</>
		);
	};

	return (
		<View style={ApplicationStyles.screen.container}>
			<Header
				goBack={() => navigation.navigate('Products')}
				label='New Todo'
				rightButton={() => navigation.navigate('Order')}
			></Header>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.content}>
					<Text style={styles.header}>Title</Text>
					<TextInput
						style={styles.input}
						value={title}
						onChangeText={(text) => setTitle(text)}
					></TextInput>

					<View style={styles.inputGroup}>
						<Text style={styles.header}>Todo list</Text>
						{renderItemTodo()}
						<TouchableOpacity
							style={styles.addButton}
							onPress={handleAddItemTodo}
						>
							<Text>Add Todo</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.footer}>
					<TouchableOpacity style={styles.button} onPress={handleBuy}>
						<Text style={styles.buttonText}>Done</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
}

export default Order;
