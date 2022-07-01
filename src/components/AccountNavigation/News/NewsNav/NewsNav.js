import React from "react";
import { useSelector } from "react-redux";
import { ScrollView, SafeAreaView, TextInput, Text, View, Image, TouchableOpacity } from 'react-native';
import { content } from "./NewsNav.config";

import { Style } from "./NewsNav.style";

const NewsNav = ({setType, type}) => {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {
        AllNews,
        Popular,
        Blockchain,
        NFT,
        DeFI,
        Business,
    } = content[language] 

    return(
        <ScrollView horizontal={true} style={Style.nav}>
            <View style={Style.navButtonWrapper}>
                <TouchableOpacity 
                    style={theme === "dark" ? Style.navButtonDark : Style.navButtonLight} 
                    onPress={()=>setType("AllNews")}
                >
                    <Text style={theme === "dark" ? Style.navButtonTextDark : Style.navButtonTextLight}>
                        {AllNews}
                    </Text>
                </TouchableOpacity>
                {type === "AllNews" && <TouchableOpacity style={Style.navButtonActive}>
                    <Text style={Style.navButtonTextDark}>
                        {AllNews}
                    </Text>
                </TouchableOpacity>}
            </View>
            <View style={Style.navButtonWrapper}>
                <TouchableOpacity 
                    style={theme === "dark" ? Style.navButtonDark : Style.navButtonLight}
                    onPress={()=>setType("Popular")}
                >
                    <Text style={theme === "dark" ? Style.navButtonTextDark : Style.navButtonTextLight}>
                        {Popular}
                    </Text>
                </TouchableOpacity>
                {type === "Popular" && <TouchableOpacity style={Style.navButtonActive}>
                    <Text style={Style.navButtonTextDark}>
                        {Popular}
                    </Text>
                </TouchableOpacity>}
            </View>
            <View style={Style.navButtonWrapper}>
                <TouchableOpacity 
                    style={theme === "dark" ? Style.navButtonDark : Style.navButtonLight}
                    onPress={()=>setType("Blockchain")}
                >
                    <Text style={theme === "dark" ? Style.navButtonTextDark : Style.navButtonTextLight}>
                        {Blockchain}
                    </Text>
                </TouchableOpacity>
                {type === "Blockchain" && <TouchableOpacity style={Style.navButtonActive}>
                    <Text style={Style.navButtonTextDark}>
                        {Blockchain}
                    </Text>
                </TouchableOpacity>}
            </View>
            <View style={Style.navButtonWrapper}>
                <TouchableOpacity 
                    style={theme === "dark" ? Style.navButtonDark : Style.navButtonLight}
                    onPress={()=>setType("NFT")}
                >
                    <Text style={theme === "dark" ? Style.navButtonTextDark : Style.navButtonTextLight}>
                        {NFT}
                    </Text>
                </TouchableOpacity>
                {type === "NFT" && <TouchableOpacity style={Style.navButtonActive}>
                    <Text style={Style.navButtonTextDark}>
                        {NFT}
                    </Text>
                </TouchableOpacity>}
            </View>
            <View style={Style.navButtonWrapper}>
                <TouchableOpacity 
                    style={theme === "dark" ? Style.navButtonDark : Style.navButtonLight}
                    onPress={()=>setType("DeFI")}
                >
                    <Text style={theme === "dark" ? Style.navButtonTextDark : Style.navButtonTextLight}>
                        {DeFI}
                    </Text>
                </TouchableOpacity>
                {type === "DeFI" && <TouchableOpacity style={Style.navButtonActive}>
                    <Text style={Style.navButtonTextDark}>
                        {DeFI}
                    </Text>
                </TouchableOpacity>}
            </View>
            <View style={Style.navButtonWrapper}>
                <TouchableOpacity 
                    style={theme === "dark" ? Style.navButtonDark : Style.navButtonLight}
                    onPress={()=>setType("Business")}
                >
                    <Text style={theme === "dark" ? Style.navButtonTextDark : Style.navButtonTextLight}>
                        {Business}
                    </Text>
                </TouchableOpacity>
                {type === "Business" && <TouchableOpacity style={Style.navButtonActive}>
                    <Text style={Style.navButtonTextDark}>
                        {Business}
                    </Text>
                </TouchableOpacity>}
            </View>
        </ScrollView>
    )
}

export default NewsNav;