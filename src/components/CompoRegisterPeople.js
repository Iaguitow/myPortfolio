import React, { useState } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import GeneralUtils from "../utils/GeneralUtils"
import Toast from "./CompoToast"
import dbPeople from "../classes/ClassDBPeople"
import dbLogin from "../classes/ClassDBLogin"
import {
  KeyboardAvoidingView,
  Input,
  Icon,
  Stack,
  HStack,
  Button,
  Text,
  ScrollView
} from "native-base";

export default function CompoRegisterPeople({ navigation }) {

//////////////////////////// STATES FOR THE INPUTS //////////////////////////////
// FULL NAME //
  const [invalidName, setInvalidName] = useState(false);
  const [name, setName] = useState(""); 

// EMAIL //
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [email, setEmail] = useState("");

// PHONE //
  const [InvalidPhone, setInvalidPhone] = useState(false);
  const [phone,Setphone] = useState("");
// PASSOWRD 01 //
  const [InvalidPassword, setInvalidPassword] = useState(false);
  const [password1,SetPassword1] = useState("");

// PASSOWRD CONFIRMATION //
  const [InvalidPasswordConfirmation, setInValidPasswordConfirmation] = useState(false)
  const [passwordConfirmation, SetPasswordConfirmation] = useState("");

//////////////////////////// STATES AND FUNCTIONS TO DATEPICKER //////////////////////////////
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateToday, setDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date)
    hideDatePicker();
  };

//////////////////////////// STATES FOR THE ANIMATION //////////////////////////////  
  const [nameAnimation,] = useState(new Animated.Value(1));
  const [emailAnimation,] = useState(new Animated.Value(1));
  const [phoneAnimation,] = useState(new Animated.Value(1));
  const [passwordAnimation,] = useState(new Animated.Value(1));
  const [passwordAnimation2,] = useState(new Animated.Value(1));

//////////////////////////// STATE FOR THE REGISTERING CONTROL //////////////////////////////
  const [isRegistering, setisRegistering] = useState(false);

  //////////////////////////// STATES FOR THE PASSWORD CONTROL //////////////////////////////
  const [showPass, setShowPass] = useState(false);
  const handleClick = () => setShowPass(!showPass);

    return (
        <KeyboardAvoidingView
            flex={1}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: "transparent", marginTop: 20 }}>
                    <Stack space={6} w="100%" alignItems="center" flex={1}>

{/************************* FULL NAME INPUT *************************/}
                        <Animated.View style={{ transform: [{ scale: nameAnimation }] }}>
                            <Input
                                isInvalid={invalidName}
                                onChangeText={(text) =>{                                    
                                    setName(text);
                                }}
                                autoCompleteType='off'
                                maxLength={50}
                                onFocus={() => {
                                    Animated.timing(nameAnimation, {
                                        toValue: 1.1,
                                        duration: 300,
                                        useNativeDriver: true
                                    }).start();
                                }}
                                onEndEditing={() => {
                                    Animated.timing(nameAnimation, {
                                        toValue: 1,
                                        duration: 300,
                                        useNativeDriver: true
                                    }).start();
                                }}
                                w={{
                                    base: "90%",
                                }}
                                borderRadius={100}
                                borderColor={"rgb(0,185,243)"}
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
                                placeholder="Full Name"
                            />
                        </Animated.View>

{/************************* EMAIL INPUT *************************/}
                        <Animated.View style={{ transform: [{ scale: emailAnimation }] }}>
                            <Input
                                isInvalid={invalidEmail}
                                onChangeText={(text) =>{
                                    setEmail(text);
                                }}
                                autoCompleteType='off'
                                maxLength={50}
                                onFocus={() => {
                                    Animated.timing(emailAnimation, {
                                        toValue: 1.1,
                                        duration: 300,
                                        useNativeDriver: true
                                    }).start();
                                }}
                                onEndEditing={() => {
                                    Animated.timing(emailAnimation, {
                                        toValue: 1,
                                        duration: 300,
                                        useNativeDriver: true
                                    }).start();
                                }}
                                w={{
                                    base: "90%",
                                }}                                
                                autoCapitalize="none"
                                borderRadius={100}
                                borderColor={"rgb(0,185,243)"}
                                height={50}
                                fontSize={"md"}
                                InputLeftElement={
                                    <Icon
                                        color={"rgb(0,185,243)"}
                                        as={<MaterialIcons name="mail" />}
                                        size={6}
                                        ml="2"
                                    />
                                }
                                placeholderTextColor={"rgb(0,185,243)"}
                                placeholder="Email"
                            />
                        </Animated.View>

