import React from "react";
import { useSelector } from "react-redux";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Style } from "./Message.style";

const Message = () => {
    const theme = useSelector((store) => store.theme.theme);

    return(
        <View style={theme === "dark" ? Style.mainDark : Style.mainLight}>
            <View style={theme === "dark" ? Style.headerDark : Style.headerLight}>
                <Text style={theme === "dark" ? Style.headerTitleDark : Style.headerTitleLight}>
                    Message
                </Text>
            </View>

        </View>
    )
}

export default Message;