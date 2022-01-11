import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CompoRegisterPeople from '../components/CompoRegisterPeople';
import {
  NativeBaseProvider,
  Image,
  VStack,
  HStack,
  Divider,
  Text
} from "native-base";

export default function RegisterPeople({ navigation }) {

  const [TextRegisterColor,setTextRegisterColor] = useState("rgb(0,185,243)");
  const [TextLoginColor,setTextLoginColor] = useState("white");

  return (
    ///////////////////////// HEADER AND LOGO /////////////////////////
    <NativeBaseProvider>
      <View style={{ flexDirection: "column", flexGrow: 1 }} >
        <View style={styles.Header}>
          <LinearGradient style={{ flex: 1 }}
            colors={['#00b9f3', '#061b21', '#061b21']}
            start={[1, 0]} end={[0, 3]}
            locations={[0.7, 0.1, 0.2]}
          >
            <VStack safeAreaTop>
              <Image
                alignSelf={"center"}
                size={150}
                alt="Logo"
                borderRadius={100}
                source={require('../../assets/icon.png')}
              />
              <HStack alignSelf={"flex-end"} space={2} marginRight={5}>
                <Text style={{fontWeight:"bold",fontSize:18,color:TextRegisterColor}}>Register</Text>
                <Divider bgColor={"gray.300"} thickness="2" mx="1" orientation="vertical" />
                <Text style={{fontWeight:"bold",fontSize:18,color:TextLoginColor}} onPress={()=>{
                  setTextRegisterColor("white");
                  setTextLoginColor("rgb(0,185,243)");
                  setTimeout(()=>{
                    navigation.goBack();
                  },300);
                }}>
                  Login
                </Text>
              </HStack>
            </VStack>
          </LinearGradient>
        </View>
        <CompoRegisterPeople />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  Header: {
    flex: 0.4,
    backgroundColor: 'white',
    borderBottomLeftRadius: 100,
    width: "100%",
    overflow: "hidden"
  },
});