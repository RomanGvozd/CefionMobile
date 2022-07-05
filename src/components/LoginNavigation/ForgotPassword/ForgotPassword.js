import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import BackArrow from "../../Image/BackArrow.svg";

import { Style } from './ForgotPassword.style';

const ForgotPassword = ({navigation}) => {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    return(
        <SafeAreaView style={Style.mainDark}>
            <View>
                <TouchableOpacity 
                    style={Style.header} 
                    onPress={() => navigation.navigate({ name: 'Login' })}
                >
                    <BackArrow fill={theme === "dark" ? "#fff" : "#000"}/>
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