import { useSelector } from 'react-redux';

import { View, Text } from 'react-native';
import { RootState } from '../../redux/store';

import { styles } from './styles';

const InfoPanel = () => {
    const { isAdmin } = useSelector((state: RootState) => state.admin);
    return (
       <View style={styles.container}>
           <Text style={styles.text}>
               {isAdmin
                   ?
                   <Text>Status: admin</Text>
                   :
                   <Text>Status: guest</Text>
               }
           </Text>
       </View>
    );
};

export default InfoPanel;