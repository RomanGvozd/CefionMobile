import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { GlobalStyle } from "../../../global.style";
import { content } from "./ChatSetting.config"

import { Style } from "./ChatSetting.style";

import BackArrowSvg from '../../../../../Image/BackArrow.svg';


const ChatSetting = ({chatID, navigation}) => {

    const chats = useSelector((store) => store.chats);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {
        Back,
        Files,
        Photo,
        Video,
        Links,
    } = content[language]

    let chat = chats.filter((item)=> item.id === chatID)
    chat = chat[0]

    const [links, setLinks] = useState("files")

    return(
        <ScrollView style={theme === "dark" ? GlobalStyle.mainDark : GlobalStyle.mainLight}>
            <TouchableOpacity 
                style={theme === "dark" ? GlobalStyle.headerDark : GlobalStyle.headerLight}
                onPress={() => navigation.navigate({ name: 'Chat' })}
            >
                <View style={Style.headerBlock}>
                    <View 
                        style={Style.headerBlockLeft}
                    >
                        <BackArrowSvg fill={theme === "dark" ? "#fff" : "#000"}/>
                        <View style={{marginLeft: 12}}>
                            <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                                {Back}
                            </Text>
                        </View>
                    </View>
                    <View style={Style.titleWrapper}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {chat.title}
                        </Text>
                    </View>
                    <View 
                        style={Style.headerBlockRight}
                    >
                    </View>
                </View>
            </TouchableOpacity>


            <View style={{padding: 20}}>


                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <View style={Style.chatImageWrapper}>
                    <Image
                        style={Style.chatSettingImage}
                        source={require("./image/user.png")}
                    />
                    </View>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                        {chat.title}
                    </Text>
                    <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTtextDark}>
                        Name
                    </Text>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                        {chat.title}
                    </Text>
                    <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTtextDark}>
                        Username
                    </Text>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <View style={Style.fileHeader}>
                        <TouchableOpacity 
                        style={Style.fileHeaderButton}
                        onPress={()=>setLinks("files")}
                        >
                            <Text style={theme === "dark" ? Style.fileHeaderButtontextDark : Style.fileHeaderButtontextLight}>
                                {Files}
                            </Text>
                            {links === "files" && <View style={Style.fileHeaderButtonActive}>
                            </View>}
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={Style.fileHeaderButton}
                        onPress={()=>setLinks("photo")}
                        >
                            <Text style={theme === "dark" ? Style.fileHeaderButtontextDark : Style.fileHeaderButtontextLight}>
                                {Photo}
                            </Text>
                            {links === "photo" && <View style={Style.fileHeaderButtonActive}>
                            </View>}
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={Style.fileHeaderButton}
                        onPress={()=>setLinks("video")}
                        >
                            <Text style={theme === "dark" ? Style.fileHeaderButtontextDark : Style.fileHeaderButtontextLight}>
                                {Video}
                            </Text>
                            {links === "video" && <View style={Style.fileHeaderButtonActive}>
                            </View>}
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={Style.fileHeaderButton}
                        onPress={()=>setLinks("links")}
                        >
                            <Text style={theme === "dark" ? Style.fileHeaderButtontextDark : Style.fileHeaderButtontextLight}>
                                {Links}
                            </Text>
                            {links === "links" && <View style={Style.fileHeaderButtonActive}>
                            </View>}
                        </TouchableOpacity>

                    </View>
                    <View style={{padding: 50}}>

                    </View>
                </View>


            </View>
        </ScrollView>
    )
}

export default ChatSetting;