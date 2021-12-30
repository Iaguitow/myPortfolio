import React, {useState, useEffect} from "react"
import { StyleSheet, View, Animated} from "react-native"
import { Input, Icon, Stack, Center, Button, Item, NativeBaseProvider } from "native-base"
import { MaterialIcons } from "@expo/vector-icons"

export const Login = () => {

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [heightInput,] = useState( new Animated.Value(1));
    const [heightInput2,] = useState( new Animated.Value(1));
    const [borderFocusWidth, setBorderFocusWidth] = useState(1);
    const [borderFocusWidth2, setBorderFocusWidth2] = useState(1);

    return (
        <Stack space={4} w="100%" alignItems="center">
            <Animated.View style={{transform:[{scale: heightInput}]}}>
                <Input
                    onFocus={() => {
                        setBorderFocusWidth(3);
                        Animated.timing(
                            heightInput,{
                                toValue:1.1,
                                duration:300,
                                useNativeDriver: true
                            }
                        ).start();
                    }}
                    onEndEditing={() => {
                        setBorderFocusWidth(1);
                        Animated.timing(
                            heightInput,{
                                toValue:1,
                                duration:300,
                                useNativeDriver: true
                            }
                        ).start();
                    }}
                    w={{
                        base: "90%",
                    }}
                    autoCapitalize="none"
                    selectionColor={"white"}
                    color={"white"}
                    borderRadius={100}
                    borderColor={"rgb(0,185,243)"}
                    borderWidth={borderFocusWidth}
                    height={60}
                    fontSize={"lg"}
                    InputLeftElement={
                        <Icon
                            color={"rgb(0,185,243)"}
                            as={<MaterialIcons name="person" />}
                            size={7}
                            ml="2"
                        />
                    }
                    placeholderTextColor={"rgb(0,185,243)"}
                    placeholder="Name"
                />
            </Animated.View>
            <Animated.View style={{transform:[{scale: heightInput2}]}}>        
                <Input
                    onFocus={() => {
                            setBorderFocusWidth2(3);
                            Animated.timing(
                                heightInput2,{
                                    toValue:1.1,
                                    duration:300,
                                    useNativeDriver: true
                                }
                            ).start();
                        }}
                        onEndEditing={() => {
                            setBorderFocusWidth2(1);
                            Animated.timing(
                                heightInput2,{
                                    toValue:1,
                                    duration:300,
                                    useNativeDriver: true
                                }
                            ).start();
                        }}
                    type={show ? "text" : "password"}
                    w={{
                        base: "90%",
                    }}
                    autoCapitalize="none"
                    selectionColor={"white"}
                    color={"white"}
                    borderRadius={100}
                    borderColor={"rgb(0,185,243)"}
                    borderWidth={borderFocusWidth2}
                    height={"60px"}
                    fontSize={"lg"}
                    InputRightElement={
                        <Button size="md" rounded="none" w="1/6" h="full" onPress={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    }
                    placeholderTextColor={"rgb(0,185,243)"}
                    placeholder="Password"
                />
            </Animated.View>
        </Stack>
    )
}

const config = {
    dependencies: {
      'linear-gradient': require('expo-linear-gradient').LinearGradient
    }
  }

export default () => {
    return (
        <NativeBaseProvider config={config}>
            <Center 
                flex={1}
                bg={{
                    linearGradient: {
                        colors: ['lightBlue.600','gray.900', 'gray.900'],
                        start: [2, 0],
                        end: [0, 1],
                        location: [0.9,0.1]
                    },
                }}
            >
                <Login />
            </Center>
        </NativeBaseProvider>
    )
}

//Shadows for something.
const styles = StyleSheet.create({
    inputShadows:{
        shadowOffset:{
            height:0,
            width:0
        },
        shadowRadius:28,
        shadowColor:"black",
        shadowOpacity:0.7
    }
});