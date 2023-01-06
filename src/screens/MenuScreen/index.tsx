import { useDispatch, useSelector } from 'react-redux';

import { View } from 'react-native';
import { InfoPanel } from '../../components';
import { Button } from '../../ui';
import { RootState } from '../../redux/store';
import { setAdmin } from '../../redux/slices/adminSlice';

import { styles } from './styles';
import {colors} from "../../styles/colors";

// @ts-ignore
const MenuScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { isAdmin } = useSelector((state: RootState) => state.admin);

    const switchScreen = (value: string | null) => {
        navigation.navigate(value);
    };

    const logOutHandler = () => {
        dispatch(setAdmin(false));
    };

    return (
        <View style={styles.container}>
            <InfoPanel/>
            <View style={styles.buttonsContainer}>
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
            {isAdmin
                ?
                <Button
                    value='LogOut'
                    title='Log Out'
                    action={logOutHandler}
                />
                :
                <></>
            }
        </View>
    );
};

export default MenuScreen;