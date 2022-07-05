import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, Switch, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { content } from "./AccountInfo.config";

import { GlobalStyle } from "../../../global.style";
import { Style } from "./AccountInfo.style";

import BackArrowSvg from '../../Image/BackArrow.svg';
import FollowersSvg from './image/Followers.svg';
import WalletSvg from './image/Wallet.svg';

import { addChat } from '../../common/store/chats/actions'

const AccountInfo = ({ navigation, typeUser, userID, setChatID }) => {

    const dispatch = useDispatch();

    const currentUser = useSelector((store) => store.user);
    const followers = useSelector((store) => store.followers);
    const following = useSelector((store) => store.following);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    let findUser = following.filter((item)=> item.id === userID)
    findUser = findUser[0]

    let user = null

    if(typeUser === "followers"){
        user = followers.filter((item)=> item.id === userID)
        user = user[0]
    }else if(typeUser === "following"){
        user = following.filter((item)=> item.id === userID)
        user = user[0]
    }else if(typeUser === "chatNew"){
        user = following.filter((item)=> item.id === userID)
        user = user[0]
    }

    const back = () => {
        if(typeUser === "followers"){
            navigation.navigate({ name: 'Followers' })
        }else if(typeUser === "following"){
            navigation.navigate({ name: 'Following' })
        }else if(typeUser === "chatNew"){
            navigation.navigate({ name: 'ChatNew' })
        }
    }

    const {
        Unfollow,
        Subscribe,
        Message,
        PrivateMessage,
        Followers,
        Following,
        Wallet,
        WalletAdress,
    } = content[language]

    const handleMessage = () => {
        const chatID = Date.now()
        dispatch(addChat(
            chatID,
            user.name,
            [{id: currentUser.id, name: currentUser.name}, {id: user.id, name: user.name}],
            chatID, 
            "public", 
            [],
        ));
        setChatID(chatID)
        navigation.navigate({ name: 'Chat' })
    }

    return(
        <ScrollView style={theme === "dark" ? GlobalStyle.mainDark : GlobalStyle.mainLight}>


        <TouchableOpacity 
            style={theme === "dark" ? GlobalStyle.headerDark : GlobalStyle.headerLight} 
            onPress={back}
        >
                <View 
                    style={GlobalStyle.imageWrapper}
                >
                    <BackArrowSvg fill={theme === "dark" ? "#fff" : "#000"}/>
                </View>
                <Text style={theme === "dark" ? GlobalStyle.headerTitleDark : GlobalStyle.headerTitleLight}>
                    {user.tagName}
                </Text>
            </TouchableOpacity>


            <View style={{padding: 20}}>

                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <View style={Style.blockUser}>
                        <Image
                            style={Style.userImage}
                            source={require("./image/user.png")}
                        />
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            {user.name}
                        </Text>
                        <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                            {user.tagName}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={theme === "dark" ? Style.buttonDark : Style.buttonLight}>
                    {findUser === undefined
                    ? <Text style={theme === "dark" ? Style.buttonTextDark : Style.buttonTextLight}>
                        {Subscribe}
                    </Text>
                    : <Text style={theme === "dark" ? Style.buttonTextDark : Style.buttonTextLight}>
                        {Unfollow}
                    </Text>
                    }
                </TouchableOpacity>
                <View style={GlobalStyle.blockItemOne}>
                    <TouchableOpacity 
                        style={theme === "dark" ? Style.blockDark : Style.blockLight}
                        onPress={handleMessage}
                    >
                        <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                            {Message}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                        <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                            {PrivateMessage}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <View style={GlobalStyle.blockItemOneCenter}>
                        <FollowersSvg fill={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}/>
                        <View style={{marginLeft: 10}}>
                            <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                                {Followers}
                            </Text>
                            <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                                {user.followers.length}
                            </Text>
                        </View>
                    </View>
                    <View style={{padding: 5}}></View>
                    <View style={GlobalStyle.blockItemOneCenter}>
                        <FollowersSvg fill={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}/>
                        <View style={{marginLeft: 10}}>
                            <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                                {Following}
                            </Text>
                            <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                                {user.followers.length}
                            </Text>
                        </View>
                    </View>
                    <View style={{padding: 5}}></View>
                    <View style={GlobalStyle.blockItemOneCenter}>
                        <WalletSvg fill={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}/>
                        <View style={{marginLeft: 10}}>
                            <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                                {Wallet}
                            </Text>
                            <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                                {user.wallet}
                            </Text>
                        </View>
                    </View>
                    <View style={{padding: 5}}></View>
                    <View style={GlobalStyle.blockItemOneCenter}>
                        <WalletSvg fill={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}/>
                        <View style={{marginLeft: 10}}>
                            <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                                {WalletAdress}
                            </Text>
                            <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                                {user.walletAdress}
                            </Text>
                        </View>
                    </View>
                </View>

            </View>


        </ScrollView>
    )
}

export default AccountInfo;