{/************************* PHONE INPUT *************************/}
                        <Animated.View style={{ transform: [{ scale: phoneAnimation }] }}>
                            <Input
                                isInvalid={InvalidPhone}
                                onChangeText={(text) => {                                    
                                    Setphone(text);
                                }}
                                keyboardType='numeric'
                                maxLength={11}
                                onFocus={() => {
                                    Animated.timing(phoneAnimation, {
                                        toValue: 1.1,
                                        duration: 300,
                                        useNativeDriver: true
                                    }).start();
                                }}
                                onEndEditing={() => {
                                    Animated.timing(phoneAnimation, {
                                        toValue: 1,
                                        duration: 300,
                                        useNativeDriver: true
                                    }).start();
                                }}
                                w={{
                                    base: "90%",
                                }}
                                type='1234567890'
                                borderRadius={100}
                                borderColor={"rgb(0,185,243)"}
                                height={50}
                                fontSize={"md"}
                                InputLeftElement={
                                    <Icon
                                        color={"rgb(0,185,243)"}
                                        as={<MaterialIcons name="phone" />}
                                        size={6}
                                        ml="2"
                                    />
                                }
                                placeholderTextColor={"rgb(0,185,243)"}
                                placeholder="Phone"
                            />
                        </Animated.View>

{/************************* PASSWORD INPUT *************************/}
                        <Animated.View style={{ transform: [{ scale: passwordAnimation }] }}>
                            <Input
                                isInvalid={InvalidPassword}
                                onChangeText={(text) => {
                                    SetPassword1(text);
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
                                autoCapitalize="none"
                                selectionColor={"black"}
                                color={"black"}
                                borderRadius={100}
                                borderColor={"rgb(0,185,243)"}
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
                                    <Button size="md" bg={"rgb(0,98,130)"} rounded="none" w="1/6" h="full" onPress={handleClick}>
                                        <Text color={"white"} fontWeight={"bold"} marginLeft={-2}> {showPass ? "Hide" : "Show"} </Text>
                                    </Button>
                                }
                                placeholderTextColor={"rgb(0,185,243)"}
                                placeholder="Password"
                            />
                        </Animated.View>

{/************************* PASSWORD CONFIRMATION INPUT *************************/}
                        <Animated.View style={{ transform: [{ scale: passwordAnimation2 }] }}>
                            <Input
                                isInvalid={InvalidPasswordConfirmation}
                                onChangeText={(text)=>{
                                    SetPasswordConfirmation(text);
                                }}
                                maxLength={25}
                                onFocus={() => {
                                    Animated.timing(passwordAnimation2, {
                                        toValue: 1.1,
                                        duration: 300,
                                        useNativeDriver: true
                                    }).start();
                                }}
                                onEndEditing={() => {
                                    Animated.timing(passwordAnimation2, {
                                        toValue: 1,
                                        duration: 300,
                                        useNativeDriver: true
                                    }).start();
                                }}
                                type={showPass ? "text" : "password"}
                                w={{
                                    base: "90%",
                                }}
                                autoCapitalize="none"
                                selectionColor={"black"}
                                color={"black"}
                                borderRadius={100}
                                borderColor={"rgb(0,185,243)"}
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
                                    <Button size="md" bg={"rgb(0,98,130)"} rounded="none" w="1/6" h="full" onPress={handleClick}>
                                        <Text color={"white"} fontWeight={"bold"} marginLeft={-2}> {showPass ? "Hide" : "Show"} </Text>
                                    </Button>
                                }
                                placeholderTextColor={"rgb(0,185,243)"}
                                placeholder="Confirm the Password"
                            />
                        </Animated.View>

