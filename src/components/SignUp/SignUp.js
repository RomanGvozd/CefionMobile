import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

import { Style } from './SingUp.style';

const SignUp = ({navigation}) => {

  return (
    <SafeAreaView style={Style.mainDark}>
      <View>
        <TouchableOpacity style={Style.header} onPress={() => navigation.navigate({ name: 'Hello' })}>
          <Image
            style={Style.image}
            source={require("./image/Vector.png")}
          />
        </TouchableOpacity>
        <Text style={Style.title}>SignUp</Text>
        <TextInput
          style={Style.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Username"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
        />
        <TextInput
          style={Style.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Password"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
        />
        <Text style={Style.text}>Forgot Password?</Text>
      </View>
      <View>
        <Text style={Style.text}>Have any account? <Text style={{color: "#2E9C3E"}} onPress={() => navigation.navigate({ name: 'Login' })}>Sign In</Text></Text>
        <TouchableOpacity style={Style.button}>
          <Text style={Style.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
