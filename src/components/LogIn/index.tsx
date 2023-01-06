import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { View, ActivityIndicator, Alert } from 'react-native';
import { Button, Input } from '../../ui';
import { Requests } from '../../api/requests';
import { setAdmin } from '../../redux/slices/adminSlice';
import { UseValidation } from '../../utils/useValidation';

import { ILoginFormData, ILoginFormErrors } from '../../types/interfaces';
import { styles } from './styles';

// @ts-ignore
const LogIn = ({ navigation }) => {
    const { isEmailValid, isPasswordValid } = UseValidation();
    const dispatch = useDispatch();
    const [ formData, setFormData ] = useState<ILoginFormData>({
        email: '',
        password: ''
    });
    const [ formErrors, setFormErrors ] = useState<ILoginFormErrors>({
        email: '',
        password: '',
    });
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const isFormDataValid = () => {
        const emailValidator = isEmailValid({ formData, setFormErrors });
        const passwordValidator = isPasswordValid({ formData, setFormErrors });
        return emailValidator && passwordValidator;
    };

    const onSubmitHandler = async () => {
        console.log('isFormDataValid: ', isFormDataValid());

        if (!isFormDataValid()) return;

        setIsLoading(true);

        const adminData = await Requests.getAdminData();

        if (adminData.data.email === formData.email && adminData.data.password === formData.password) {
            dispatch(setAdmin(true));
            navigation.navigate('Home');
        } else {
            Alert.alert('Incorrect login data');
        }

        setIsLoading(false);
    };

    return (
        <View style={styles.container}>
            <Input
                label="Email"
                name="email"
                textContentType="emailAddress"
                error={formErrors.email}
                setFormData={setFormData}
                setFormErrors={setFormErrors}
            />
            <Input
                label="Password"
                name="password"
                textContentType="password"
                error={formErrors.password}
                setFormData={setFormData}
                setFormErrors={setFormErrors}
            />
            {isLoading
                ?
                <ActivityIndicator style={{ paddingVertical: 10 }}/>
                :
                <Button
                    value='submit'
                    title='Submit'
                    action={onSubmitHandler}
                />
            }

        </View>
    );
};

export default LogIn;