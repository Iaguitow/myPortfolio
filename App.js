import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import screenListPeople from "./src/screens/screenListPeople";

const Stack = createStackNavigator();
StatusBar.setHidden(false);

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="screenListPeople" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='screenListPeople' component={screenListPeople} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}