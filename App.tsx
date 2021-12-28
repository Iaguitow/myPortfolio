import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from "./src/screens/screenHome";

const Stack = createStackNavigator();
StatusBar.setHidden(false);

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='home' component={home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}