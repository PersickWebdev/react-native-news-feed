import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    contentContainer: {
        justifyContent: 'space-between',
        height: '100%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 6,
        backgroundColor: colors.black,
    },
    image: {
        width: '100%',
        height: 250,
        marginBottom: 10,
    }
});