import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function DetailWebView() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://github.com/chukaluka' }}
        style={styles.webView}
        onLoad={() => console.log('WebView loaded')}
        onError={(error) => console.error('WebView error:', error)}
        onLoadStart={() => console.log('WebView load started')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(217, 54%, 11%)',
  },
  webView: {
    flex: 1,
  },
});
