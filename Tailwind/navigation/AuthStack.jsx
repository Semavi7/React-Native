import { View, Text } from 'react-native'
import React from 'react'
import { LoginPages, SingUpPages } from '../pages/Index.jsx'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen
        name="Login"
        component={LoginPages}
      />
      <stack.Screen
        name="SingUp"
        component={SingUpPages}
      />
    </stack.Navigator>
  )
}

export default AuthStack