import { useState } from "react";
import { Text, TextInput, View, Image, Pressable, TouchableHighlight, Button, KeyboardAvoidingView, Platform } from "react-native"
import Textinputcomponent from "./Textinputcomponent";

export const InputField = ({ navigation, handlesetname, handleName }) => {
    const onpress = () => { console.log("click" + " " + handleName) }

    return (
        <View className="items-center justify-center">
            <Image className="w-96 h-96" source={require('../assets/images/lock_17707240.png')} />

            <Textinputcomponent
                title="Name"
                isSecureText={false}
                handlePlaceHolder="Enter Your Name"
                handleOnChangeText={handlesetname}
            />

            <Textinputcomponent
                title="Password"
                isSecureText={true}
                handlePlaceHolder="Enter Your password"
            />

            <TouchableHighlight onPress={onpress} className="mt-8 w-80 h-10 items-center justify-center rounded-md bg-blue-500">
                <Text className="color-white font-bold text-xl">Login</Text>
            </TouchableHighlight>

            <Pressable onPress={() =>
                navigation.navigate('SingUp')} className="mt-8 w-80 h-10 items-center justify-center rounded-md bg-blue-500 active:opacity-80">
                <Text className="color-white font-bold text-xl">SingUp</Text>
            </Pressable>

        </View>
    )
}