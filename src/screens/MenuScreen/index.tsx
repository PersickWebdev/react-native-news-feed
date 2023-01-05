import { useSelector } from 'react-redux';

import { View } from 'react-native';
import { InfoPanel } from '../../components';
import { Button } from '../../ui';
import { RootState } from '../../redux/store';

import { styles } from './styles';

// @ts-ignore
const MenuScreen = ({ navigation }) => {
    const { isAdmin } = useSelector((state: RootState) => state.admin);
    const switchScreen = (value: string | null) => {
        navigation.navigate(value);
    };

    return (
        <View style={styles.container}>
            <InfoPanel/>
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
            {isAdmin
                ?
                <Button
                    value='CreateNews'
                    title='CreateNews'
                    action={(value: string | null) => switchScreen(value)}
                />
                :
                <Button
                    value='LogIn'
                    title='Log In'
                    action={(value: string | null) => switchScreen(value)}
                />
            }
        </View>
    );
};

export default MenuScreen;