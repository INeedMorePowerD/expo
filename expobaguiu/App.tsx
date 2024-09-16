import react from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { Image } from 'expo-image';


export default function App() {
  const handlePress = () => {
    Linking.openURL('https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjo-rHUwcaIAxWyNTUKHXZVNKAQwqsBegQIDBAG&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIDsrHXwfPmY&usg=AOvVaw3VBoCDDNYFIhf9SvSgla_h&opi=89978449');
  };
  return (
    <View style={styles.container}>
      <View style ={styles.box1}>
       <Text>KeepCalm</Text>
      </View>
      <View style ={styles.box2}>
       <Text>Era para ter uma coisa aqui mas eu esqueci de salvar, oops</Text>
      </View>
       <Image
         style={styles.image}
         source={{ uri: 'https://steamuserimages-a.akamaihd.net/ugc/2480999067057807841/582D44A38AED745568D0C8E77182AE1698EE7853/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true' }}
       />
       <TouchableOpacity onPress={handlePress}>
       <View style={styles.box3}>
        <Text>GET SNUCK UPON</Text>
       </View>
       </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    width: 400,
    height: 200,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 30,
  },
  image: {
    width: 400,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 20
  },
  box2: {
    width: 600,
    height: 100,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 40,
  },
  box3: {
    width: 300,
    height: 100,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    borderRadius: 40,
    marginTop: 5,
    textDecorationLine: 'underline',
    fontSize: 16,
  },
}); 
