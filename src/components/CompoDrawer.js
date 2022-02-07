import React, {useEffect, useRef} from "react";
import { StatusBar } from 'react-native';
import { NavigationContainer, DrawerActions, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons,MaterialIcons } from "@expo/vector-icons";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { useSelector } from "react-redux";

import {
  Box,
  Pressable,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
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
    case "Inbox":
      return "email";
    case "Outbox":
      return "send";
    case "Favorites":
      return "heart";
    case "Archive":
      return "archive";
    case "Trash":
      return "trash-can";
    case "Spam":
      return "alert-circle";
    default:
      return undefined;
  }
};

/*****************************  NAVIGATION POINTING ****************************/  
function MyDrawer() {
  const navigation = useNavigation();
  
  return (
    <Box safeArea flex={1} bg={"white"}>
    {/* CustomDrawerContent => Takes the props from the Drawer.Screen and send it to customDrawerContent through the {...props} */ }
      <Drawer.Navigator
        screenOptions={{
          headerTransparent: false,
          headerTitle:(title) => {
            if(title.children === "Inbox"){
              return (
              <Icon
                onPress={()=>{
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
          headerRight:() => {
            return (
            <Icon
              onPress={()=>{
                navigation.dispatch(DrawerActions.openDrawer());
              }}
              color={"rgb(0,185,243)"}
              as={<MaterialIcons name="menu" />}
              size={9}
              mb={6}
            />
            );
          },
          headerLeft:() => {
            return (
            <Icon
              onPress={()=>{
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
        <Drawer.Screen name="Inbox" component={Component} />
        <Drawer.Screen name="Outbox" component={Component} />
        <Drawer.Screen name="Favorites" component={Component} />
        <Drawer.Screen name="Archive" component={Component} />
        <Drawer.Screen name="Trash" component={Component} />
        <Drawer.Screen name="Spam" component={Component} />
      </Drawer.Navigator>
    </Box>
  );
}

function CustomDrawerContent(props) {
  return (

/*****************************  HEADER ****************************/    
    <DrawerContentScrollView {...props}>
      <VStack space="6" my="2" mx="1">
        <Box px="4">
          <Text bold color="gray.700">
            Mail
          </Text>
          <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
            john_doe@gmail.com
          </Text>
        </Box>

{/*****************************  DRAWER BODY ****************************/}
        <VStack divider={<Divider />} space="4">
          <VStack space="3">
          <StatusBar barStyle={"dark-content"} />
          {/* Props CAME FROM THE DRAWERNAVIGATOR WITH THE LIST OF SCREEN. USING MAP TO LIST IT. routeNames is a prop from the drawer. */ }
            {props.state.routeNames.map((name, index) => (
              <Pressable
                px="5"
                py="3"
                rounded="md"
                bg={
                  index === props.state.index
                    ? "rgba(6, 182, 212, 0.1)"
                    : "transparent"
                }
                onPress={(event) => {
                  props.navigation.navigate(name);
                }}
                key={index}
              >
                <HStack space="7" alignItems="center">
                  <Icon
                    color={
                      index === props.state.index ? "primary.500" : "gray.500"
                    }
                    size="5"
                    as={<MaterialCommunityIcons name={getIcon(name)} />}
                  />
                  <Text
                    fontWeight="500"
                    color={
                      index === props.state.index ? "primary.500" : "gray.700"
                    }
                  >
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>

{/*****************************  SECOND BODY ****************************/}
          <VStack space="5">
            <Text fontWeight="500" fontSize="14" px="5" color="gray.500">
              Labels
            </Text>
            <VStack space="3">
              <Pressable px="5" py="3">
                <HStack space="7" alignItems="center">
                  <Icon
                    color="gray.500"
                    size="5"
                    as={<MaterialCommunityIcons name="bookmark" />}
                  />
                  <Text color="gray.700" fontWeight="500">
                    Family
                  </Text>
                </HStack>
              </Pressable>
              <Pressable px="5" py="2">
                <HStack space="7" alignItems="center">
                  <Icon
                    color="gray.500"
                    size="5"
                    as={<MaterialCommunityIcons name="bookmark" />}
                  />
                  <Text color="gray.700" fontWeight="500">
                    Friends
                  </Text>
                </HStack>
              </Pressable>
              <Pressable px="5" py="3">
                <HStack space="7" alignItems="center">
                  <Icon
                    color="gray.500"
                    size="5"
                    as={<MaterialCommunityIcons name="bookmark" />}
                  />
                  <Text fontWeight="500" color="gray.700">
                    Work
                  </Text>
                </HStack>
              </Pressable>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}

export default function CompoDrawer() {

  const user = useSelector(state => state.reducerLogin)
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true;
    return () => { isMounted.current = false }
  }, []);

  console.log(isMounted.current);

  return (
    <NavigationContainer independent={true}>
        <MyDrawer/>
    </NavigationContainer>
  );

}