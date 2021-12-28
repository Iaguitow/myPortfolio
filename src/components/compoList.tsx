import React from "react"
import { SafeAreaView } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import {
  Box,
  FlatList,
  Avatar,
  HStack,
  VStack,
  Text,
  Input,
  Icon
} from "native-base";
import { RuntimeGlobals } from "webpack";

const ListPeople = () => {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Aafreen Khan",
      timeStamp: "12:47 PM",
      recentText: "React Native Developer",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Sujitha Mathur",
      timeStamp: "11:11 PM",
      recentText: "React Native Developer",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Anci Barroco",
      timeStamp: "6:22 PM",
      recentText: "React Native Developer",
      avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d727",
      fullName: "Aniket Kumar",
      timeStamp: "8:56 PM",
      recentText: "React Native Developer",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d726",
      fullName: "Kiara sdfssef",
      timeStamp: "12:47 PM",
      recentText: "React Native Developer",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d725",
      fullName: "Kiara",
      timeStamp: "12:47 PM",
      recentText: "React Native Developer",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d724",
      fullName: "Kiara",
      timeStamp: "12:47 PM",
      recentText: "React Native Developer",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d723",
      fullName: "Kiara",
      timeStamp: "12:47 PM",
      recentText: "React Native Developer",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
  ]
  return (
    <Box width={"100%"} flex={1}>
      <SafeAreaView>
        <Box borderColor={"gray.200"} borderBottomWidth={2}>
        <Input
          alignSelf={"center"}
          marginTop={10}
          marginBottom={1}
          placeholder="Search Tags, example: MySQL; React Native; Java"
          bg="transparent"
          height={12}
          width="95%"
          borderRadius="20"
          borderWidth={3}
          fontSize="16"
          InputLeftElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="search" />}
            />
          }
        />
        </Box>
      </SafeAreaView>
      <FlatList
        onTouchStart={() => {console.log("touched")}}
        data={data}
        renderItem={({ item }) => (
          <Box
            borderTopWidth={2}
            borderBottomWidth="2"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="1"
            pr="2"
            py="2"
          >
            <HStack >
              <VStack width={"30%"} marginLeft={3}>
                <Avatar
                  borderWidth={5}
                  borderColor={"gray.900"}
                  size="110px"
                  source={{
                    uri: item.avatarUrl,
                  }}
                />
              </VStack>
              <VStack width={"63%"} position={"relative"} paddingTop={2}>
                <Text
                  fontSize={20}
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.700"
                  bold
                >
                  {item.fullName}
                </Text>
                <Text
                  fontSize={16}
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.recentText}
                </Text>
                <HStack paddingTop={5} alignItems={"flex-end"} space={8}>
                  <Icon
                    alignSelf={"center"}
                    size={9}
                    as={MaterialCommunityIcons}
                    name="email-outline"
                    color="pink.500"
                    _dark={{
                      color: "warmGray.50",
                    }}
                  />
                  <HStack alignSelf={"center"}>
                    <Icon
                      size={9}
                      as={MaterialCommunityIcons}
                      name="heart-outline"
                      color="red.600"
                      _dark={{
                        color: "warmGray.50",
                      }}
                    />
                    <Text
                      alignSelf={"center"}
                      fontSize="xs"
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                    >
                      2k
                    </Text>
                  </HStack>
                  <HStack alignSelf={"center"}>
                    <Icon
                      size={9}
                      as={MaterialCommunityIcons}
                      name="eye-outline"
                      color="cyan.500"
                      _dark={{
                        color: "warmGray.50",
                      }}
                    />
                    <Text
                      alignSelf={"center"}
                      fontSize="xs"
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                    >
                      3k
                    </Text>
                  </HStack>
                </HStack>
              </VStack>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  )
}

export default ListPeople;