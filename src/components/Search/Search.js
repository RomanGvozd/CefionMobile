import React from "react";
import { useSelector } from "react-redux";

import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Style } from "./Search.style";

const Search = () => {
    const theme = useSelector((store) => store.theme.theme);

    return(
        <View style={theme === "dark" ? Style.mainDark : Style.mainLight}>
            <View style={theme === "dark" ? Style.headerDark : Style.headerLight}>
                <Text style={theme === "dark" ? Style.headerTitleDark : Style.headerTitleLight}>
                    Search
                </Text>
            </View>

        </View>
    )
}

export default Search;