import { StyleSheet, Text, View, Button, Switch } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Another piece of text</Text>
      <Text style={styles.dummyText}>Hello World!!!!</Text>
      <Button title='Click me' />
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
  dummyText: {
    margin: 16,
    borderColor: 'blue',
    borderWidth: 2,
    padding: 16
  }
});
