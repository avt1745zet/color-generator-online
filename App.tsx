import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Helmet } from 'react-helmet';
import ColorGenerator from './pages/ColorGenerator';
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
      <ColorGenerator />
      <View>
        <Icon
          style={{ width: 24, marginHorizontal: 'auto' }}
          name='github'
          type='font-awesome-5'
          color='#ffffff'
          onPress={() => Linking.openURL('https://github.com/avt1745zet/color-generator-online.git')}
        />
        <Text style={styles.footer}>
          Version: {packageJson.version}
        </Text>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
