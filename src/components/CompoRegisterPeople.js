import React, { useState, useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import GeneralUtils from "../utils/GeneralUtils"
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

export default function CompoRegisterPeople() {

//////////////////////////// STATES FOR THE INPUTS //////////////////////////////
// FULL NAME //
  const [name, setName] = useState("");
  const nameRef = useRef("");

// EMAIL //
  const [email, setEmail] = useState("");
  const [emailValidStyle, setIvalidEmailStyle] = useState(false);
  const emailRef = useRef("");

// PHONE //
  const [phone,Setphone] = useState(undefined);
  const phoneRef = useRef(undefined);

// PASSOWRD 01 //
  const [password1,SetPassword1] = useState("");
  const password1Ref = useRef("");

// PASSOWRD CONFIRMATION //
  const [passwordConfirmation, SetPasswordConfirmation] = useState("");
  const passwordConfirmationRef = useRef("");

//////////////////////////// STATES FOR THE ANIMATION //////////////////////////////  
  const [nameAnimation,] = useState(new Animated.Value(1));
  const [emailAnimation,] = useState(new Animated.Value(1));
  const [phoneAnimation,] = useState(new Animated.Value(1));
  const [passwordAnimation,] = useState(new Animated.Value(1));
  const [passwordAnimation2,] = useState(new Animated.Value(1));

//////////////////////////// STATE FOR THE REGISTERING CONTROL //////////////////////////////
  const [isRegistering, setisRegistering] = useState(false);

  //////////////////////////// STATES FOR THE PASSWORD CONTROL //////////////////////////////
  const [showPass, setShowPass] = useState(false)
  const handleClick = () => setShowPass(!showPass)

//////////////////////////// STATES AND FUNCTIONS TO DATEPICKER //////////////////////////////
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateToday, setDate] = useState(new Date(1598051730000));

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
                                onChangeText={(text) =>{
                                    nameRef.current.Value = text;
                                }}
                                ref={nameRef}
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
                                    setName(nameRef.current.Value);
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
                                ref={emailRef}
                                onChangeText={(text) =>{
                                    emailRef.current.Value = text;
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
                                    setEmail(emailRef.current.Value);
                                    Animated.timing(emailAnimation, {
                                        toValue: 1,
                                        duration: 300,
                                        useNativeDriver: true
                                    }).start();
                                }}
                                w={{
                                    base: "90%",
                                }}
                                isInvalid={emailValidStyle}
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
                                ref={phoneRef}
                                onChangeText={(text) => {
                                    phoneRef.current.Value = text;
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
                                    Setphone(phoneRef.current.Value);
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
                                ref={password1Ref}
                                onChangeText={(text) => {
                                    password1Ref.current.Value = text;
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
                                    SetPassword1(password1Ref.current.Value);
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
                                ref={passwordConfirmationRef}
                                onChangeText={(text)=>{
                                    passwordConfirmationRef.current.Value = text;
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
                                    SetPasswordConfirmation(passwordConfirmationRef.current.Value);
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

                                // TETE IMPLEMENTATION // 
                                if(0 === 0){
                                    console.log("Password2:"+ passwordConfirmation);
                                    return;
                                }
                                if (!(GeneralUtils.validateEmail(email))) {
                                    setIvalidEmailStyle(true);
                                    console.log("Wrong E-mail");
                                    return;
                                };
                                console.log("its all right");
                                // implementation to the database.
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