import { View } from 'react-native';
import { Button } from '../../ui';
import { styles } from './styles';

// @ts-ignore
const MenuScreen = ({ navigation }) => {

    const switchScreen = (value: string | null) => {
        navigation.navigate(value);
    };

    return (
        <View style={styles.container}>
            <Button
                value='Contacts'
                title='Contacts'
                action={(value: string | null) => switchScreen(value)}
            />
            <Button
                value='News'
                title='News'
                action={(value: string | null) => switchScreen(value)}
            />
            <Button
                value='LogIn'
                title='Log In'
                action={(value: string | null) => switchScreen(value)}
            />
        </View>
    );
};

export default MenuScreen;