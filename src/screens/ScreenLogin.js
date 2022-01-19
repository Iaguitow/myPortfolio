import React, { useState, useEffect } from "react";
import { Animated } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import FootTabLogin from "../components/FootTabLogin";
import dbLogin from "../classes/ClassDBLogin";
import dbPeople from "../classes/ClassDBPeople";
import SocialMedia from "../classes/ClassSocialMedia";
import Toast from "../components/CompoToast";
import GeneralUtils from "../utils/GeneralUtils";

import { 
    Input, 
    Icon, 
    Stack, 
    Button, 
    Text, 
    NativeBaseProvider, 
    HStack, 
    KeyboardAvoidingView, 
    Center, 
    Image 
} from "native-base";

export default function Login({ navigation }){

    /////////////VARIABLE TO HANDLE THE EMAIL AND PASSWORD TO DB/////////////
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [email, setEmail] = useState("");

    const [invalidPassword, setInvalidPassword] = useState(false);
    const [password, setPassword] = useState("");

    /////////////VARIABLE TO HANDLE THE PASSWORD VISUALIZATION /////////////
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    /////////////VARIABLE TO HANDLE THE ANIMATIONS /////////////
    const [heightInput,] = useState(new Animated.Value(1));
    const [heightInput2,] = useState(new Animated.Value(1));
    const [offset,] = useState(new Animated.ValueXY({x:0,y:80}));
    const [opacity] = useState(new Animated.Value(0));
    
    /////////////VARIABLE TO HANDLE THE STYLE CHANGING ON SOCIAL MEDIA BUTTONS /////////////
    const [isSignUping,setIsSignUping] = useState(false);

    /////////////VARIABLE TO HANDLE THE STYLE CHANGING ON LOGIN AND PASSWORD INPUTS /////////////
    const [borderFocusWidth, setBorderFocusWidth] = useState(1);
    const [borderFocusWidth2, setBorderFocusWidth2] = useState(1);

    /////////////VARIABLE TO HANDLE THE LOGIN BUTTON STATUS /////////////
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
        <NativeBaseProvider>
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
                                    isInvalid={invalidEmail}
                                    onChangeText={(email) => {
                                        setEmail(email);
                                    }}
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
                                    isInvalid={invalidPassword}
                                    onChangeText={(password) =>{
                                        setPassword(password);
                                    }}
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
                                    isLoading={isSignUping}                                  
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
                                    onPress={() => {
                                        setIsSignUping(true); 
                                        SocialMedia.GoogleSignin().then(googleResponse =>{
                                            if(googleResponse === "cancel"){
                                                setIsSignUping(false);
                                                return;
                                            }
                                            var dateToday = new Date();
                                            dateToday = (dateToday.getFullYear()+"-"+("0"+(dateToday.getMonth()+1)).slice(-2)+"-"+("0"+dateToday.getDate()).slice(-2));
                                            const name = googleResponse.user.familyName+", "+googleResponse.user.givenName;
                                            const email = googleResponse.user.email;
                                            const phone = null;
                                            const password = GeneralUtils.generatePassword(10);                                                        
                                            const dateofBirth = dateToday;
                                            const dtactive = dateToday;
                                            const googleId = googleResponse.user.id;
                                            const googleAcessToken = googleResponse.accessToken;
                                            console.log(password);
                                            dbPeople.postRegisterPeople(name.toUpperCase(),email.toLowerCase(),phone,password,dateofBirth,dtactive,googleId).then((response) => {
                                                if(response === "User Already Exists"){
                                                    Toast.showToast("User Already Exists");
                                                    setIsSignUping(false);
                                                    return;
                                                 }
                                                Toast.showToast("Sucessfully Registered");
                                                dbLogin.postLogin(email.toLowerCase(),password.trim(), googleAcessToken).then(response =>{
                                                    setTimeout(()=>{
                                                        navigation.navigate("Drawer");
                                                        setIsSignUping(false);
                                                    },5000);                                            
                                                }).catch(erro =>{
                                                    alert(erro);
                                                    setIsSignUping(false);
                                                    return;
                                                });
                                            }).catch((error)=>{
                                                console.log(error);
                                                setIsSignUping(false);
                                            });
                                            /*
                                            if(typeof loginResponse === "string"){
                                                alert(googleResponse);
                                                if(loginResponse === "User Not Found!"){
                                                    navigation.navigate("Drawer");
                                                }
                                            }*/                                                
                                            
                                        }).catch((error) =>{
                                            alert(error);
                                            setIsSignUping(false);
                                        });
                                    }} 
                                    iconLeft 
                                    bgColor={"rgba(3,17,29,0.7)"} 
                                    shadow={9} w={{ base: "60%" }} 
                                    h={{ base: "100%" }}
                                >
                                    <HStack alignItems={"flex-end"} space={1} paddingRight={2}>
                                        <Icon
                                            color={"white"}
                                            as={<AntDesign name="googleplus" />}
                                            size={7}
                                            ml="2"
                                        />
                                        <Text 
                                            color={"white"} 
                                            fontWeight={"bold"}
                                            fontSize={18}
                                        >
                                            Google Sign Up
                                        </Text>
                                    </HStack>
                                </Button>
                            </HStack>

                            {/*/////////////////////////////////// BUTTON LOGIN /////////////////////////////////*/}
                            <Button
                                onPress={() => { 
                                    setIslogin(true);

                                    if(!!email.trim() && !!password.trim()){
                                        dbLogin.postLogin(email,password).then(response =>{
                                        if(typeof response === "string"){
                                            Toast.showToast(response);
                                            setIslogin(false);
                                            return;
                                        }
                                        setIslogin(false);
                                        navigation.navigate("Drawer");
                                    }).catch(err =>{
                                        setIslogin(false);
                                        console.log(err);
                                        return;
                                    });
                                    }
                                    else if (!email.trim()){
                                        setInvalidEmail(true);
                                        Toast.showToast("Invalid Input","Empty E-mail","You must fill the E-mail field. All fields must be filled without exception.");
                                    }else if (!password.trim()){
                                        setInvalidPassword(true);
                                        Toast.showToast("Invalid Input","Empty Password","You must fill the Password field. All fields must be filled without exception.");
                                    }
                                    setIslogin(false);
                                }}
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
                            >
                                Login...
                            </Button>
                        </Stack>
                    </Animated.View>
                </KeyboardAvoidingView>
            </LinearGradient>
            <FootTabLogin navigation = {navigation} />
        </NativeBaseProvider>
    )
}
