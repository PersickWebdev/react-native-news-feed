import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import { ILoginFormData } from '../../types/interfaces';

interface IInput {
    label: string;
    name: string;
    textContentType: any;
    multiline?: boolean;
    setFormData: (state: any) => void;
}

const Input = ({ label, name, textContentType, multiline, setFormData }: IInput) => {

    const [ inputValue, setInputValue ] = useState<string>('');

    const onChangeTextHandler = (text: string) => {
        setInputValue(text);
        setFormData((state: ILoginFormData) => {
            return {
                ...state,
                [name]: text,
            }
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}:
            </Text>
            <TextInput
                style={styles.input}
                value={inputValue ?? ''}
                textContentType={textContentType}
                autoCapitalize="none"
                multiline={multiline}
                secureTextEntry={textContentType === 'password'}
                onChangeText={(text: string) => onChangeTextHandler(text)}
            />
        </View>
    );
};

export default Input;