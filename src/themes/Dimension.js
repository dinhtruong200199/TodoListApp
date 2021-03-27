import { Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');

const Dimension = {
    screen: {
        width: dimensions.width,
        height: dimensions.height
    }
}

export default Dimension