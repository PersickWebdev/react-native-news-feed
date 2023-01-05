import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.black,
        opacity: 0.5,
    },
    text: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.white,
        textAlign: 'center',
    }
});