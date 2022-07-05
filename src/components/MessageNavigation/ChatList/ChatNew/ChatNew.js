import React, {useState} from "react";
import { useSelector } from "react-redux";
import { ScrollView, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { content } from "./ChatNew.config";
import { array } from "./users.array";

import { GlobalStyle } from "../../../../global.style";
import { Style } from "./ChatNew.style";

import BackArrowSvg from '../../../../Image/BackArrow.svg';

const ChatNew = ({navigation, setUserID, setTypeUser}) => {

    const following = useSelector((store) => store.following);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {NewMessage, SearchForMessageOrUsers} = content[language]

    return(
        <ScrollView style={theme === "dark" ? GlobalStyle.mainDark : GlobalStyle.mainLight}>


            <TouchableOpacity 
                style={theme === "dark" ? GlobalStyle.headerDark : GlobalStyle.headerLight} 
                onPress={() => navigation.navigate({ name: 'ChatList' })}
            >
                <View 
                    style={GlobalStyle.imageWrapper}
                >
                    <BackArrowSvg fill={theme === "dark" ? "#fff" : "#000"}/>
                </View>
                <Text style={theme === "dark" ? GlobalStyle.headerTitleDark : GlobalStyle.headerTitleLight}>
                    {NewMessage}
                </Text>
            </TouchableOpacity>


            <View style={{ padding: 20 }}>


                <TextInput
                    style={theme === "dark" ? Style.inputDark : Style.inputLight}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder={SearchForMessageOrUsers}
                    placeholderTextColor={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
                />


                {following.map((item)=>(
                    <TouchableOpacity 
                        style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight} 
                        key={item.id}
                        onPress={()=>{
                            setUserID(item.id)
                            setTypeUser('chatNew')
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
                                <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTtextDark}>
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

export default ChatNew;