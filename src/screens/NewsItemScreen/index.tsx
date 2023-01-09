import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { View, Text, Image, ActivityIndicator, Alert } from 'react-native';
import { Button } from '../../ui';
import { Requests } from '../../api/requests';
import { setCurrentNews, removeNews } from '../../redux/slices/newsSlice';
import { RootState } from '../../redux/store';

import { globalStyles } from '../../styles/global';
import { styles } from './styles';

// @ts-ignore
const NewsItemScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const { isAdmin } = useSelector((state: RootState) => state.admin);
    const { id, title, content, image } = route.params;
    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    const fetchNewsItem = async () => {
        setIsLoading(true);
        const response = await Requests.getOneNews(id);
        dispatch(setCurrentNews(response.data));
        setIsLoading(false);
    };

    const removeHandler = async () => {
        try {
            const response = await Requests.removeOneNews(id);
            if (response.status === 200) {
                dispatch(removeNews(id));
                Alert.alert('Success', 'News successfully removed');
                navigation.navigate('Home');
            }
        } catch(error) {
            Alert.alert('Request error', 'Cannot remove. Try again later');
            return;
        }
    };

    useEffect(() => {
        navigation.setOptions({
            id,
            title,
            content,
            image,
        });

        fetchNewsItem();
    }, []);

    console.log('NewsItemScreen - id: ', id);
    console.log('NewsItemScreen - title: ', title);
    console.log('NewsItemScreen - content: ', content);
    console.log('NewsItemScreen - image: ', image);

    return (
        <View style={styles.container}>
            {isLoading
                ?
                <ActivityIndicator style={{ marginBottom: 20 }}/>
                :
                <View style={styles.contentContainer}>
                    <View>
                        <Image
                            style={styles.image}
                            source={{ uri: image }}
                        />
                        <Text style={globalStyles.headingMedium}>
                            {title}
                        </Text>
                        <Text style={globalStyles.text}>
                            {content}
                        </Text>
                    </View>
                    {isAdmin
                        ?
                        <Button
                            value='remove'
                            title='Remove'
                            buttonType="error"
                            action={removeHandler}
                        />
                        :
                        <></>
                    }

                </View>
            }
        </View>
    );
};

export default NewsItemScreen;