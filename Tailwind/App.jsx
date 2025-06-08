import { StyleSheet, Text, View } from 'react-native';
import "./global.css";
import LoginPages from './pages/LoginPages';
import { NavigationContainer } from '@react-navigation/native';
import SingUpPages from './pages/SingUpPages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigation from './navigation/RootNavigation';

const stack = createNativeStackNavigator();

function App() {
  return (
    <RootNavigation/>

  )
}

export default App