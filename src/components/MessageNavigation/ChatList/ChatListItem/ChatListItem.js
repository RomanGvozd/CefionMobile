import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text, View, Image, TouchableOpacity, Animated } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GlobalStyle } from "../../../global.style";
import { content } from "./ChatListItem.config";
import moment from 'moment';

import { Style } from "./ChatListItem.style";

import { deleteItem } from "../../../common/store/chats/actions";

const ChatListItem = ({item, openUser, setChatID}) => {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const dispatch = useDispatch()

    const {Delete, Unread} = content[language]

    const renderRight = (progress, dragX) => {
        return (
            <TouchableOpacity style={Style.buttonDelete} onPress={()=>dispatch(deleteItem(item.id))}>
                <Animated.Text style={Style.buttonText}>
                    {Delete}
                </Animated.Text>
            </TouchableOpacity>
        );
    };

    const renderLeft = (progress, dragX) => {
        return (
            <TouchableOpacity style={Style.buttonUnread}>
                <Text style={Style.buttonText}>
                    {Unread}
                </Text>
            </TouchableOpacity>
        );
    };

    let lastMessage = null
    let lastDate = null
    let lastMessageTitle = null

    if (item.message.length > 0) {
        lastMessage = item.message.slice(-1)[0]
        lastDate = lastMessage.date
        lastMessageTitle = lastMessage.message
    }

    return(
        <Swipeable 
            renderRightActions={renderRight}
            renderLeftActions={renderLeft}
        >
            <TouchableOpacity  
                style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}
                onPress={()=>{
                    openUser()
                    setChatID(item.id)
                }}
                activeOpacity={1}
            >
                <View style={GlobalStyle.blockItemOne}>
                    <Image
                        style={Style.userImage}
                        source={require("./image/user.png")}
                    />
                    <View style={{width: '75%'}}>
                        <View style={Style.blockItemOneCenter}>
                            <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                                    {item.title}
                            </Text>
                            <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                                    {item.message.length > 0 && moment(lastDate).format('LT')}
                            </Text>
                        </View>
                        <View style={{padding: 3}}></View>
                        <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTtextDark}>
                            {lastMessageTitle}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity >
        </Swipeable>
    )
}


export default ChatListItem;