import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import { Style } from './Hello.style';

const Hello = ({navigation}) => {

    return (
        <SafeAreaView style={Style.main}>
            <Image
                style={Style.image}
                source={require("./image/Frame.png")}
            />
            <View style={Style.textWrapper}>
                <Text style={Style.text}>
                    <Text style={{color: "#2E9C3E"}}>Hey!</Text> You already have an account with Cefion?
                </Text>
            </View>
            <TouchableOpacity style={Style.buttonLogin} onPress={() => navigation.navigate({ name: 'Login' })}>
                <Text style={Style.buttonLoginText}>login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.buttonSingup} onPress={() => navigation.navigate({ name: 'Presentation' })}>
                <Text style={Style.buttonSingupText}>Sign Up</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Hello;