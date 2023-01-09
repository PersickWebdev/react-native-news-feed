import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface IButton {
    value: string;
    title: string;
    action?: (value: string) => void;
    buttonType?: string;
}

// buttonType:
// - success        - green colored button text
// - warning        - yellow colored button text
// - error          - red colored button text

const Button = ({ value, title, action, buttonType }: IButton) => {

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => action && action(value)}
        >
            {/*@ts-ignore*/}
            <Text style={buttonType ? [ styles.title, styles[`${buttonType}`]] : styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;