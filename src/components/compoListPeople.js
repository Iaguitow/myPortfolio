import React, {useEffect, useState} from "react"
import dbPeople from "../classes/ClassDBPeople"
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

const ListPeople = () => {

  const [objPeople, setObjsPeople] = useState([]);
  useEffect(() => {
    dbPeople.getPeople(true,0).then((objPeoples) =>{
       var formatedObjPeople = Object.values(objPeoples);
       console.log(formatedObjPeople);
       setObjsPeople(formatedObjPeople);
    });
  },[]);

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
        data={objPeople}
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
                    uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
                  {item.NAME}
                </Text>
                <Text
                  fontSize={16}
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.profession}
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
                      {item.likes}
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
                      {item.visualization}
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