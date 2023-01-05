import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { View, ActivityIndicator, Alert } from 'react-native';
import { Button, Input } from '../../ui';
import { Requests } from '../../api/requests';
import { setAdmin } from '../../redux/slices/adminSlice';

import { ILoginFormData } from '../../types/interfaces';
import { styles } from './styles';

// @ts-ignore
const LogIn = ({ navigation }) => {
    const dispatch = useDispatch();
    const [ formData, setFormData ] = useState<ILoginFormData>({
        email: '',
        password: ''
    });
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const onSubmitHandler = async () => {
        setIsLoading(true);
        const adminData = await Requests.getAdminData();
        if (adminData.data.email === formData.email && adminData.data.password === formData.password) {
            dispatch(setAdmin(true));
            navigation.navigate('CreateNews');
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
                setFormData={setFormData}
            />
            <Input
                label="Password"
                name="password"
                textContentType="password"
                setFormData={setFormData}
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