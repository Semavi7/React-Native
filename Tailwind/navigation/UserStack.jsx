import { View, Text } from 'react-native'
import React from 'react'
import { HomePages, ProfilePages } from '../pages/Index.jsx'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();

const UserStack = () => {
    return (
       <stack.Navigator screenOptions={{headerShown:false}}>
          <stack.Screen
            name="Home"
            component={HomePages}
          />
          <stack.Screen
            name="Profile"
            component={ProfilePages}
          />
        </stack.Navigator>
    )
}

export default UserStack