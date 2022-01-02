import { StatusBar,LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from "./src/screens/login";

LogBox.ignoreLogs(["The contrast ratio"]);
const Stack = createStackNavigator();
StatusBar.setHidden(false);

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <StatusBar barStyle="light-content" style="auto"/>
      <Stack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='login' component={login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}