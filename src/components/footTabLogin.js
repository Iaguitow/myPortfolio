import React from 'react';
import {
  Box,
  Text,
  Icon,
  HStack,
  Center,
  Pressable,
  Divider
} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function FootTabLogin() {
  const [selected, setSelected] = React.useState(2);
  return (
      <Box flex={0} bg="transparent">
        
        <HStack bg="rgb(3,17,29)" alignItems="center" shadow={6}>
          <Pressable
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => setSelected(0)}>
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={'account-outline'}
                  />
                }
                color="rgb(0,185,243)"
                size="sm"
              />
              <Text color="rgb(0,185,243)" fontSize="12" fontWeight={"bold"}>
                REGISTER
              </Text>
            </Center>
          </Pressable>
          <Divider bgColor={"gray.700"} thickness="2" mx="1" orientation="vertical" />
          <Pressable
            opacity={selected === 1 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(1)}
          >
            <Center>
              <Icon
                mb="1"
                as={<MaterialCommunityIcons name="lock-question" />}
                color="rgb(0,185,243)"
                size="sm"
              />
              <Text color="rgb(0,185,243)" fontSize="12" fontWeight={"bold"}>
                LOST PASSWORD
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
  );
}