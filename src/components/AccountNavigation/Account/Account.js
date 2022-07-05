import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { ScrollView, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper'
import { popularNews } from "./PopularNews.array";
import { content } from "./Account.config";

import { Style } from "./Account.style";
import { GlobalStyle } from "../../../../global.style";

import NavFooter from "../../NavFooter/NavFooter";

import { changeTheme } from "../../common/store/theme/actions";

import SettingSvg from './image/Setting.svg'
import StatisticSvg from './image/Statistic.svg'
import FollowersSvg from './image/Followers.svg'
import WalletSvg from './image/Wallet.svg'
import NavGroupSvg from './image/NavGroup.svg'
import NavNewsSvg from './image/NavNews.svg'
import NavWalletSvg from './image/NavWallet.svg'
import BackArrowSvg from '../../../Image/BackArrow.svg'


const Account = ({setPageID, navigation }) => {
    const following = useSelector((store) => store.following);
    const followers = useSelector((store) => store.followers);
    const news = useSelector((store) => store.news);
    const user = useSelector((store) => store.user);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);
    const dispatch = useDispatch();

    const handleTheme = () => {
        dispatch(changeTheme(theme === "dark" ? "light" : "dark"))
    }

    const {
        Light,
        Dark,
        Statistics,
        Followers,
        Following,
        Wallet,
        WalletAdress,
        ReadMore,
        Group,
        FreeTON,
        News,
        Online,
        PopularNews,
    } = content[language]

    const filteredNews = []

    for (let i = 0; i < 4; i++) {
        filteredNews.push(news[i]);
        
    }
    
    return(
        <>
        <ScrollView style={theme === "dark" ? GlobalStyle.mainDark : GlobalStyle.mainLight}>


            <TouchableOpacity 
                style={theme === "dark" ? GlobalStyle.headerDark : GlobalStyle.headerLight}
                onPress={() => navigation.navigate({ name: 'Setting' })}
            >
                <Text style={theme === "dark" ? Style.headerTitleDark : Style.headerTitleLight}>
                    {user.name}
                </Text>
                <Text style={theme === "dark" ? Style.headerSubTitleDark : Style.headerSubTitleLight}>
                    {user.tagName}
                </Text>
                <View >
                    <SettingSvg style={Style.headerImage} fill={theme === "dark" ? "#fff" : "#000"}/>
                </View>
            </TouchableOpacity>



            <View style={{ padding: 20 }}>
                <View style={theme === "dark" ? Style.userBlockDark : Style.userBlockLight}>
                    <Image
                        style={Style.userImage}
                        source={require("./image/user.png")}
                    />
                    <TouchableOpacity onPress={handleTheme} style={Style.radioButtonWrapper}>
                        <View style={Style.radioButton}>
                            <Text style={theme === "dark" ? Style.TextDark : Style.TextLight }>
                                 {Light}
                            </Text>
                            <Text style={theme === "dark" ? Style.TextDark : Style.TextLight }>
                                {Dark}
                            </Text>
                            <View style={theme === "dark" ? Style.radioButtonCheckedDark : Style.radioButtonCheckedLight}>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>



                <TouchableOpacity 
                    style={Style.statisticWrapper} 
                    onPress={() => navigation.navigate({ name: 'Statistics' })}
                >
                    <View style={theme === "dark" ? Style.statisticDark : Style.statisticLight}>
                        <View style={{flexDirection: "row"}}>
                            <StatisticSvg fill={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}/>
                            <Text style={theme === "dark" ? Style.TextDark : Style.TextLight}>
                                {Statistics}
                            </Text>
                        </View>
                        <BackArrowSvg
                            style={GlobalStyle.imageReverce}
                            fill={theme === "dark" ? "#fff" : "#000"}
                        />
                    </View>
                </TouchableOpacity>



                <View style={theme === "dark" ? Style.userInfoDark : Style.userInfoLight}>
                    <TouchableOpacity style={Style.infoItem} onPress={() => navigation.navigate({ name: 'Followers' })}>
                        <FollowersSvg fill={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}/>
                        <View>
                            <Text style={theme === "dark" ? Style.TextDark : Style.TextLight }>
                                {Followers}
                            </Text>
                            <Text style={theme === "dark" ? Style.userInfoTextDark : Style.userInfoTextLight }>
                                {followers.length}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.infoItem} onPress={() => navigation.navigate({ name: 'Following' })}>
                        <FollowersSvg fill={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}/>
                        <View>
                            <Text style={theme === "dark" ? Style.TextDark : Style.TextLight }>
                                {Following}
                            </Text>
                            <Text style={theme === "dark" ? Style.userInfoTextDark : Style.userInfoTextLight }>
                                {following.length}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.infoItem} onPress={() => navigation.navigate({ name: 'Wallet' })}>
                        <WalletSvg fill={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}/>
                        <View>
                            <Text style={theme === "dark" ? Style.TextDark : Style.TextLight }>
                                {Wallet}
                            </Text>
                            <Text style={theme === "dark" ? Style.userInfoTextDark : Style.userInfoTextLight }>
                                45,832.0012382 USDT
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.infoItem} onPress={() => navigation.navigate({ name: 'Everscape' })}>
                        <WalletSvg fill={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}/>
                        <View>
                            <Text style={theme === "dark" ? Style.TextDark : Style.TextLight }>
                                {WalletAdress}
                            </Text>
                            <Text style={theme === "dark" ? Style.userInfoTextDark : Style.userInfoTextLight }>
                                19TLq3QwdaJRtk4aJn87uaV8jLuZAv4B19
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>



                <View style={theme === "dark" ? Style.popularNewsDark : Style.popularNewsLight}>
                    <Swiper
                        loop={false}
                        dot={
                          <View style={Style.dot}>
                          </View>
                        }
                        activeDot={
                            <View style={Style.activeDot}>
                            </View>
                        }
                    >
                        {filteredNews.map((item)=>(
                            <TouchableOpacity 
                                style={Style.slide} 
                                key={item.id}
                                onPress={()=>{
                                    setPageID(item.id)
                                    navigation.navigate({ name: 'Page' })
                                }}
                                activeOpacity={1}
                            >
                                <Image
                                    source={require("./image/popularNews.png")}
                                />
                                <View style={Style.slideInfo}>
                                    <Text style={theme === "dark" ? Style.slideTitleDark : Style.slideTitleLight}>
                                        {PopularNews}
                                    </Text>
                                    {language === "EN"
                                    ?<Text style={theme === "dark" ? Style.slideDescriptionDark : Style.slideDescriptionLight}>
                                        {item.titleEN}
                                    </Text>
                                    :<Text style={theme === "dark" ? Style.slideDescriptionDark : Style.slideDescriptionLight}>
                                        {item.titleRU}
                                    </Text>
                                    }

                                    <Text style={Style.slideText}>{ReadMore}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </Swiper>
                </View>



                <View style={theme === "dark" ? Style.navDark : Style.navLight}>
                    <TouchableOpacity 
                        style={Style.navButton}
                        onPress={() => navigation.navigate({ name: 'GroupList' })}
                    >
                        <NavGroupSvg />
                        <View style={Style.navButtonInfo}>
                            <Text style={Style.navButtonText}>{Group}</Text>
                            <Text style={Style.navButtonSubText}>{FreeTON}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={Style.navButton} 
                        onPress={() => navigation.navigate({ name: 'News' })}
                    >
                        <NavNewsSvg />
                        <View style={Style.navButtonInfo}>
                            <Text style={Style.navButtonText}>{News}</Text>
                            <Text style={Style.navButtonSubText}>{Online}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={Style.navButton}
                        onPress={() => navigation.navigate({ name: 'BinanceCoin' })}
                    >
                        <NavWalletSvg/>
                        <View style={Style.navButtonInfo}>
                            <Text style={Style.navButtonText}>{Wallet}</Text>
                        </View>
                    </TouchableOpacity>

                </View>



            </View>
        </ScrollView>
        <NavFooter/>
        </>
    )
}

const styles = StyleSheet.create({

})

export default Account;