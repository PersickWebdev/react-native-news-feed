import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { View, ActivityIndicator, Alert } from 'react-native';
import { Button, Input } from '../../ui';
import { Requests } from '../../api/requests';
import { Helpers } from '../../utils/helpers';
import { setOneNews } from '../../redux/slices/newsSlice';

import { INews } from '../../types/interfaces';
import { styles } from './styles';

// @ts-ignore
const CreateNewsScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [ formData, setFormData ] = useState<INews>({} as INews);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const onSubmitHandler = async () => {
        const id = Helpers.generatePassword();

        const data = {
            id,
            title: formData.title.trim(),
            preview: formData.preview.trim(),
            content: formData.content.trim(),
            image: formData.image.trim(),
        }

        try {
            setIsLoading(true);
            const response = await Requests.addOneNews(data);
            dispatch(setOneNews(response.data));
            setIsLoading(false);
            Alert.alert('Success', 'News successfully created');
            navigation.navigate('Home');
        } catch(error: any) {
            Alert.alert('Error', 'Fetch data failed');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Input
                    label="Title"
                    name="title"
                    textContentType="text"
                    multiline={true}
                    setFormData={setFormData}
                />
                <Input
                    label="Preview"
                    name="preview"
                    textContentType="text"
                    multiline={true}
                    setFormData={setFormData}
                />
                <Input
                    label="Content"
                    name="content"
                    textContentType="text"
                    multiline={true}
                    setFormData={setFormData}
                />
                <Input
                    label="Image URI"
                    name="image"
                    textContentType="text"
                    multiline={true}
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
        </View>
    );
};

export default CreateNewsScreen;