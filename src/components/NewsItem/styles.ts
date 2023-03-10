import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 4,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.black,
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 20,
    }
});