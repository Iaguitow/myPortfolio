import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

export default function ApiLoading() {
  return (
    <View style={ [StyleSheet.absoluteFillObject,styles.container]}>
        <LottieView style={{width:200, height:200}} source={require("../../assets/clock-loading.json")} autoPlay loop/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.3)",
        zIndex: 1,
        flex: 1, 
    }
});