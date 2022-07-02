import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

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
    <SafeAreaView style={styles.mainDark}>
      <View>
        <TouchableOpacity style={styles.header} onPress={() => navigation.navigate({ name: 'Hello' })}>
          <Image
            style={styles.image}
            source={require("./image/Vector.png")}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
        />
        <Text style={styles.text}>Forgot Password?</Text>
      </View>

      <View>
        <Text style={styles.text}>Don’t have an account? <Text style={{color: "#2E9C3E"}} onPress={() => navigation.navigate({ name: 'SignUp' })}>Sign Up</Text></Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainDark: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-between",
    backgroundColor: "#000",
    padding: 24
  },
  header: {
    width: "100%",

  },
  image: {
    width: 10,
    height: 20,
  },
  title: {
    fontFamily: 'SF UI Display',
    fontSize: 30,
    color: "#fff",
    marginTop: 47,
    marginBottom: 40,
  },
  input: {
    width: "100%",
    padding: 15,
    borderColor: "#424246",
    borderWidth: 1,
    borderRadius: 10,
    color: "#2E9C3E",
    marginTop: 12,
  },
  text: {
    width: "100%",
    color: "rgba(255, 255, 255, 0.5)",
    fontFamily: 'SF UI Display',
    fontSize: 15,
    textAlign: "center",
    marginTop: 30,
  },
  button: {
    width: "100%",
    padding: 16,
    display: 'flex',
    justifyContent: "center",
    backgroundColor: "#2E9C3E",
    borderRadius: 10,
    marginTop: 51,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: 'SF UI Display',
    fontSize: 15,
  },
});

export default Login;
