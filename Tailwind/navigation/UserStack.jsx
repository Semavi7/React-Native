import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { HomePages, ProfilePages } from '../pages/Index.jsx'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'

const tab = createBottomTabNavigator()
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

const TAB_BAR_HEIGHT = Math.round(SCREEN_HEIGHT * 0.065);
const TAB_BAR_RADIUS = Math.round(TAB_BAR_HEIGHT / 2);

const UserStack = () => {
  return (
    <tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: [
        styles.tabBar
      ],
      tabBarItemStyle: { marginTop: 8 },
      tabBarIcon: ({ focused }) => {
        let iconName
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline'
        }
        else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline'
        }
        return <Ionicons name={iconName} size={24} color="black" />
      }
    })}>
      <tab.Screen name="Home" component={HomePages} />
      <tab.Screen name="Profile" component={ProfilePages} />
    </tab.Navigator>


  )

}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    marginRight: SCREEN_WIDTH * 0.05,
    marginLeft: SCREEN_WIDTH * 0.05,
    height: TAB_BAR_HEIGHT,
    width: SCREEN_WIDTH * 0.9,
    borderRadius: TAB_BAR_RADIUS,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    bottom: 20
  }
})



export default UserStack