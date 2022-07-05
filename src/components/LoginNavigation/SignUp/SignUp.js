import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { SafeAreaView, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import BackArrow from "../../Image/BackArrow.svg";

import { Style } from './SingUp.style';

const SignUp = ({navigation}) => {

  const theme = useSelector((store) => store.theme.theme);
  const language = useSelector((store) => store.language.language);

  return (
    <SafeAreaView style={Style.mainDark}>
      <View>
        <TouchableOpacity style={Style.header} onPress={() => navigation.navigate({ name: 'Hello' })}>
          <BackArrow fill={theme === "dark" ? "#fff" : "#000"}/>
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
