import { View, Text } from 'react-native';
import { styles } from './styles';
import { LogIn } from '../../components';

// @ts-ignore
const LogInScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <LogIn navigation={navigation}/>
        </View>
    );
};

export default LogInScreen;