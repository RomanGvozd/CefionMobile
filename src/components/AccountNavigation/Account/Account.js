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

const Account = ({setPageID, navigation }) => {

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
                <View>
                    <Image
                        style={Style.headerImage}
                        source={require("./image/settings.png")}
                    />
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
                            <Image
                                style={{width: 20, height: 20}}
                                source={require("./image/statisticIcon.png")}
                            />
                            <Text style={theme === "dark" ? Style.TextDark : Style.TextLight}>
                                {Statistics}
                            </Text>
                        </View>
                        <Image
                            style={GlobalStyle.imageReverce}
                            source={require("./image/statisticArrow.png")}
                        />
                    </View>
                </TouchableOpacity>



                <View style={theme === "dark" ? Style.userInfoDark : Style.userInfoLight}>
                    <TouchableOpacity style={Style.infoItem} onPress={() => navigation.navigate({ name: 'Followers' })}>
                        <Image
                            source={require("./image/followers.png")}
                        />
                        <View>
                            <Text style={theme === "dark" ? Style.TextDark : Style.TextLight }>
                                {Followers}
                            </Text>
                            <Text style={theme === "dark" ? Style.userInfoTextDark : Style.userInfoTextLight }>
                                994
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.infoItem} onPress={() => navigation.navigate({ name: 'Following' })}>
                        <Image
                            source={require("./image/followers.png")}
                        />
                        <View>
                            <Text style={theme === "dark" ? Style.TextDark : Style.TextLight }>
                                {Following}
                            </Text>
                            <Text style={theme === "dark" ? Style.userInfoTextDark : Style.userInfoTextLight }>
                                703
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.infoItem} onPress={() => navigation.navigate({ name: 'Wallet' })}>
                        <Image
                            source={require("./image/wallet.png")}
                        />
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
                        <Image
                            source={require("./image/wallet.png")}
                        />
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
                        <Image
                            style={Style.navButtonImage}
                            source={require("./image/navGroup.png")}
                        />
                        <View style={Style.navButtonInfo}>
                            <Text style={Style.navButtonText}>{Group}</Text>
                            <Text style={Style.navButtonSubText}>{FreeTON}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={Style.navButton} 
                        onPress={() => navigation.navigate({ name: 'News' })}
                    >
                        <Image
                            style={Style.navButtonImage}
                            source={require("./image/navGroup.png")}
                        />
                        <View style={Style.navButtonInfo}>
                            <Text style={Style.navButtonText}>{News}</Text>
                            <Text style={Style.navButtonSubText}>{Online}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={Style.navButton}
                        onPress={() => navigation.navigate({ name: 'BinanceCoin' })}
                    >
                        <Image
                            style={Style.navButtonImage}
                            source={require("./image/navGroup.png")}
                        />
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