import React, { useState, useEffect, useRef } from 'react'
import { MaterialIcons, Entypo, AntDesign } from "@expo/vector-icons";
import ImagePicker from "../utils/ImagePicker"
import gdriverService from "../classes/ClassGDrive"
import { useSelector } from "react-redux";
import { allFilesTypeNames } from "../utils/ConstFilesTypeNames"
import CompoLoadingView from "../components/CompoApiLoadingView";
import {
    Stack,
    Text,
    HStack,
    Image,
    Box,
    AspectRatio,
    Heading,
    Icon,
    Badge,
    VStack,
    View,
    ScrollView,
    Button,
    Divider
} from "native-base";

const ScreenProfile = ({ setIsMounted }) => {

    const [imgProfile, setImgProfile] = useState(null);
    const [imgBackProfile, setImgBackProfile] = useState(null);

    const user = useSelector(state => state.reducerLogin);

    useEffect(() => {
        setIsMounted(false);

        const imgprofID = user.payload.fileidimgprofile;
        const imgbackprofID = user.payload.fileidimgbackprofile;

        if(imgprofID !== null){
            gdriverService.getFile(imgprofID).then(file => {
                setImgProfile(file.data);
                setIsMounted(true);
            }).catch(error => {console.log(error);});
        }else{setIsMounted(true);}

        setIsMounted(false);
        if(imgbackprofID !== null){
            gdriverService.getFile(imgbackprofID).then(file => {
                setImgBackProfile(file.data);
                setIsMounted(true);
                
            }).catch(error => {console.log(error);});
        }else{setIsMounted(true);}
        
    },[]);

    const data = ["React Native", "JavaScript", "C#", "Flutter", "Ionic", "DotNet", "MySQL", "Oracle", "SQL SERVER",
                  "Java", "Go", "Swift", "Android", "C/C++", "Pthon", "Django", "Ruby", "Ruby on Rails", "Kivy", "Rust",
                  "Delphi","Docker","Machine Learning", "CSS", "HTML", "TypeScript", "ReactJS", "Web Developer Full Stack ",
                  "Mobile Developer", "Front-End Developer", "Back-End Developer", "Desktop Developer", "IA Developer", "Data Science",
                  "Data Analysis"];

    return (
        <ScrollView>
            <Stack alignSelf="center">
                <Box {...nativeBaseProps.FIRST_BOX}>
                    <Box >
                        <Box>
                            <AspectRatio
                                borderBottomWidth={3}
                                borderColor={"coolGray.300"}
                                borderBottomRadius={5} 
                                {...nativeBaseProps.ASPECT_RATIO}>
                                <Image 
                                    source={imgBackProfile === null?{uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"}:
                                    {uri: imgBackProfile}}
                                    key={imgBackProfile} 
                                    alt="Background"    
                                />
                            </AspectRatio>
                            <Image 
                                {...nativeBaseProps.IMG} 
                                source={imgProfile === null?require('../../assets/icon.png'):{uri:imgProfile}}
                                key={imgProfile} 
                            />
                            <Badge {...nativeBaseProps.PLUS_ICON_BADGE}
                                onTouchEnd={() =>{
                                    ImagePicker.imagePicker().then(imgCaptured =>{
                                        const filetypename = user.payload.idpeople+allFilesTypeNames.IMGPROF;
                                        const folderid = user.payload.folderid;

                                        gdriverService.sendFile(imgCaptured.base64,folderid,filetypename).then(result => {
                                            setImgProfile('data:image/png;base64,'+imgCaptured.base64);
                                        }).catch(error=>{
                                            console.log(error);
                                        });
                                    });
                                }}
                            >
                                <Icon {...nativeBaseProps.ICON_COLOR} as={<Entypo name={"plus"}/>} />
                            </Badge>
                            <Badge {...nativeBaseProps.BG_ICON_BADGE}
                                onTouchEnd={() =>{
                                    ImagePicker.imagePicker(true).then(imgCaptured =>{
                                        const filetypename = user.payload.idpeople+allFilesTypeNames.IMGBACKPROF;
                                        const folderid = user.payload.folderid;

                                        gdriverService.sendFile(imgCaptured.base64,folderid,filetypename).then(result => {
                                            setImgBackProfile('data:image/png;base64,'+imgCaptured.base64);
                                        }).catch(error=>{
                                            console.log(error);
                                        });
                                    });
                                }}
                            >
                                <Icon {...nativeBaseProps.ICON_COLOR} as={<MaterialIcons name={"add-a-photo"}/>} />
                            </Badge>
                        </Box>
                        <Icon {...nativeBaseProps.EDIT_ICON} as={<AntDesign name={"edit"}/>} />        
                        <Stack {...nativeBaseProps.STACK_INFO}>
                            <Stack>
                                <Heading {...nativeBaseProps.NAME}>
                                    IAGO SILVA VIEIRA
                                </Heading>
                                <Text {...nativeBaseProps.SCHOOL_INFO}>
                                    COMPUTER SCIENCE | FACULDADE PITAGORAS
                                </Text>
                            </Stack>
                            <Stack space={1}>
                                <Text {...nativeBaseProps.ADDRESS_CONTACT}>
                                        London, England, United Kingdom
                                </Text>
                                <Text {...nativeBaseProps.ADDRESS_CONTACT}>
                                        vieiras.igs@gmail.com
                                </Text>
                                <Text {...nativeBaseProps.ADDRESS_CONTACT}>
                                        07497454528
                                </Text>
                            </Stack>
                            <Divider {...nativeBaseProps.DIVIDERS} />
                            <VStack>
                                <Text {...nativeBaseProps.TITLE_TEXT}>
                                        PROFESSION:
                                </Text>
                                <Text {...nativeBaseProps.INFO_TEXT}>
                                        REACT NATIVE DEVELOPER
                                </Text>
                            </VStack>
                            <VStack>
                                <Text {...nativeBaseProps.TITLE_TEXT}>
                                        ABOUT YOU:
                                </Text>
                                <Text {...nativeBaseProps.INFO_TEXT}>
                                        Bengaluru (also called Bangalore) is the center of India's high-tech
                                        industry. The city is also known for its parks and nightlife.
                                </Text>
                            </VStack>
                            <VStack>
                                <Text {...nativeBaseProps.TITLE_TEXT}>
                                        MY GOAL:
                                </Text>
                                <Text {...nativeBaseProps.INFO_TEXT}>
                                        Bengaluru (also called Bangalore) is the center of India's high-tech
                                        industry. The city is also known for its parks and nightlife.
                                </Text>
                            </VStack>
                            <HStack>
                                <HStack>
                                    <Text {...nativeBaseProps.EDIT_DATE_TEXT}>
                                        LAST EDIT: 15/10/1991
                                    </Text>
                                </HStack>
                            </HStack>
                        </Stack>
                    </Box>
                </Box>
                    <Box {...nativeBaseProps.FIRST_BOX}>
                        <Icon {...nativeBaseProps.EDIT_ICON} as={<AntDesign name={"edit"}/>} />
                        <Heading {...nativeBaseProps.INTERESETED}>
                                    INTERESTING TAGS:
                         </Heading>
                         <Divider {...nativeBaseProps.DIVIDERS} />
                        <View
                            flexDirection={"row"}
                            flexGrow={10}
                            maxW={"100%"}
                            alignItems={"flex-start"}
                            flexWrap={"wrap"}
                            mb={4}
                            mt={2}
                        >
                            {data.map((item,index) => {
                                return(
                                    <Button
                                        rightIcon={<Icon size={5} as={<AntDesign name={"check"}/>} />}
                                        borderColor={"coolGray.600"}
                                        _text={{fontWeight:"bold"}} 
                                        borderWidth="2"
                                        backgroundColor={"rgb(0,185,243)"}
                                        color={"white"}
                                        borderRadius={"20"}
                                        p={1}
                                        marginTop={2} 
                                        flexDirection={"column"} 
                                        marginLeft={1} 
                                        key={index}>
                                        {item}
                                    </Button>
                                )
                            })}
                        </View>
                    </Box>
            </Stack>
        </ScrollView>
    )
};

export default function Profile() {
    const [isMounted, setIsMounted] = useState(false);

    return (
      <View>
        <ScreenProfile setIsMounted={ setIsMounted }/>
        {!isMounted && <CompoLoadingView />}
      </View>
    );
  }
const nativeBaseProps = {
    DIVIDERS:{
        alignSelf:"center", 
        bgColor:"coolGray.300", 
        thickness:"3",
        orientation:"horizontal",
        w:"98%"
      },
    TAGS:{
        
    },
    EDIT_DATE_TEXT:{
        color:"rgb(0,185,243)", 
        fontWeight:"700"
    },
    TITLE_TEXT:{
        fontWeight:"700"
    },
    INFO_TEXT:{
        fontWeight:"400", 
        left:2
    },
    FIRST_BOX:{
        mb:2,
        alignItems:"center", 
        backgroundColor:"white", 
        rounded:"lg", 
        overflow:"hidden", 
        borderColor:"coolGray.300", 
        borderWidth:"2",
    },
    ASPECT_RATIO:{
        w:"100%", 
        ratio:22/9
    },
    STACK_INFO:{
        p:"4", 
        space:3
    },
    NAME:{
        size:"lg", 
        ml:"-1"
    },
    INTERESETED:{
        size:"lg", 
        marginTop:-6, marginBottom:2, marginLeft:2,
        alignSelf:"flex-start"
    },
    SCHOOL_INFO:{
        fontSize:"md", 
        color:"gray.600", 
        fontWeight:"500", 
        ml:"-0.5", 
        mt:"-1",
        numberOfLines:1
    },
    ADDRESS_CONTACT:{
        fontSize:"sm", 
        color:"gray.500",
        ml:"-0.5", 
        mt:"-1"
    },
    ICON_COLOR:{
        color:"rgb(0,185,243)", 
    },
    EDIT_ICON:{
        alignSelf:"flex-end",
        marginTop:5, 
        right:10, 
        color:"rgb(0,185,243)" 
    },
    BG_ICON_BADGE:{
        size:10, 
        shadow:'6',
        backgroundColor:"white",
        position:"absolute", 
        rounded:"full", 
        right:10, 
        top:10,
        zIndex:1,
        variant:"solid",
    },
    PLUS_ICON_BADGE:{
        size:8, 
        shadow:'6', 
        alignItems:"center", 
        justifyContent:"center", 
        backgroundColor:"white", 
        position:"absolute", 
        rounded:"full", 
        bottom:-45, 
        left:135, 
        zIndex:2, 
        variant:"solid"
    },
    IMG: {
        borderColor:"white",
        borderWidth:3,  
        marginTop: 0,
        alignSelf: "center",
        marginBottom: 0,
        size: 150,
        alt: "LOGO",
        borderRadius: 100,
        position:"absolute",
        left:"5", 
        bottom:"-60", 
        px:"3",
        py:"1.5", 
        zIndex:1
    }
}