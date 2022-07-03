import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

import { Style } from './Login.style';

import { accountLogin } from '../../common/api/auth.api';
import { loginUser } from '../../common/store/user/actions';

const Login = ({navigation, setLogin}) => {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    setLogin(true)
    dispatch(loginUser(username))
    // setLoading(true)
    // await accountLogin({username, password})
    // .then((response) => {
    //     dispatch(addItem(response.data.username, response.data.tagName, response.data.roles))
    //     setLoading(false)
    //     localStorage.setItem('tokens', response.data.token);
    //     console.log(response)
    //     setLogin(true)

    // }, (error) => {
    //     console.log(error);
    //     setLoading(false)
    //     setLogin(false)

    // });
}

  return (
    <SafeAreaView style={Style.mainDark}>
      <View>
        <TouchableOpacity style={Style.header} onPress={() => navigation.navigate({ name: 'Hello' })}>
          <Image
            style={Style.image}
            source={require("./image/Vector.png")}
          />
        </TouchableOpacity>
        <Text style={Style.title}>Login</Text>
        <TextInput
          style={Style.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
        />
        <TextInput
          style={Style.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
        />
        <TouchableOpacity>
          <Text style={Style.text} onPress={() => navigation.navigate({ name: 'ForgotPassword' })}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={Style.text}>Don’t have an account? <Text style={{color: "#2E9C3E"}} onPress={() => navigation.navigate({ name: 'SignUp' })}>Sign Up</Text></Text>
        <TouchableOpacity style={Style.button} onPress={handleLogin}>
          <Text style={Style.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
