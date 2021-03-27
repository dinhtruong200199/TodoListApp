import React from 'react';
import { SafeAreaView, View, StatusBar, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

function Header({ label, goBack, rightButton, rightComponent }) {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor='#fff' barStyle='dark-content'></StatusBar>
            <View style={styles.container}>
                {goBack && <TouchableOpacity onPress={goBack} style={styles.back}>
                    <Text>Back</Text>
                </TouchableOpacity>}
                <Text style={styles.header} numberOfLines={1}>{label}</Text>
                {rightButton && <TouchableOpacity onPress={rightButton} style={styles.right}>
                    <Text>{rightComponent}</Text>
                </TouchableOpacity>}
            </View>
        </SafeAreaView>
    )
}

Header.defaultProps = {
    label: 'Header',
    goBack: null,
    rightButton: null
}

export default Header;