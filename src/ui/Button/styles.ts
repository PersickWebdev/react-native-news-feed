import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 16,
        border: 6,
        backgroundColor: colors.black,
    },
    title: {
        textAlign: 'center',
        color: colors.white,
    },
    success: {
        textAlign: 'center',
        color: colors.success,
    },
    warning: {
        textAlign: 'center',
        color: colors.warning,
    },
    error: {
        textAlign: 'center',
        color: colors.error,
    }
});