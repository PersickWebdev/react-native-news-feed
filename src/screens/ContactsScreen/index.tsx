import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Requests } from '../../api/requests';
import { setContacts } from '../../redux/slices/contactsSlice';
import { RootState } from '../../redux/store';
import { globalStyles } from '../../styles/global';
import { styles } from './styles';

const ContactsScreen = () => {
    const dispatch = useDispatch();
    const { contacts } = useSelector((state: RootState) => state.contacts);
    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    const fetchContacts = async () => {
        setIsLoading(true);
        const response = await Requests.getContacts();
        dispatch(setContacts(response.data));
        setIsLoading(false);
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <View style={styles.container}>
            {isLoading
                ?
                <ActivityIndicator style={{ marginTop: 20 }}/>
                :
                <>
                    <View style={styles.contentContainer}>
                        <Text style={globalStyles.text}>
                            Please, feel free to give us any feedback by the following contacts:
                        </Text>
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={globalStyles.text}>
                            {contacts.country}, {contacts.city}
                        </Text>
                        <Text style={globalStyles.text}>
                            {contacts.email}
                        </Text>
                        <Text style={globalStyles.text}>
                            {contacts.website}
                        </Text>
                        <Text style={globalStyles.text}>
                            {contacts.phone}
                        </Text>
                    </View>
                </>

            }
        </View>
    );
};

export default ContactsScreen;