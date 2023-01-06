import React, { useState } from 'react';

import { View, Text, TextInput } from 'react-native';

import { ILoginFormData } from '../../types/interfaces';
import { globalStyles } from '../../styles/global';
import { styles } from './styles';

interface IInput {
    label: string;
    name: string;
    textContentType: any;
    multiline?: boolean;
    error: string;
    setFormData: (state: any) => void;
    setFormErrors: (state: any) => void;
}

const Input = ({ label, name, textContentType, multiline, error, setFormData, setFormErrors }: IInput) => {

    const [ inputValue, setInputValue ] = useState<string>('');

    const onChangeTextHandler = (text: string) => {
        setInputValue(text);

        setFormData((state: ILoginFormData) => {
            return {
                ...state,
                [name]: text,
            }
        });

        setFormErrors && setFormErrors((state: any) => {
            return {
                ...state,
                [name]: '',
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
            {error
                ?
                <Text style={globalStyles.formError}>{error}</Text>
                :
                <></>
            }
        </View>
    );
};

export default Input;