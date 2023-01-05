import { StyleSheet } from 'react-native';
import {colors} from "../../styles/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.white,
    },
    input: {
        color: colors.white,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: colors.white
    }
});