import React from "react";
import { useSelector } from "react-redux";
import { ScrollView, Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { content } from "./Followers.config";

import { Style } from "./Followers.style";
import { GlobalStyle } from "../../../../global.style";

const Followers = ({ navigation, setTypeUser, setUserID }) => {
    const followers = useSelector((store) => store.followers);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {Followers, SearchForCalendar} = content[language] 

    return(
        <ScrollView style={theme === "dark" ? GlobalStyle.mainDark : GlobalStyle.mainLight}>


            <TouchableOpacity style={theme === "dark" ? GlobalStyle.headerDark : GlobalStyle.headerLight} onPress={() => navigation.navigate({ name: 'Account' })}>
                <View 
                style={GlobalStyle.imageWrapper}
                >
                    <Image
                        style={GlobalStyle.image}
                        source={require("../../../Image/BackArrow.png")}
                    />

                </View>
                <Text style={theme === "dark" ? GlobalStyle.headerTitleDark : GlobalStyle.headerTitleLight}>
                    {Followers}
                </Text>
            </TouchableOpacity>


            <View style={{ padding: 20 }}>


                <TextInput
                    style={theme === "dark" ? Style.inputDark : Style.inputLight}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder={SearchForCalendar}
                    placeholderTextColor={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
                />


                {followers.map((item)=>(
                    <TouchableOpacity 
                        style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight} 
                        key={item.id}
                        onPress={()=>{
                            setTypeUser("followers")
                            setUserID(item.id)
                            navigation.navigate({ name: 'AccountInfo' })
                        }}
                    >
                        <View style={Style.blockItemOne}>
                            <Image
                                style={Style.imageBlockItem}
                                source={require("./image/user.png")}
                            />
                            <View style={Style.blockItemText}>
                                <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                                    {item.name}
                                </Text>
                                <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                                    {item.tagName}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>


        </ScrollView>
    )
}

export default Followers;