import React from 'react'
import { MaterialIcons, Entypo, AntDesign } from "@expo/vector-icons";
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
    FlatList
} from "native-base";

const ScreenProfile = () => {
    return (
        <Stack space={2}>
            <Box {...nativeBaseProps.FIRST_BOX}>
                <Box >
                    <Box>
                        <AspectRatio {...nativeBaseProps.ASPECT_RATIO}>
                            <Image source={{
                                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                            }} alt="Background" />
                        </AspectRatio>
                        <Image {...nativeBaseProps.IMG} source={require('../../assets/icon.png')} />
                        <Badge {...nativeBaseProps.PLUS_ICON_BADGE}>
                            <Icon {...nativeBaseProps.ICON_COLOR} as={<Entypo name={"plus"}/>} />
                        </Badge>
                        <Badge {...nativeBaseProps.BG_ICON_BADGE}>
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
                <Text>
                    I HAVE PUT THE FLAT LIST HERE: FLEXDIRECTION: ROW
                </Text>
            </Box>
        </Stack>
    )
};

const nativeBaseProps = {
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
        alignItems:"center", 
        backgroundColor:"white", 
        rounded:"lg", 
        overflow:"hidden", 
        borderColor:"coolGray.200", 
        borderWidth:"1"
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
    SCHOOL_INFO:{
        fontSize:"md", 
        color:"gray.600", 
        fontWeight:"500", 
        ml:"-0.5", 
        mt:"-1"
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
export default ScreenProfile;