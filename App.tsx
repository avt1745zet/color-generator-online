import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ColorGenerator from './components/ColorGenerator';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Color Generator</Text>
      <ColorGenerator></ColorGenerator>
      <Text style={styles.footer}>Copyright :&#9002;</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: '#111111',
  },
  title: {
    color: '#ffffff',
    fontSize: 40,
    textAlign: 'center',
    padding: 2
  },
  footer: {
    color: '#ffffff',
    textAlign: 'center',
    padding: 2
  }
});
