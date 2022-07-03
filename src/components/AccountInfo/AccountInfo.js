import React from "react";
import { useSelector } from "react-redux";
import { ScrollView, Switch, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { content } from "./AccountInfo.config";

import { GlobalStyle } from "../../../global.style";
import { Style } from "./AccountInfo.style";

const AccountInfo = ({ navigation, typeUser, userID }) => {

    const followers = useSelector((store) => store.followers);
    const following = useSelector((store) => store.following);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    let currentUser = following.filter((item)=> item.id === userID)
    currentUser = currentUser[0]

    let user = null

    if(typeUser === "followers"){
        user = followers.filter((item)=> item.id === userID)
        user = user[0]
    }else if(typeUser === "following"){
        user = following.filter((item)=> item.id === userID)
        user = user[0]
    }

    const back = () => {
        if(typeUser === "followers"){
            navigation.navigate({ name: 'Followers' })
        }else if(typeUser === "following"){
            navigation.navigate({ name: 'Following' })
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

    return(
        <ScrollView style={theme === "dark" ? GlobalStyle.mainDark : GlobalStyle.mainLight}>


        <TouchableOpacity 
            style={theme === "dark" ? GlobalStyle.headerDark : GlobalStyle.headerLight} 
            onPress={back}
        >
                <View 
                style={GlobalStyle.imageWrapper}
                >
                    <Image
                        style={GlobalStyle.image}
                        source={require("./image/Vector.png")}
                    />
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
                    {currentUser === undefined
                    ? <Text style={theme === "dark" ? Style.buttonTextDark : Style.buttonTextLight}>
                        {Subscribe}
                    </Text>
                    : <Text style={theme === "dark" ? Style.buttonTextDark : Style.buttonTextLight}>
                        {Unfollow}
                    </Text>
                    }
                </TouchableOpacity>
                <View style={GlobalStyle.blockItemOne}>
                    <TouchableOpacity style={theme === "dark" ? Style.blockDark : Style.blockLight}>
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
                        <Image
                            style={Style.blockImage}
                            source={require("./image/followers.png")}
                        />
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
                        <Image
                            style={Style.blockImage}
                            source={require("./image/followers.png")}
                        />
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
                        <Image
                            style={Style.blockImage}
                            source={require("./image/wallet.png")}
                        />
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
                        <Image
                            style={Style.blockImage}
                            source={require("./image/wallet.png")}
                        />
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