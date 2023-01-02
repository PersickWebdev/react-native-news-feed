import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { Navigation } from './src/navigation';
import { AppStyles } from './AppStyles';

const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaView style={AppStyles.container}>
                <Navigation/>
                <StatusBar style='light'/>
            </SafeAreaView>
        </Provider>
    );
};

export default App;