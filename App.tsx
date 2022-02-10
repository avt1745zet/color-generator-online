import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Helmet } from 'react-helmet';
import ColorGenerator from './components/ColorGenerator';
import packageJson from './package.json';

export default function App() {
  return (
    <View style={styles.container}>
      <Helmet>
        <title>Random Color Generator</title>
        <meta name='description' content='A random color generator for people who are struggling to find a color.😘' />
        <meta name='keywords' content='color generator,YY' />
        <meta property='og:title' content='Random Color Generator' />
        <meta property='og:description' content='A random color generator for people who are struggling to find a color.😘' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={packageJson.homepage} />
        <meta property='og:image' content={require('./assets/ogimage.png')} />
        <meta name='theme-color' content='#111111' />
      </Helmet>
      <Text style={styles.title}>Color Generator</Text>
      <ColorGenerator></ColorGenerator>
      <Text style={styles.footer}>Version: {packageJson.version}</Text>
      <StatusBar style='auto' />
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
    margin: 4
  },
  footer: {
    color: '#ffffff',
    textAlign: 'center',
    padding: 2
  }
});
