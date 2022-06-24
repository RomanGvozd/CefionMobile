import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { ScrollView, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { changeLanguage } from "../../../common/store/language/actions";
import { content } from "./Settilng.config";

import { Style } from "./Setting.style";

const Setting = ({ navigation }) => {
    const user = useSelector((store) => store.user);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);
    const dispatch = useDispatch();

    const {Setting, English, Language, EnglishSelect, RussianSelect, InfoAndSettings} = content[language]

    const [showLanguage, setShowLanguage] = useState(false);

    const handleEnglish = () => {
        setShowLanguage(false)
        dispatch(changeLanguage("EN"))
    }

    const handleRussian = () => {
        setShowLanguage(false)
        dispatch(changeLanguage("RU"))
    }

    return(
        <ScrollView style={theme === "dark" ? Style.mainDark : Style.mainLight}>


            <TouchableOpacity style={theme === "dark" ? Style.headerDark : Style.headerLight} onPress={() => navigation.navigate({ name: 'Account' })}>
                <View 
                style={Style.imageWrapper}
                >
                    <Image
                        style={Style.image}
                        source={require("./image/Vector.png")}
                    />
                </View>
                <Text style={theme === "dark" ? Style.headerTitleDark : Style.headerTitleLight}>
                    {Setting}
                </Text>
            </TouchableOpacity>


            <View style={{padding: 20}}>


                <View style={theme === "dark" ? Style.blockDark : Style.titleLight}>
                    <Image
                        style={Style.imageUser}
                        source={require("./image/user.png")}
                    />
                </View>


                <Text style={theme === "dark" ? Style.titleDark : Style.blockLight}>
                    {Language}
                </Text>
                <View 
                    style={theme === "dark" ? Style.blockDark : Style.blockLight}
                    
                >
                    <TouchableOpacity style={Style.blockItemOne} onPress={()=>setShowLanguage(!showLanguage)}>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            {English}
                        </Text>
                        <Image
                            style={showLanguage ? Style.imageLanguageActive : Style.imageLanguage}
                            source={require("./image/Vector.png")}
                        />
                    </TouchableOpacity>
                    {showLanguage && 
                    <>
                        <TouchableOpacity style={Style.select}>
                            <Text 
                                style={theme === "dark" ? Style.textDark : Style.textLight}
                                onPress={handleEnglish}
                            >
                                {EnglishSelect}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Style.select}>
                            <Text 
                                style={theme === "dark" ? Style.textDark : Style.textLight}
                                onPress={handleRussian}
                            >
                                {RussianSelect}
                            </Text>
                        </TouchableOpacity>
                    </>}
                </View>


                <Text style={theme === "dark" ? Style.titleDark : Style.blockLight}>
                    {InfoAndSettings}
                </Text>


            </View>

        </ScrollView>
    )
}

export default Setting;