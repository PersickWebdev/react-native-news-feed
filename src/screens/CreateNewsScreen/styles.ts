import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    formContainer: {
        width: '95%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.black,
        borderRadius: 6,
    }
});