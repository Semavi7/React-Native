import { StyleSheet, Text, View, TextInput } from 'react-native';
function Textinputcomponent({title, isSecureText, handlePlaceHolder, handleOnChangeText}) {
  return (
    <View className="items-center justify-center">
      <Text className="text-red-500 text-lg font-bold mt-4">{title}</Text>
      <TextInput secureTextEntry={isSecureText} placeholder={handlePlaceHolder} onChangeText={handleOnChangeText} className="border border-black w-80 h-10 mt-4 p-2 rounded-md" />
    </View>
  )
}

export default Textinputcomponent