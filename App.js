import { View, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { Header } from './components';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header title='Adivina el número' />
      </View>
    </SafeAreaView>
  );
}