{/************************* DATE OF BIRTH BUTTON *************************/}
                        <HStack space={2} alignItems={"center"}>
                            <Text style={styles.TextDateofBirth}>Date of Birth:</Text>
                            <Button onPress={showDatePicker} bg={"rgb(0,98,130)"} _text={{ fontWeight: "bold" }}>{dateToday.toString().substring(4, 15)}</Button>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                                locale="en_GB"
                            />
                        </HStack>

{/************************* REGISTER BUTTON *************************/}
                        <Button
                            onPress={() => {
                                setisRegistering(true); 
                                if(!!name.trim() && !!phone.trim() && (phone.length === 11) && !!password1.trim() && !!passwordConfirmation.trim()){

                                    const dateEveryday = new Date();
                                    const DOBformatted = (dateToday.getFullYear()+"-"+("0"+(dateToday.getMonth()+1)).slice(-2)+"-"+("0"+dateToday.getDate()).slice(-2));
                                    const dtactive =  (dateEveryday.getFullYear()+"-"+("0"+(dateEveryday.getMonth()+1)).slice(-2)+"-"+("0"+dateEveryday.getDate()).slice(-2));

                                    if(password1 !== passwordConfirmation){
                                        setInValidPasswordConfirmation(true);
                                        Toast.showToast("Invalid Input","Password Invalid!","The Password Confirmation do not match to the first Password field. Make sure that both password are the same.");
                                        setisRegistering(false);
                                        return;
                                    }
                                    if(!(GeneralUtils.validateEmail(email))) {
                                        setInvalidEmail(true);
                                        Toast.showToast("Invalid Input","Email Invalid!","Wrong Email, please check it. Probably you forgot to type a character or something.");
                                        setisRegistering(false);
                                        return;
                                    }
                                    if(dateToday.toString().substring(4, 15) === dateEveryday.toString().substring(4, 15)){
                                        setisRegistering(false);
                                        Toast.showToast("Invalid Input","Date of Birth Invalid!","Check your date of birth, it will not be available for anyone but is necessary.");
                                        return;
                                    }
                                    dbPeople.postRegisterPeople(name.toUpperCase(),email.toLowerCase(),phone,password1,DOBformatted,dtactive).then(response =>{
                                        
                                        if(response === "User Already Exists"){
                                            Toast.showToast("User Already Exists");
                                            setisRegistering(false);
                                            return;
                                        }
                                        Toast.showToast("Sucessfully Registered");
                                        dbLogin.postLogin(email.toLowerCase(),password1).then(response =>{                                            
                                            setisRegistering(false);
                                            navigation.navigate("Drawer");
                                        }).catch(erro =>{
                                            alert(erro);
                                            return;
                                        });
                                        
                                    }).catch(erro =>{
                                        setisRegistering(false);
                                        return;
                                    });
                                }else if(!name.trim()){ 
                                    setInvalidName(true);
                                    setisRegistering(false);
                                    Toast.showToast("Invalid Input","Empty Field","You must fill the Name field. All fields must be filled without exception.");
                                    return;
                                }else if(!phone.trim() || (phone.length !== 11)){
                                    setInvalidPhone(true);
                                    setisRegistering(false);
                                    Toast.showToast("Invalid Input","Empty Field or Incorrect Number","You must fill the Phone field. All fields must be filled without exception.");
                                    return;
                                }else if(!password1.trim()){
                                    setInvalidPassword(true);
                                    setisRegistering(false);
                                    Toast.showToast("Invalid Input","Empty Field","You must fill the Password field. All fields must be filled without exception.");
                                    return;
                                }else if(!passwordConfirmation.trim()){
                                    setInValidPasswordConfirmation(true);
                                    setisRegistering(false);
                                    Toast.showToast("Invalid Input","Empty Field","You must fill the Password Confirmation field. All fields must be filled without exception.");
                                    return;
                                }
                            }}
                            bgColor={"rgb(0,98,130)"}
                            marginTop={0}
                            alignSelf={"center"}
                            borderRadius={100}
                            borderColor={"white"}
                            w={{ base: "70%" }}
                            height={50}
                            isLoading={isRegistering}
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
                            Register
                        </Button>
                    </Stack>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    TextDateofBirth: {
      fontWeight: "bold",
      fontSize: 18,
      color: "rgb(0,185,243)"
    }
  });