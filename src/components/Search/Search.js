import React from "react";
import { useSelector } from "react-redux";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { content } from "./Search.config";

import NavFooter from "../NavFooter/NavFooter";

import { GlobalStyle } from '../../../global.style'
import { Style } from "./Search.style";

import SearchSvg from './image/Search.svg';

const Search = () => {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {
        Search,
    } = content[language]


    return(
        <>
        <View style={theme === "dark" ? GlobalStyle.mainDark : GlobalStyle.mainLight}>
            <View style={theme === "dark" ? Style.headerDark : Style.headerLight}>
                <Text style={theme === "dark" ? Style.headerTitleDark : Style.headerTitleLight}>
                    {Search}
                </Text>
            </View>

            
            <View style={{padding: 20}}>


                <View style={theme === "dark" ? Style.inputWrapperDark : Style.inputWrapperLight}>
                    <SearchSvg fill={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}/>
                    <TextInput
                        style={theme === "dark" ? Style.inputDark : Style.inputLight}
                        // onChangeText={onChangeNumber}
                        // value={number}
                        // placeholder={SearchForCalendar}
                        placeholderTextColor={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
                    />
                </View>


            </View>

        </View>
        <NavFooter/>
        </>
    )
}

export default Search;