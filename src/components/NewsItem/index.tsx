import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { globalStyles } from '../../styles/global';

interface INewsItem {
    id: string;
    title: string;
    preview: string;
    image: string;
}

const NewsItem = ({ id, title, preview, image }: INewsItem) => {
    return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: image }}
                />
                <View>
                    <Text style={globalStyles.headingMedium}>
                        {title}
                    </Text>
                    <Text style={globalStyles.text}>
                        {preview}
                    </Text>
                </View>
            </View>
    );
};

export default NewsItem;