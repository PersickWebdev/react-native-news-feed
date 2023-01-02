import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Requests } from '../../api/requests';
import { setAllNews } from '../../redux/slices/newsSlice';
import { RootState } from '../../redux/store';
import { NewsList } from '../../components';

// @ts-ignore
const NewsScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { news } = useSelector((state: RootState) => state.news);
    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    const fetchNews = async () => {
        setIsLoading(true);
        const response = await Requests.getAllNews();
        dispatch(setAllNews(response.data));
        setIsLoading(false);
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <View>
            <NewsList
                news={news}
                isLoading={isLoading}
                navigation={navigation}
            />
        </View>
    );
};

export default NewsScreen;