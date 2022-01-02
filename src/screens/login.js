import React, { useState, useEffect } from "react"
import { Animated } from "react-native"
import { Input, Icon, Stack, Button, Text, NativeBaseProvider, HStack, KeyboardAvoidingView, Center, Image } from "native-base"
import { MaterialIcons, AntDesign } from "@expo/vector-icons"
import FootTabLogin from "../components/footTabLogin"
import { LinearGradient } from 'expo-linear-gradient'

export const Login = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const [heightInput,] = useState(new Animated.Value(1));
    const [heightInput2,] = useState(new Animated.Value(1));
    const [offset,] = useState(new Animated.ValueXY({x:0,y:80}));
    const [opacity] = useState(new Animated.Value(0));
    
    const [selectedSocialMedia,setSelectedSocialMedia] = useState(2);
    const [borderFocusWidth, setBorderFocusWidth] = useState(1);
    const [borderFocusWidth2, setBorderFocusWidth2] = useState(1);
    const [isLogin, setIslogin] = useState(false);

    useEffect(() => {
        Animated.parallel([
            Animated.spring(offset.y,{
                toValue:0,
                speed:4,
                bounciness:18,
                useNativeDriver: true
            }),
            Animated.timing(opacity,{
                toValue:1,
                duration: 400,
                useNativeDriver: true
            })
        ]).start();
    },[])

    return (
        <LinearGradient style={{ flex: 1 }} 
            colors={['#00b9f3','#061b21','#061b21']} 
            start={[1, 0]} end={[0, 3]} 
            locations={[0.7, 0.1, 0.2]}
        >
            <KeyboardAvoidingView
                bgColor={"transparent"}
                flex={1}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >{/*/////////////////////////////////// ANIMATION TO BOUNCE THE SCREEN WHEN IT LOADS /////////////////////////////////*/}
                <Animated.View flex={1} style={{
                    opacity: opacity,
                    transform:[{translateY:offset.y}]
                }}>
                    <Center flex={1} safeAreaTop>  </Center>
                    {/*/////////////////////////////////// LOGO IMAGE  /////////////////////////////////*/}
                    <Stack space={6} w="100%" alignItems="center" marginBottom={10}>
                        <Image
                            marginTop={0}
                            alignSelf={"center"}
                            marginBottom={0}
                            size={150}
                            alt="fallback text"
                            borderRadius={100}
                            source= {require('../../assets/icon.png')}
                        />
                        <Text color={"#00b9f3"} fontWeight={"bold"} fontSize={16}> Welcome to IOwl </Text>
                        {/*/////////////////////////////////// EMAIL INPUT /////////////////////////////////*/}
                        <Animated.View style={{ transform: [{ scale: heightInput }] }}>
                            <Input
                                onFocus={() => {
                                    setBorderFocusWidth(3);
                                    Animated.timing(
                                        heightInput, {
                                        toValue: 1.1,
                                        duration: 300,
                                        useNativeDriver: true
                                    }
                                    ).start();
                                }}
                                onEndEditing={() => {
                                    setBorderFocusWidth(1);
                                    Animated.timing(
                                        heightInput, {
                                        toValue: 1,
                                        duration: 300,
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
                                height={50}
                                fontSize={"md"}
                                InputLeftElement={
                                    <Icon
                                        color={"rgb(0,185,243)"}
                                        as={<MaterialIcons name="person" />}
                                        size={6}
                                        ml="2"
                                    />
                                }
                                placeholderTextColor={"rgb(0,185,243)"}
                                placeholder="Email"
                            />
                        </Animated.View>
                        {/*/////////////////////////////////// PASSWORD INPUT /////////////////////////////////*/}
                        <Animated.View style={{ transform: [{ scale: heightInput2 }] }}>
                            <Input
                                onFocus={() => {
                                    setBorderFocusWidth2(3);
                                    Animated.timing(
                                        heightInput2, {
                                        toValue: 1.1,
                                        duration: 300,
                                        useNativeDriver: true
                                    }
                                    ).start();
                                }}
                                onEndEditing={() => {
                                    setBorderFocusWidth2(1);
                                    Animated.timing(
                                        heightInput2, {
                                        toValue: 1,
                                        duration: 300,
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
                                height={50}
                                fontSize={"md"}
                                InputLeftElement={
                                    <Icon
                                        color={"rgb(0,185,243)"}
                                        as={<MaterialIcons name="lock" />}
                                        size={6}
                                        ml="2"
                                    />
                                }
                                InputRightElement={
                                    <Button size="md" bg={"rgb(0,185,243)"} rounded="none" w="1/6" h="full" onPress={handleClick}>
                                        <Text color={"white"} fontWeight={"bold"} marginLeft={-2}> {show ? "Hide" : "Show"} </Text>
                                    </Button>
                                }
                                placeholderTextColor={"rgb(0,185,243)"}
                                placeholder="Password"
                            />
                        </Animated.View>
                        <HStack space={1}>
                        {/*/////////////////////////////////// GOOGLE BUTTON /////////////////////////////////*/}
                            <Button
                                onPress={() => { 
                                    setSelectedSocialMedia(0);
                                    setTimeout(() =>{
                                        setSelectedSocialMedia(2);
                                    },250)
                                }} 
                                iconLeft 
                                bgColor={"rgba(3,17,29,0.7)"} 
                                shadow={9} w={{ base: "42%" }} 
                                h={{ base: "100%" }}
                            >
                                <HStack alignItems={"center"} space={1} paddingRight={2}>
                                    <Icon
                                        color={selectedSocialMedia===0?"rgb(0,185,243)":"white"}
                                        as={<AntDesign name="googleplus" />}
                                        size={7}
                                        ml="2"
                                    />
                                    <Text 
                                        color={selectedSocialMedia===0?"rgb(0,185,243)":"white"} 
                                        fontWeight={"bold"}
                                        fontSize={selectedSocialMedia===0?18:14}
                                    >
                                        Google Login
                                    </Text>
                                </HStack>
                            </Button>
                            {/*/////////////////////////////////// LINKEDIN BUTTON /////////////////////////////////*/}
                            <Button
                                onPress={() => { 
                                    setSelectedSocialMedia(1);
                                    setTimeout(() => {
                                        setSelectedSocialMedia(2);  
                                    },250);
                                }}
                                iconLeft 
                                bgColor={"rgba(3,17,29,0.7)"} 
                                w={{ base: "42%" }}
                                h={{ base: "100%" }}
                                >
                                <HStack alignItems={"center"} space={1} paddingRight={2}>
                                    <Icon
                                        color={selectedSocialMedia===1?"rgb(0,185,243)":"white"}
                                        as={<AntDesign name="linkedin-square" />}
                                        size={7}
                                        ml="2"
                                    />
                                    <Text 
                                        color={selectedSocialMedia===1?"rgb(0,185,243)":"white"} 
                                        fontWeight={"bold"}
                                        fontSize={selectedSocialMedia===1?18:14}
                                    >
                                        LinkedIn Login
                                    </Text>
                                </HStack>
                            </Button>
                        </HStack>
                        {/*/////////////////////////////////// BUTTONS LOGIN /////////////////////////////////*/}
                        <Button
                            marginTop={"10%"}
                            alignSelf={"center"}
                            borderRadius={100}
                            borderColor={"rgb(0,185,243)"}
                            borderWidth={2}
                            w={{ base: "70%" }}
                            height={50}
                            isLoading={isLogin}
                            isLoadingText="Submitting"
                            variant="outline"
                            _loading={{
                                bg: "rgba(0,185,243,0.5)",
                                _text: { color: "rgb(0,185,243)", fontWeight: "bold", fontSize: "16" },
                                borderColor: "rgb(0,185,243)",
                                borderWidth: 1,
                            }}
                            _text={{
                                fontWeight: "bold",
                                fontSize: "16"
                            }}
                            _pressed={
                                {
                                    bgColor: "rgba(0,185,243,0.5)",
                                    borderColor: "rgba(0,185,243,0.5)"
                                }
                            }
                            onPress={() => { setIslogin(true) }}
                        >
                            Login...
                        </Button>
                    </Stack>
                </Animated.View>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}

export default () => {
    return (
        <NativeBaseProvider>
            <Login />
            <FootTabLogin />
        </NativeBaseProvider>
    )
}