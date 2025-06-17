import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { InputField } from '../components';
import { useState } from 'react';

function LoginPages({ navigation }) {
    const [name, setName] = useState("")
    return (

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }} className="items-center justify-center bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-blue-700 via-red-500 to-red-900">
            <View className="flex-1 items-center justify-center">
                <View className="items-center justify-center">
                    <Text className="text-red-500 text-4xl font-bold mt-4 p-2">Welcome</Text>
                </View>
                <InputField handleName = {name} handlesetname = {setName} navigation={navigation} />
            </View>
        </KeyboardAvoidingView>

    )
}

export default LoginPages