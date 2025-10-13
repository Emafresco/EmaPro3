import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductLists from './src/Screens/ProductLists';

export default function App() {
  return (
    <View style={styles.container}>
     <Text style={styles.Titulo}>Probando FlatLists </Text>
     <ProductLists/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Titulo:{
    fontSize: 28,
    fontWeight:'bold',
    textAlign: 'center'  
  }   
});
