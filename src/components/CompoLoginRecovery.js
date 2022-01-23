import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {StyleSheet, Animated} from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";
import Toast from "../components/CompoToast";
import GeneralUtils from "../utils/GeneralUtils";
import dbLogin from "../classes/ClassDBLogin";
import {
    KeyboardAvoidingView,
    Input,
    Icon,
    Stack,
    Button,
    Text,
    ScrollView,
    View
  } from "native-base";

export default function App() {

//STATES TO HANDLE THE EMAIL
const [emailAnimation,] = useState(new Animated.Value(1));
const [email,setEmail] = useState("");
const [invalidEmail,setInvalidEmail] = useState(false);
const [isEmailDisabled, setIsEmailDisabled] = useState(false);

//STATE TO HANDLE THE CODE VERIFICATION
const [codeAnimation,] = useState(new Animated.Value(1));
const [code,setCode] = useState(0);
const [invalidCode, setInvalidCode] = useState(false);
const [isCodeInputDisabled, setIsCodeInputDisabled] = useState(true);

//STATE TO HANDLE PASSWORD 1
const [passwordAnimation] = useState(new Animated.Value(1));
const [password1, setPassword1] = useState("");
const [invalidPassword1, setInvalidPassword1] = useState(false);
const [isPasswordInputDisabled, setIsPasswordInputDisabled] = useState(true);

//STATE TO HANDLE PASSWORD 2
const [passwordConfirmationAnimation] = useState(new Animated.Value(1));
const [passwordConfirmation, setPasswordConfirmation] = useState("");
const [invalidPasswordConfirmation, setInvalidPasswordConfirmation] = useState(false);
const [isPasswordConfirmationInputDisabled, setIsPasswordConfirmationInputDisabled] = useState(true);

//STATE TO HANDLE THE SEND CODE BUTTON DESIGN WHEN PRESSED IT
const [isSendingCode, setIsSendingCode] = useState(false);
const [isSendCodeDisabled, setIsSendCodeDisabled] = useState(true);

//STATE TO HANDLE THE SEND PASSWORD BUTTON ANIMATION WHEN PRESSED IT
const [isResetingPassword,setIsResetingPassword] = useState(false);
const [isResetButtonDisabled, setIsResetButtonDisabled] = useState(true);

//STATES FOR THE PASSWORD CONTROL
  const [showPass, setShowPass] = useState(false);
  const handleClick = () => setShowPass(!showPass);

  return (
    <KeyboardAvoidingView flex={1} 
        behavior={Platform.OS === 'ios'? 'padding': "height"}
    >
        <ScrollView>
            <View style={{flex:1, marginTop:20}}>
                
                <Stack space={6} w="100%" alignItems={"center"} flex={1}>

{/***********************EMAIL INPUT*********************/}
                <Animated.View style={{ transform:[{scale:emailAnimation}] }}>
                            <Input                         
                                onChangeText={(text) =>{
                                    setEmail(text);
                                }}
                                onFocus={() => {
                                    Animated.timing(emailAnimation,{
                                        toValue: 1.1,
                                        duration: 300,
                                        useNativeDriver: true
                                    }).start();
                                }}
                                onEndEditing={() => {
                                    Animated.timing(emailAnimation,{
                                        toValue:1,
                                        duration:300,
                                        useNativeDriver:true
                                    }).start();

                                    if((!email.trim()) || (!GeneralUtils.validateEmail(email))){
                                        Toast.showToast("Invalid Input","Email Invalid!","Wrong Email, please check it. Probably you forgot to type a character or something.");
                                        setIsSendCodeDisabled(true);
                                        setInvalidEmail(true);
                                        return;
                                    }
                                    // TRY PUT THE SET CODE INSIDE THE CODE SEND BUTTON AND JUST AFTER CLEAN IT FROM THE MEMORY.
                                    setIsSendCodeDisabled(false);
                                    setInvalidEmail(false);
                                }}
                                w={{
                                    base: "90%",
                                }}
                                isInvalid={invalidEmail}
                                autoCompleteType='off'
                                maxLength={50}
                                isDisabled={isEmailDisabled}                                
                                autoCapitalize="none"
                                borderRadius={100}
                                borderColor={isEmailDisabled?"rgba(0,185,243,0.2)":"rgb(0,185,243)"}
                                height={50}
                                fontSize={"md"}
                                InputLeftElement={
                                    <Icon
                                        color={"rgb(0,185,243)"}
                                        as={<MaterialIcons name="email" />}
                                        size={6}
                                        ml="2"
                                    />
                                }
                                placeholderTextColor={"rgb(0,185,243)"}
                                placeholder=" Type E-mail registered"
                            />
                        </Animated.View>

{/************************* CODE BUTTON *************************/}
                        <Button
                            onPress={() => {
                                setIsSendingCode(true);
                                if((!!email.trim()) && (GeneralUtils.validateEmail(email))){
                                    dbLogin.getLoginRecoveryCode(email.trim(),"LOGIN RECOVERY.","HERE IS YOUR RECOVERY CODE: ").then(response =>{
                                        if(typeof response === "string"){
                                            Toast.showToast(response);
                                            setIsSendingCode(false);
                                            return;
                                        }
                                        Toast.showToast("Recovery Code");
                                        setIsSendingCode(false);
                                        setIsEmailDisabled(true);
                                        setIsCodeInputDisabled(false);
                                        setIsSendCodeDisabled(true);

                                    }).catch(err =>{
                                        console.log(err);
                                        setIsSendingCode(false);
                                    });
                                    
                                }else{
                                    setIsSendingCode(false);
                                    setInvalidEmail(true);
                                    Toast.showToast("Invalid Input","Email Invalid!","Wrong Email, please check it. Probably you forgot to type a character or something.");
                                }
                            }}
                            isDisabled={isSendCodeDisabled}
                            bgColor={isSendCodeDisabled===true?"rgba(0,98,130,0.4)":"rgb(0,98,130)"}
                            marginTop={0}
                            alignSelf={"center"}
                            borderRadius={100}
                            borderColor={"white"}
                            w={{ base: "70%" }}
                            height={50}
                            isLoading={isSendingCode}
                            isLoadingText="Submitting"
                            variant="outline"
                            _loading={{
                                bg: "rgba(0,185,243,0.5)",
                                _text: { color: "rgb(0,185,243)", fontWeight: "bold", fontSize: "16" },
                                borderWidth: 1,
                            }}
                            _text={{
                                fontWeight: "bold",
                                fontSize: "16",
                                color: "white"
                            }}
                            _pressed={
                                {
                                    bgColor: "rgba(0,185,243,0.5)",
                                }
                            }
                        >
                            Send Code
                        </Button>

{/************************* CODE INPUT *************************/}
                        <Animated.View style={{ transform: [{ scale: codeAnimation }] }}>
                            <Input
                                onChangeText={(text) => {
                                    setCode(text);
                                }}
                                onFocus={() => {
                                    Animated.timing(codeAnimation, {
                                        toValue: 1.1,
                                        duration: 300,
                                        useNativeDriver: true
                                    }).start();
                                }}
                                onEndEditing={() => {
                                    Animated.timing(codeAnimation, {
                                        toValue: 1,
                                        duration: 300,
                                        useNativeDriver: true
                                    }).start();
                                    setIsPasswordInputDisabled(false);
                                    setIsPasswordConfirmationInputDisabled(false);
                                    setIsResetButtonDisabled(false);
                                }}
                                w={{
                                    base: "90%",
                                }}
                                isInvalid={invalidCode}
                                maxLength={25}
                                isDisabled={isCodeInputDisabled}
                                autoCapitalize="none"
                                selectionColor={"black"}
                                color={"black"}
                                borderRadius={100}
                                borderColor={isCodeInputDisabled?"rgba(0,185,243,0.2)":"rgb(0,185,243)"}
                                borderWidth={1}
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
                                placeholderTextColor={"rgb(0,185,243)"}
                                placeholder="Verification Code"
                            />
                        </Animated.View>

{/************************* PASSWORD INPUT *************************/}
                        <Animated.View style={{ transform: [{ scale: passwordAnimation }] }}>
                            <Input
                                isInvalid={invalidPassword1}
                                onChangeText={(text) => {
                                    setPassword1(text);
                                }}
                                maxLength={25}
                                onFocus={() => {
                                    Animated.timing(passwordAnimation, {
                                        toValue: 1.1,
                                        duration: 300,
                                        useNativeDriver: true
                                    }).start();
                                }}
                                onEndEditing={() => {
                                    Animated.timing(passwordAnimation, {
                                        toValue: 1,
                                        duration: 300,
                                        useNativeDriver: true
                                    }).start();
                                }}
                                type={showPass ? "text" : "password"}
                                w={{
                                    base: "90%",
                                }}
                                isDisabled={isPasswordInputDisabled}
                                autoCapitalize="none"
                                selectionColor={"black"}
                                color={"black"}
                                borderRadius={100}
                                borderColor={isPasswordInputDisabled?"rgba(0,185,243,0.2)":"rgb(0,185,243)"}
                                borderWidth={1}
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
                                    <Button size="md" bg={isPasswordInputDisabled?"rgba(0,98,130,0.2)":"rgb(0,98,130)"} rounded="none" w="1/6" h="full" onPress={handleClick}>
                                        <Text color={"white"} fontWeight={"bold"} marginLeft={-2}> {showPass ? "Hide" : "Show"} </Text>
                                    </Button>
                                }
                                placeholderTextColor={"rgb(0,185,243)"}
                                placeholder="Password"
                            />
                        </Animated.View>

{/************************* PASSWORD CONFIRMATION INPUT *************************/}
                        <Animated.View style={{ transform: [{ scale: passwordConfirmationAnimation }] }}>
                            <Input
                                onChangeText={(text) => {
                                    setPasswordConfirmation(text);
                                }}
                                onFocus={() => {
                                    Animated.timing(passwordConfirmationAnimation, {
                                        toValue: 1.1,
                                        duration: 300,
                                        useNativeDriver: true
                                    }).start();
                                }}
                                onEndEditing={() => {
                                    Animated.timing(passwordConfirmationAnimation, {
                                        toValue: 1,
                                        duration: 300,
                                        useNativeDriver: true
                                    }).start();
                                }}
                                type={showPass ? "text" : "password"}
                                w={{
                                    base: "90%",
                                }}
                                maxLength={25}
                                isInvalid={invalidPasswordConfirmation}
                                isDisabled={isPasswordConfirmationInputDisabled}
                                autoCapitalize="none"
                                selectionColor={"black"}
                                color={"black"}
                                borderRadius={100}
                                borderColor={isPasswordConfirmationInputDisabled?"rgba(0,185,243,0.2)":"rgb(0,185,243)"}
                                borderWidth={1}
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
                                    <Button size="md" bg={isPasswordConfirmationInputDisabled?"rgba(0,98,130,0.2)":"rgb(0,98,130)"} rounded="none" w="1/6" h="full" onPress={handleClick}>
                                        <Text color={"white"} fontWeight={"bold"} marginLeft={-2}> {showPass ? "Hide" : "Show"} </Text>
                                    </Button>
                                }
                                placeholderTextColor={"rgb(0,185,243)"}
                                placeholder="Password Confirmation"
                            />
                        </Animated.View>

