import { FlatList, ActivityIndicator, View, TouchableOpacity } from 'react-native';
import { NewsItem } from '../../components';
import { INews } from '../../types/interfaces';
import { styles } from './styles';

interface INewsList {
    news: Array<INews>;
    isLoading: boolean;
    navigation: any
}

// @ts-ignore
const NewsList = ({ news, isLoading, navigation }: INewsList) => {
    return (
        <View style={styles.container}>
            {isLoading
                ?
                <ActivityIndicator style={{ marginTop: 20 }}/>
                :
                <FlatList
                    data={news}
                    renderItem={({ item }: { item: INews }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('NewsItemScreen', { id: item.id, title: item.title, content: item.content, image: item.image })}
                        >
                            <NewsItem
                                id={item.id}
                                title={item.title}
                                preview={item.preview}
                                image={item.image}
                            />
                        </TouchableOpacity>
                    )}
                />
            }
        </View>
    );
};

export default NewsList;