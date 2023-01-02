import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const globalStyles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.white,
    },
    headingMain: {
        fontSize: 20,
        fontWeight: '600',
        textTransform: 'uppercase',
        color: colors.white,
    },
    headingMedium: {
        marginBottom: 8,
        fontSize: 16,
        fontWeight: '600',
        textTransform: 'uppercase',
        color: colors.white,
    },
    headingSmall: {
        marginBottom: 8,
        fontSize: 14,
        fontWeight: '600',
        textTransform: 'uppercase',
        color: colors.white,
    }
});