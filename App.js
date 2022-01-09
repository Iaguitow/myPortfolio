import { StatusBar,LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/screens/ScreenLogin";
import RegisterPeople from "./src/screens/ScreenRegisterPeople";
import Drawer from "./src/components/Drawer";

LogBox.ignoreLogs(["The contrast ratio"]);

const Stack = createNativeStackNavigator();
StatusBar.setHidden(false);

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <StatusBar style="inverted"/>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='RegisterPeople' component={RegisterPeople}/>
        <Stack.Screen name='Drawer' component={Drawer}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}