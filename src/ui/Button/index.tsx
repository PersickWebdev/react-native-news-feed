import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface IButton {
    value: string;
    title: string;
    action: (value: string) => void;
}

const Button = ({ value, title, action }: IButton) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => action(value)}
        >
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;