import React from "react";
import { useSelector } from "react-redux";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { content } from "./Statistics.config";

import { Style } from "./Statistics.style";
import { GlobalStyle } from "../../../../global.style";

const Statistics = ({ navigation }) => {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {
        Statistics,
        GroupsInWhichItBelongs,
        Administrators,
        Jury,
        Inishialsh,
        Members,
        RegistrationDate,
        ReadingTimeForArticles,
        Activity,
        ReadingArticles,
        P2PTransactions,
        MessagesInGroups,
    } = content[language]

    return(
        <View style={theme === "dark" ? GlobalStyle.mainDark : GlobalStyle.mainLight}>

            
            <TouchableOpacity 
                style={theme === "dark" ? GlobalStyle.headerDark : GlobalStyle.headerLight} 
                onPress={() => navigation.navigate({ name: 'Account' })}
            >
                <View 
                style={GlobalStyle.imageWrapper}
                >
                    <Image
                        style={GlobalStyle.image}
                        source={require("../../../Image/BackArrow.png")}
                    />
                </View>
                <Text style={theme === "dark" ? GlobalStyle.headerTitleDark : GlobalStyle.headerTitleLight}>
                    {Statistics}
                </Text>
            </TouchableOpacity>



            <View style={{padding: 20}}>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <View style={theme === "dark" ? Style.blockItemHeaderDark : Style.blockItemHeaderLight}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {GroupsInWhichItBelongs}
                        </Text>
                        <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                            536
                        </Text>
                    </View>
                    <View style={Style.blockItem}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {Administrators}
                        </Text>
                        <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                            130
                        </Text>
                    </View>
                    <View style={Style.blockItem}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {Jury}
                        </Text>
                        <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                            922
                        </Text>
                    </View>
                    <View style={Style.blockItem}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {Inishialsh}
                        </Text>
                        <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                            423
                        </Text>
                    </View>
                    <View style={Style.blockItem}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {Members}
                        </Text>
                        <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                            540
                        </Text>
                    </View>
                </View>



                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <View style={GlobalStyle.blockItemOne}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {RegistrationDate}
                        </Text>
                        <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                            May 31, 2015
                        </Text>
                    </View>
                </View>



                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <View style={GlobalStyle.blockItemOne}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {ReadingTimeForArticles}
                        </Text>
                        <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                            04:42:15
                        </Text>
                    </View>
                </View>



                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <View style={theme === "dark" ? Style.blockItemHeaderDark : Style.blockItemHeaderLight}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {Activity}
                        </Text>
                        <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                            45%
                        </Text>
                    </View>
                    <View style={Style.blockItem}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {ReadingArticles}
                        </Text>
                        <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                            04:50:25
                        </Text>
                    </View>
                    <View style={Style.blockItem}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {P2PTransactions}
                        </Text>
                        <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                            429
                        </Text>
                    </View>
                    <View style={Style.blockItem}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {MessagesInGroups}
                        </Text>
                        <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                            600
                        </Text>
                    </View>
                </View>
            </View>


        </View>
    )
}

export default Statistics;