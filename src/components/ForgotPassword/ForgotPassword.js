import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

import { Style } from './ForgotPassword.style';

const ForgotPassword = ({navigation}) => {

    return(
        <SafeAreaView style={Style.mainDark}>
            <View>
                <TouchableOpacity 
                    style={Style.header} 
                    onPress={() => navigation.navigate({ name: 'Login' })}
                >
                <Image
                    style={Style.image}
                    source={require("./image/Vector.png")}
                />
                </TouchableOpacity>
                <Text style={Style.title}>
                    Forgot Password?
                </Text>
                <Text style={Style.text}>
                    Enter 12 seed words to recover your account.
                </Text>
                <TextInput
                    style={Style.input}
                    // onChangeText={setUsername}
                    // value={username}
                    // placeholder="Username"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                />
            </View>
            <TouchableOpacity style={Style.button}>
                <Text style={Style.buttonText}>Send</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ForgotPassword;