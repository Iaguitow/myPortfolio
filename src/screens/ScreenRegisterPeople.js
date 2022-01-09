import React, {useState} from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { 
  NativeBaseProvider, 
  KeyboardAvoidingView,
  Input,
  Icon,
  Image,
  Stack,
  VStack,
  HStack,
  Divider,
  Button,
  Text
} from "native-base";

export default function App() {

  const [nameAnimation,] = useState(new Animated.Value(1));
  const [emailAnimation,] = useState(new Animated.Value(1));
  const [phoneAnimation,] = useState(new Animated.Value(1));
  const [passwordAnimation,] = useState(new Animated.Value(1));

  const [isRegistering, setisRegistering] = useState(false);
  const [showPass, setShowPass] = useState(false)
  const handleClick = () => setShowPass(!showPass)

  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [dateToday, setDate] = React.useState(new Date(1598051730000));

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
    ///////////////////////// HEADER AND LOGO /////////////////////////
    <NativeBaseProvider>
    <View style={{flexDirection:"column",flexGrow:1}} >
      <View style={styles.Header}>
        <LinearGradient style={{ flex: 1}} 
          colors={['#00b9f3','#061b21','#061b21']} 
          start={[1, 0]} end={[0, 3]} 
          locations={[0.7, 0.1, 0.2]}
        ><VStack>
          <Image
              marginTop={"12%"}
              alignSelf={"center"}
              size={150}
              alt="fallback text"
              borderRadius={100}
              source= {require('../../assets/icon.png')}
            />
            <HStack alignSelf={"flex-end"} space={2} marginRight={5}>
              <Text style={styles.TextRegister}>Register</Text>
              <Divider bgColor={"gray.300"} thickness="2" mx="1" orientation="vertical" />
              <Text style={styles.TextRegister}>Login</Text>
            </HStack>
          </VStack>
        </LinearGradient>
      </View>
      <KeyboardAvoidingView
        flex={1}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
      <View style={{flex: 1, backgroundColor:"transparent", marginTop:30}}>
          <Stack space={6} w="100%" alignItems="center" flex={1}>
          {/************************* FULL NAME INPUT *************************/}
            <Animated.View style={{ transform: [{ scale: nameAnimation }] }}>
              <Input
                onFocus={()=>{
                  Animated.timing(nameAnimation,{
                    toValue: 1.1,
                    duration: 300,
                    useNativeDriver: true
                  }).start();
                }}
                onEndEditing={() =>{
                  Animated.timing(nameAnimation,{
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
            <Animated.View style={{transform:[{scale:emailAnimation}]}}>
              <Input
                onFocus={()=>{
                  Animated.timing(emailAnimation,{
                    toValue: 1.1,
                    duration: 300,
                    useNativeDriver: true
                  }).start();
                }}
                onEndEditing={() =>{
                  Animated.timing(emailAnimation,{
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true
                  }).start();
                }}
                w={{
                    base: "90%",
                }}
                isInvalid={true}
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
            <Animated.View style={{transform:[{scale:phoneAnimation}]}}>
              <Input
                onFocus={()=>{
                  Animated.timing(phoneAnimation,{
                    toValue: 1.1,
                    duration: 300,
                    useNativeDriver: true
                  }).start();
                }}
                onEndEditing={() =>{
                  Animated.timing(phoneAnimation,{
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
            <Animated.View style={{transform:[{scale:passwordAnimation}]}}>
              <Input
                onFocus={()=>{
                  Animated.timing(passwordAnimation,{
                    toValue: 1.1,
                    duration: 300,
                    useNativeDriver: true
                  }).start();
                }}
                onEndEditing={() =>{
                  Animated.timing(passwordAnimation,{
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true
                  }).start();
                }}
                onChangeText={(password) =>{
                    
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
              <HStack space={2} alignItems={"center"}>
                <Text style={styles.TextDateofBirth}>Date of Birth:</Text>
                <Button onPress={showDatePicker} bg={"rgb(0,98,130)"} _text={{fontWeight:"bold"}}>{dateToday.toString().substring(4, 15)}</Button>
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
                    color:"white"
                }}
                _pressed={
                    {
                        bgColor: "rgba(0,185,243,0.5)",
                    }
                }
            >
                Register...
            </Button>
          </Stack>
        </View>
      </KeyboardAvoidingView>
      </View>
    </NativeBaseProvider> 
  );
}

const styles = StyleSheet.create({
  TextDateofBirth:{
    fontWeight: "bold",
    fontSize:18,
    color:"rgb(0,185,243)"
  },
  TextRegister:{
    fontWeight: "bold",
    fontSize:18,
    color:"rgb(0,185,243)"
  },
  Header: {
    flex: 0.5,
    backgroundColor: 'white',
    borderBottomLeftRadius: 100,
    width: "100%",
    overflow:"hidden"
  },
});