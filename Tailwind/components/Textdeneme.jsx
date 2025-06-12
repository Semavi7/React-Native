import { useState } from "react";
import { Text, TextInput, View, Image, Pressable, TouchableHighlight, Button } from "react-native"

export const Textdeneme = ({ navigation }) => {
    const onpress = () => { console.log("click") }

    return (
        <View className="items-center justify-center">

            <Image className="w-96 h-96" source={require('../assets/images/lock_17707240.png')} />

            <Text className="text-red-500 text-lg font-bold mt-4">Name</Text>
            <TextInput className="border border-black w-80 h-10 mt-4 p-2 rounded-md" />

            <Text className="text-red-500 text-lg font-bold mt-4">Password</Text>
            <TextInput className="border border-black w-80 h-10 mt-4 p-2 rounded-md" />

            <TouchableHighlight onPress={onpress} className="mt-8 w-80 h-10 items-center justify-center rounded-md bg-blue-500">
                <Text className="color-white font-bold text-xl">Login</Text>
            </TouchableHighlight>

            <Pressable onPress={() =>
                navigation.navigate('SingUp')}  className="mt-8 w-80 h-10 items-center justify-center rounded-md bg-blue-500 active:opacity-80">
                <Text className="color-white font-bold text-xl">SingUp</Text>
            </Pressable>
        </View>

    )
}