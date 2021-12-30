import React from 'react';
import { Center, NativeBaseProvider } from "native-base";
import ListPeople from "../components/compoListPeople";

const home = () => {
    return (
        <NativeBaseProvider>
            <Center flex={1}>
                <ListPeople />
            </Center>
        </NativeBaseProvider>
    );
};

export default home;