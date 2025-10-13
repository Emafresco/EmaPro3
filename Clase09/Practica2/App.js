import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <Text>Probando imágenes</Text>
     <Image style={styles.image}
            source={require('./assets/ImagenColapinto/zonaMedia.jpeg')}
            resiezMode='contain'/>
      <Image style={styles.image2}
            source={{uri: 'https://www.infobae.com/resizer/v2/CDTA65FYWMDLJV6AHKPIIPNOHU.jpg?auth=6c9f6791e78e189e11a8ff0474b608b95906885697189234ddcdee212e19f2bd&smart=true&width=992&height=661&quality=85'}}
            resiezMode='contain'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
   
    width: '50%',
    justifyContent: 'center',
    marginBottom: '5%'
  },
  image2:{
    height: '300px',
     width: '50%',
    justifyContent: 'center'
  }
});