{/************************* RESET BUTTON *************************/}
                        <Button
                            onPress={() => {        

                                setIsResetingPassword(true);
                                if(!!code.trim() && !!password1.trim() && !!passwordConfirmation.trim()){
                                    if(password1 !== passwordConfirmation){
                                        setIsResetingPassword(false);
                                        setInvalidPasswordConfirmation(true);
                                        Toast.showToast("Invalid Input","Password Invalid!","The Password Confirmation does not match to the first Password field. Make sure that both password are the same.");
                                    }
                                    dbLogin.postNewPassword(code,password1,email).then(response =>{
                                        if(typeof response === "string"){
                                            Toast.showToast(response);
                                            setIsResetingPassword(false);
                                            return;
                                        }
                                        Toast.showToast("Sucessfully Registered");

                                    }).catch(err =>{
                                        console.log(err);
                                        setIsResetingPassword(false);
                                    });
                                }else if(!code.trim()){
                                    Toast.showToast("Invalid Input", "Empty Code", "You must type a code, the recovery code was sent to your E-mail, please check this out.");
                                    setInvalidCode(true);
                                }else if(!password1.trim()){
                                    Toast.showToast("Invalid Input", "Empty Password Confirmation", "You must fill the Password field. All fields must be filled without exception.");
                                    setInvalidPassword1(true);
                                    
                                }else if(!passwordConfirmation.trim()){
                                    Toast.showToast("Invalid Input","Empty Password Confirmation","You must fill the Password Confirmation field. All fields must be filled without exception.");
                                    setInvalidPasswordConfirmation(true);
                                    
                                }
                                setIsResetingPassword(false);
                            }}
                            disabled={isResetButtonDisabled}
                            bgColor={isResetButtonDisabled?"rgba(0,98,130,0.4)":"rgb(0,98,130)"}
                            marginTop={0}
                            alignSelf={"center"}
                            borderRadius={100}
                            borderColor={"white"}
                            w={{ base: "70%" }}
                            height={50}
                            isLoading={isResetingPassword}
                            isLoadingText="Submitting"
                            variant="outline"
                            _loading={{
                                bg: "rgba(0,185,243,0.5)",
                                _text: { color: "rgb(0,185,243)", fontWeight: "bold", fontSize: "16" },
                                borderWidth: 1,
                            }}
                            _text={{
                                fontWeight: "bold",
                                fontSize: "16",
                                color: "white"
                            }}
                            _pressed={
                                {
                                    bgColor: "rgba(0,185,243,0.5)",
                                }
                            }
                        >
                            Reset Password
                        </Button>
                <StatusBar style="auto" />
                </Stack>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});