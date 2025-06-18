import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { InputField } from '../components';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

function LoginPages({ navigation }) {
    const [name, setName] = useState("")
    return (
        <LinearGradient  colors={['#3b82f6', '#6366f1', '#db2777']} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} style={{ flex: 1 }}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'height' : 'padding'} style={{ flex: 1 }} className="items-center justify-center " >
                <View className="flex-1 items-center justify-center">
                    <View className="items-center justify-center">
                        <Text className="text-red-500 text-4xl font-bold mt-4 p-2">Welcome</Text>
                    </View>
                    <InputField handleName={name} handlesetname={setName} navigation={navigation} />
                </View>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}

export default LoginPages