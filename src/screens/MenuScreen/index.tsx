import { View } from 'react-native';
import { Button } from '../../ui';
import { styles } from './styles';

// @ts-ignore
const MenuScreen = ({ navigation }) => {

    const switchScreen = (value: string) => {
        navigation.navigate(value);
    };

    return (
        <View style={styles.container}>
            <Button
                value='Contacts'
                title='Contacts'
                action={(value: string) => switchScreen(value)}
            />
            <Button
                value='News'
                title='News'
                action={(value: string) => switchScreen(value)}
            />
        </View>
    );
};

export default MenuScreen;