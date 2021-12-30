import React from 'react';
import { Center, NativeBaseProvider } from "native-base";
import ListPeople from "../components/compoListPeople";

const ScreenListPeople = () => {
    return (
        <NativeBaseProvider>
            <Center flex={1}>
                <ListPeople />
            </Center>
        </NativeBaseProvider>
    );
};

export default ScreenListPeople;