import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'rgba(0,0,0,.1)',
        borderBottomWidth: 1
    },
    header: {
        fontSize: 20,
        marginHorizontal: 60
    },
    back: {
        position: 'absolute',
        left: 15
    },
    right: {
        position: 'absolute',
        right: 15
    }
})

export default styles;