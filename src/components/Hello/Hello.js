import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { STYLE } from '../../../styles';

const Hello = ({setShowHello, setShowLogin, setShowPresentation}) => {

    const openLogin = () => {
        setShowHello(false)
        setShowLogin(true)
    }

    const openPresentation = () => {
        setShowHello(false)
        setShowPresentation(true)
    }

  return (
    <SafeAreaView style={styles.main}>
        <Image
            style={styles.image}
            source={require("./image/Frame.png")}
        />
        <View style={styles.textWrapper}>
            <Text style={styles.text}>
                <Text style={{color: "#2E9C3E"}}>Hey!</Text> You already have an account with Cefion?
            </Text>
        </View>
        <TouchableOpacity style={styles.buttonLogin} onPress={openLogin}>
            <Text style={styles.buttonLoginText}>login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSingup} onPress={openPresentation}>
            <Text style={styles.buttonSingupText}>Sign Up</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "flex-end",
        backgroundColor: "#000",
        padding: 24
    },
    image: {
        width: "47.46%",
        height: "29.31%",
    },
    textWrapper: {
        width: "87.2%",
        height: "auto",
        marginTop: 93,

    },
    text: {
        textAlign: "center",
        color: "#fff",
        fontFamily: 'SF UI Display',
        fontSize: 30,
    },
    buttonLogin: {
        width: "100%",
        padding: 16,
        display: 'flex',
        justifyContent: "center",
        backgroundColor: "#2E9C3E",
        borderRadius: 10,
        marginTop: 42,
    },
    buttonLoginText: {
        color: "#fff",
        textAlign: "center",
        fontFamily: 'SF UI Display',
        fontSize: 15,
        
    },
    buttonSingup: {
        width: "100%",
        padding: 16,
        display: 'flex',
        justifyContent: "center",
        borderColor: "#2E9C3E",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 12,

    },
    buttonSingupText: {
        color: "#2E9C3E",
        textAlign: "center",
        fontFamily: 'SF UI Display',
        fontSize: 15,
    }

});

export default Hello;