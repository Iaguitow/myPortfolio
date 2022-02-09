import React, { useEffect, useRef } from "react";
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer, DrawerActions, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons, AntDesign, Ionicons, FontAwesome5, EvilIcons } from "@expo/vector-icons";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { useSelector } from "react-redux";
import { LinearGradient } from 'expo-linear-gradient';
import CompoLoadingView from "./CompoApiLoadingView"
import {
  Box,
  Pressable,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
  Image,
  Badge
} from "native-base";

const Drawer = createDrawerNavigator();

function Component(props) {
  return (
    <Center>
      <Text mt="12" fontSize="18">
        This is {props.route.name} page.
      </Text>
    </Center>
  );
}

const getIcon = (screenName) => {
  switch (screenName) {
    case "Profile":
      return "profile";
    case "Experience":
      return "work-outline";
    case "School":
      return "ios-school-outline";
    case "Skills":
      return "head-check-outline";
    case "Projects":
      return "laptop-code";
    case "Configuration":
      return "gear";
    case "Logout":
      return "logout"
    default:
      return undefined;
  }
};

/*****************************  NAVIGATION POINTING ****************************/
function MyDrawer() {
  const navigation = useNavigation();

  return (
    <Box safeArea flex={1} bg={"white"}>
      {/* CustomDrawerContent => Takes the props from the Drawer.Screen and send it to customDrawerContent through the {...props} */}
      <Drawer.Navigator
        screenOptions={{
          headerTransparent: false,
          headerTitle: (title) => {
            if (title.children === "Inbox") {
              return (
                <Icon
                  onPress={() => {
                    navigation.dispatch(DrawerActions.openDrawer());
                  }}
                  color={"rgb(0,185,243)"}
                  as={<MaterialIcons name="menu" />}
                  size={9}
                  mb={6}
                />
              );
            }
          },
          headerRight: () => {
            return (
              <Icon
                onPress={() => {
                  navigation.dispatch(DrawerActions.openDrawer());
                }}
                color={"rgb(0,185,243)"}
                as={<MaterialIcons name="menu" />}
                size={9}
                mb={6}
              />
            );
          },
          headerLeft: () => {
            return (
              <Icon
                onPress={() => {
                  navigation.dispatch(DrawerActions.openDrawer());
                }}
                color={"rgb(0,185,243)"}
                as={<MaterialIcons name="menu" />}
                size={9}
                mb={6}
              />
            );
          },
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Profile" component={Component} />
        <Drawer.Screen name="Experience" component={Component} />
        <Drawer.Screen name="School" component={Component} />
        <Drawer.Screen name="Skills" component={Component} />
        <Drawer.Screen name="Projects" component={Component} />
        <Drawer.Screen name="Configuration" component={Component} />
        <Drawer.Screen name="Logout" component={Component} />
      </Drawer.Navigator>
    </Box>
  );
}

function CustomDrawerContent(props) {
  const user = useSelector(state => state.reducerLogin);
  return (
    <LinearGradient style={{ flex: 1 }}
      colors={['#00b9f3', '#061b21', '#061b21']}
      start={[1, 0]} end={[0, 3]}
      locations={[0.7, 0.1, 0.2]}
    >
    <DrawerContentScrollView {...props}>
      <VStack space="4" my="6" mx="1">

{/*****************************  HEADER ****************************/}

          <Image {...nativeBaseProps.IMG} source={require('../../assets/icon.png')} />
          <Box px="4">
            <Text bold fontSize={18} color="gray.100">
              {user.payload.name}
            </Text>
            <Text
              marginLeft={-1} 
              p={1}
              borderWidth={2} 
              borderColor={"rgb(0,185,243)"}
              borderRadius={17}
              alignSelf={"flex-start"} 
              fontSize={14} 
              mt="1" 
              color="gray.200" 
              fontWeight="500"
            >
              {user.payload.email}
            </Text>
          </Box>
          <Divider {...nativeBaseProps.Dividers} />
        
        {/*****************************  DRAWER BODY ****************************/}
        <VStack divider={<Divider {...nativeBaseProps.Dividers} />} space="2">
          <VStack space="3">
            <StatusBar barStyle={"dark-content"} />
            {/* Props CAME FROM THE DRAWERNAVIGATOR WITH THE LIST OF SCREEN. USING MAP TO LIST IT. routeNames is a prop from the drawer. */}
            {props.state.routeNames.map((name, index) => {
              return (
                <Box key={index}>
                  {name==="Logout"?<Divider {...nativeBaseProps.Dividers} />:null}
                  <Pressable
                    px="5"
                    py={name==="Logout"?"3":"2"}
                    my={name==="Logout"?"2":"0"}
                    rounded="md"
                    bg={
                      index === props.state.index
                        ? "rgba(0,185,243,0.5)"
                        : "transparent"
                    }
                    onPress={(event) => {
                      props.navigation.navigate(name);
                    }}
                    key={index}
                  >
                    <HStack space="7" alignItems="center">
                      <Icon
                        as={() => {
                            if (name === "Profile") {
                              return (<AntDesign size={30}  color={index === props.state.index ? nativeBaseProps.OptionsColor.selected : nativeBaseProps.OptionsColor.unselected} name={getIcon(name)} />)
                            } else if (name === ("Experience" || "Logout")) {
                              return (<MaterialIcons size={30} color={index === props.state.index ? nativeBaseProps.OptionsColor.selected : nativeBaseProps.OptionsColor.unselected} name={getIcon(name)} />)
                            } else if (name === "School") {
                              return (<Ionicons size={30} color={index === props.state.index ? nativeBaseProps.OptionsColor.selected : nativeBaseProps.OptionsColor.unselected} name={getIcon(name)} />)
                            } else if (name === "Projects") {
                              return (<FontAwesome5 size={25} color={index === props.state.index ? nativeBaseProps.OptionsColor.selected : nativeBaseProps.OptionsColor.unselected} name={getIcon(name)} />)
                            } else if (name === "Configuration") {
                              return (<EvilIcons size={35} color={index === props.state.index ? nativeBaseProps.OptionsColor.selected : nativeBaseProps.OptionsColor.unselected} name={getIcon(name)} />)
                            }
                            else {
                              return (<MaterialCommunityIcons color={index === props.state.index ? nativeBaseProps.OptionsColor.selected : nativeBaseProps.OptionsColor.unselected} size={30} name={getIcon(name)} />)
                            }
                          }
                        }
                      />
                      <Text
                        style={styles.textOptionDrawer}
                        color={
                          index === props.state.index ? nativeBaseProps.OptionsColor.selected : nativeBaseProps.OptionsColor.unselected
                        }
                      >
                        {name}
                      </Text>
                    </HStack>
                  </Pressable>
                </Box>
              )
            })}
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
    </LinearGradient>
  );
}

export default function CompoDrawer(nativeBaseProps) {
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true;
    return () => { <CompoLoadingView /> }
  }, [isMounted.current]);

  console.log(isMounted.current);

  return (
    <NavigationContainer independent={true}>
      <MyDrawer nativeBaseProps = { nativeBaseProps } />
    </NavigationContainer>
  );
}

const nativeBaseProps = {
  OptionsColor:{
    unselected: "rgba(255, 255, 255, 0.9)",
    selected:"rgb(0,185,243)",
  },
  Dividers:{
    alignSelf:"center", 
    bgColor:"gray.300", 
    thickness:"2", 
    mx:"1", 
    orientation:"horizontal"
  },
  IMG: {
    marginTop: 0,
    alignSelf: "center",
    marginBottom: 0,
    size: 140,
    alt: "LOGO",
    borderRadius: 100
  }
}

const styles = StyleSheet.create({
  textOptionDrawer: {
    fontSize: 15,
    fontWeight: "bold",
  }
});