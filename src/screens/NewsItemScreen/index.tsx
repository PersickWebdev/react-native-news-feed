import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { Requests } from '../../api/requests';
import { setCurrentNews } from '../../redux/slices/newsSlice';
import { globalStyles } from '../../styles/global';
import { styles } from './styles';

// @ts-ignore
const NewsItemScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const { id, title, content, image } = route.params;
    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    const fetchNewsItem = async () => {
        setIsLoading(true);
        const response = await Requests.getOneNews(id);
        dispatch(setCurrentNews(response.data));
        setIsLoading(false);
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

    return (
        <View style={styles.container}>
            {isLoading
                ?
                <ActivityIndicator style={{ marginBottom: 20 }}/>
                :
                <View style={styles.contentContainer}>
                    <Image source={{ uri: image }}/>
                    <Text style={globalStyles.headingMedium}>
                        {title}
                    </Text>
                    <Text style={globalStyles.text}>
                        {content}
                    </Text>
                </View>
            }
        </View>
    );
};

export default NewsItemScreen;