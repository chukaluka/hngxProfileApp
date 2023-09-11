HNGX PROFILE APP

PROJECT DESCRIPTION This is a mobile application using expo that features my Slack identity, Slack profile picture, and includes an “Open GitHub” button. When pressed, utilizes a WebView component to redirect users to my GitHub profile within the application itself. The challenge: I didnt add a navigation to the webview to redirect users, which was loading but not displaying

HOW TO INSTALL AND RUN THE PROJECT

create the expo project npx create-expo-app hngxprofileApp

Enter the directory app cd hngxprofileApp

install the dependency for react native webview npx expo install react-native-webview

install the navigation dependencies npm install @react-navigation/native npx expo install react-native-screens react-native-safe-area-context npm install @react-navigation/native-stack

Run the app expo start
