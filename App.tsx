import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import ColorGenerator from './components/ColorGenerator';
import packageJson from './package.json';

export default function App() {
  return (
    <HelmetProvider>
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
      <View style={styles.container}>
        <Text style={styles.title}>Color Generator</Text>
        <ColorGenerator></ColorGenerator>
        <Text style={styles.footer}>Version: {packageJson.version}</Text>
        <StatusBar style='auto' />
      </View>
    </HelmetProvider>
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
