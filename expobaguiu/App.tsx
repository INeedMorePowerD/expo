import react from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style ={styles.box1}>
       <Text>KeepCalm</Text>
      </View>
      <View style ={styles.box2}>
       <Text>KeepCalmParte2</Text>
      </View>
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
  box1: {
    width: 400,
    height: 200,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  box2: {
    width: 600,
    height: 100,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
}); 
