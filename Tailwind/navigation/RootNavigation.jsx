import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import UserStack from './UserStack';

const isAuth = true



const RootNavigation = () => {
  return (

    
    <NavigationContainer>
        {
            !isAuth ? <AuthStack/> : <UserStack/>
        }
    </NavigationContainer>
  )
}

export default RootNavigation