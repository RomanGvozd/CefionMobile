import React, {useState} from "react";
import { useSelector } from "react-redux";
import { ScrollView, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import ChatListItem from "./ChatListItem/ChatListItem";
import { content } from "./ChatList.config";

import { Style } from "./ChatList.style";
import { GlobalStyle } from "../../../global.style";

import NavFooter from "../NavFooter/NavFooter";

const ChatList = ({setChatID, navigation}) => {

    const chats = useSelector((store) => store.chats);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {
        Edit,
        Message, 
        New,
        SearchForCalendar,
        General,
        Private,
        Description,
    } = content[language]

    const [typeChat, setTypeChat] = useState("general");

    const openUser = () => {navigation.navigate({ name: 'Chat' })}

    return(
        <>
        <ScrollView style={theme === "dark" ? GlobalStyle.mainDark : GlobalStyle.mainLight}>
            <View style={theme === "dark" ? GlobalStyle.headerDark : GlobalStyle.headerLight}>
                <View style={Style.headerBlock}>
                    <TouchableOpacity 
                        style={Style.headerBlockLeft}
                    >
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {Edit}
                        </Text>
                    </TouchableOpacity>
                    <View style={Style.titleWrapper}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {Message}
                        </Text>
                    </View>
                    <TouchableOpacity 
                        style={Style.headerBlockRight}
                        // onPress={() => navigation.navigate({ name: 'ChatSetting' })}
                    >
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {New}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            
            <View style={{padding: 20}}>

            
                <TextInput
                    style={theme === "dark" ? GlobalStyle.inputDark : GlobalStyle.inputLight}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder={SearchForCalendar}
                    placeholderTextColor={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
                />
                <View style={Style.buttonWrapper}>
                    <TouchableOpacity 
                        style={typeChat === "general" ? Style.buttonActive : Style.button}
                        onPress={()=>setTypeChat("general")}
                    >
                        <Text style={typeChat === "general" ? Style.buttonTextActive : Style.buttonText}>
                            {General}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={typeChat === "private" ? Style.buttonActive : Style.button} 
                        onPress={()=>setTypeChat("private")}
                    >
                        <Text style={typeChat === "private" ? Style.buttonTextActive : Style.buttonText}>
                            {Private}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <Text style={theme === "dark" ? GlobalStyle.titleDark : GlobalStyle.titleLight}>
                        FAQ
                    </Text>
                    <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                        {Description}
                    </Text>
                </View>
                {chats.map((item)=>(
                    <ChatListItem item={item} key={item.id} openUser={openUser} setChatID={setChatID}/>
                ))}

                <View style={{padding: 20}}>

                </View>

            </View>

        </ScrollView>
        <NavFooter/>
        </>
    )
}




export default ChatList;