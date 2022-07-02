import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

const SignUp = ({navigation}) => {

  return (
    <SafeAreaView style={styles.mainDark}>
      <View>
        <TouchableOpacity style={styles.header} onPress={() => navigation.navigate({ name: 'Hello' })}>
          <Image
            style={styles.image}
            source={require("./image/Vector.png")}
          />
        </TouchableOpacity>
        <Text style={styles.title}>SignUp</Text>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Username"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
        />
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Password"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
        />
        <Text style={styles.text}>Forgot Password?</Text>
      </View>

      <View>
        <Text style={styles.text}>Have any account? <Text style={{color: "#2E9C3E"}} onPress={() => navigation.navigate({ name: 'Login' })}>Sign In</Text></Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
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

export default SignUp;
