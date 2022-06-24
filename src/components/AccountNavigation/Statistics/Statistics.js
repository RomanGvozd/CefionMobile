import React from "react";
import { useSelector } from "react-redux";

import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Style } from "./Statistics.style";

const Statistics = ({ navigation }) => {
    const theme = useSelector((store) => store.theme.theme);

    return(
        <View style={theme === "dark" ? Style.mainDark : Style.mainLight}>
            <TouchableOpacity 
                style={theme === "dark" ? Style.headerDark : Style.headerLight} 
                onPress={() => navigation.navigate({ name: 'Account' })}
            >
                <View 
                style={Style.imageWrapper}
                >
                    <Image
                        style={Style.image}
                        source={require("./image/Vector.png")}
                    />
                </View>
                <Text style={theme === "dark" ? Style.headerTitleDark : Style.headerTitleLight}>
                    Statistics
                </Text>
            </TouchableOpacity>



            <View style={{padding: 20}}>
                <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                    <View style={theme === "dark" ? Style.blockItemHeaderDark : Style.blockItemHeaderLight}>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            Groups in which it belongs
                        </Text>
                        <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                            536
                        </Text>
                    </View>
                    <View style={Style.blockItem}>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            Administrators
                        </Text>
                        <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                            130
                        </Text>
                    </View>
                    <View style={Style.blockItem}>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            Jury
                        </Text>
                        <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                            922
                        </Text>
                    </View>
                    <View style={Style.blockItem}>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            Inishialsh
                        </Text>
                        <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                            423
                        </Text>
                    </View>
                    <View style={Style.blockItem}>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            Members
                        </Text>
                        <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                            540
                        </Text>
                    </View>
                </View>



                <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                    <View style={Style.blockItemOne}>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            Registration date
                        </Text>
                        <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                            May 31, 2015
                        </Text>
                    </View>
                </View>



                <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                    <View style={Style.blockItemOne}>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            Reading time for articles
                        </Text>
                        <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                            04:42:15
                        </Text>
                    </View>
                </View>



                <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                    <View style={theme === "dark" ? Style.blockItemHeaderDark : Style.blockItemHeaderLight}>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            Activity
                        </Text>
                        <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                            45%
                        </Text>
                    </View>
                    <View style={Style.blockItem}>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            Reading Articles
                        </Text>
                        <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                            04:50:25
                        </Text>
                    </View>
                    <View style={Style.blockItem}>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            P2P transactions
                        </Text>
                        <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                            429
                        </Text>
                    </View>
                    <View style={Style.blockItem}>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            Messages in groups
                        </Text>
                        <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                            600
                        </Text>
                    </View>
                </View>
            </View>


        </View>
    )
}

export default Statistics;