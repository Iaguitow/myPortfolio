import React, { useState } from 'react';
import { Center, NativeBaseProvider } from "native-base";
import ListPeople from "../components/compoList";

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