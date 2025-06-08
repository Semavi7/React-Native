import { StyleSheet, Text, View } from 'react-native';
import { Textdeneme } from '../components/Textdeneme';
import Textinput from '../components/Textinput';

function LoginPages({navigation}) {
    return (
        <View className="flex-1 items-center justify-center">
            <Textinput/>
            <Textdeneme navigation={navigation}/>
        </View>
    )
}

export default LoginPages