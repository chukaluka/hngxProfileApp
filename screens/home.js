import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'
import { WebView } from 'react-native-webview';


export default function Home({ navigation }) {

  const [showWebView, setShowWebView] = useState(false);

  const toggleWebView = () => {
    setShowWebView(!showWebView);
  };

  const pressNavigate = () => {
    navigation.navigate('DetailWebView')
  }

  const handleBothToggleWebViewAndPressNavigate = () => {
    toggleWebView();
    pressNavigate();
  }


  return (
    <View style={styles.container}>
      <Text style={styles.contText}>PERSONAL DETAILS</Text>
      <View style={styles.cover}>
        <Text style={styles.firstText}>Slack Name: chukaluka</Text>
        <Image 
          source={require('../assets/slack.jpg')}
          style={styles.image}
        />
      </View>
      <TouchableOpacity 
      style={styles.button}
      onPress={handleBothToggleWebViewAndPressNavigate}
      >
      <Text style={styles.buttonText}>Open Github</Text>
      </TouchableOpacity>

      {/* {showWebView ? (
        <WebView
          source={{ uri: 'https://github.com/chukaluka' }}
          style={styles.webView}
          onLoad={() => console.log('WebView loaded')}
          onError={(error) => console.error('WebView error:', error)}
          onLoadStart={() => console.log('WebView load started')}
        />
      ) : null} */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(217, 54%, 11%)',
    padding: 110,
    alignItems: 'center',
  },
  cover: {
    padding: 20,
    width: 300,
    height: 300,
    backgroundColor: 'hsl(216, 50%, 16%)',
    borderRadius: 10,
    alignItems: 'center',
  },
  contText: {
    color: 'hsl(0, 0%, 100%)',
    fontWeight: 'bold',
    fontSize: 15,
    paddingBottom: 15,
  },
  firstText: {
    color: 'hsl(0, 0%, 100%)',
    fontSize: 17,
    paddingBottom: 30
  },
  button: {
    backgroundColor: 'hsl(120, 40%, 30%)',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  webView: {
    flex: 1,
  },
})