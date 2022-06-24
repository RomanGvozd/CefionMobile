import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { ScrollView, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper'
import { popularNews } from "./PopularNews.array";

import { Style } from "./Account.style";

import { changeTheme } from "../../common/store/theme/actions";

const Account = ({ navigation }) => {

    const user = useSelector((store) => store.user);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);
    const dispatch = useDispatch();

    const handleTheme = () => {
        dispatch(changeTheme(theme === "dark" ? "light" : "dark"))
    }
    
    return(
        <ScrollView style={theme === "dark" ? Style.mainDark : Style.mainLight}>



            <TouchableOpacity 
                style={theme === "dark" ? Style.headerDark : Style.headerLight}
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
                <View style={Style.userBlockWrapper}>
                    <View style={theme === "dark" ? Style.userBlockDark : Style.userBlockLight}>
                        <Image
                            style={Style.userImage}
                            source={require("./image/user.png")}
                        />
                        <TouchableOpacity onPress={handleTheme} style={Style.radioButtonWrapper}>
                            <View style={Style.radioButton}>
                                <Text style={theme === "dark" ? Style.TextDark : Style.TextLight }>
                                    Light
                                </Text>
                                <Text style={theme === "dark" ? Style.TextDark : Style.TextLight }>
                                    Dark
                                </Text>
                                <View style={theme === "dark" ? Style.radioButtonCheckedDark : Style.radioButtonCheckedLight}>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>



                <TouchableOpacity 
                style={Style.statisticWrapper} 
                onPress={() => navigation.navigate({ name: 'Statistics' })}
                >
                    <View style={theme === "dark" ? Style.statisticDark : Style.statisticLight}>
                        <View style={{flexDirection: "row"}}>
                            <Image
                                source={require("./image/statisticIcon.png")}
                            />
                            <Text style={theme === "dark" ? Style.TextDark : Style.TextLight}>
                                Statistics
                            </Text>
                        </View>
                        <Image
                            source={require("./image/statisticArrow.png")}
                        />
                    </View>
                </TouchableOpacity>



                <View style={theme === "dark" ? Style.userInfoDark : Style.userInfoLight}>
                    <View style={Style.infoItem}>
                        <Image
                            source={require("./image/followers.png")}
                        />
                        <View>
                            <Text style={theme === "dark" ? Style.TextDark : Style.TextLight }>
                                Followers
                            </Text>
                            <Text style={theme === "dark" ? Style.userInfoTextDark : Style.userInfoTextLight }>
                                994
                            </Text>
                        </View>
                    </View>
                    <View style={Style.infoItem}>
                        <Image
                            source={require("./image/followers.png")}
                        />
                        <View>
                            <Text style={theme === "dark" ? Style.TextDark : Style.TextLight }>
                                Following
                            </Text>
                            <Text style={theme === "dark" ? Style.userInfoTextDark : Style.userInfoTextLight }>
                                703
                            </Text>
                        </View>
                    </View>
                    <View style={Style.infoItem}>
                        <Image
                            source={require("./image/wallet.png")}
                        />
                        <View>
                            <Text style={theme === "dark" ? Style.TextDark : Style.TextLight }>
                                Wallet
                            </Text>
                            <Text style={theme === "dark" ? Style.userInfoTextDark : Style.userInfoTextLight }>
                                45,832.0012382 USDT
                            </Text>
                        </View>
                    </View>
                    <View style={Style.infoItem}>
                        <Image
                            source={require("./image/wallet.png")}
                        />
                        <View>
                            <Text style={theme === "dark" ? Style.TextDark : Style.TextLight }>
                                Wallet adress
                            </Text>
                            <Text style={theme === "dark" ? Style.userInfoTextDark : Style.userInfoTextLight }>
                                19TLq3QwdaJRtk4aJn87uaV8jLuZAv4B19
                            </Text>
                        </View>
                    </View>
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
                        {popularNews.map((item)=>(
                            <View style={Style.slide} key={item.id}>
                                <Image
                                    source={require("./image/popularNews.png")}
                                />
                                <View style={Style.slideInfo}>
                                    <Text style={theme === "dark" ? Style.slideTitleDark : Style.slideTitleLight}>
                                        {item.titleEN}
                                    </Text>
                                    <Text style={theme === "dark" ? Style.slideDescriptionDark : Style.slideDescriptionLight}>
                                        {item.descriptionEN}
                                    </Text>
                                    <Text style={Style.slideText}>Read more</Text>
                                </View>
                            </View>
                        ))}
                    </Swiper>
                </View>



                <View style={theme === "dark" ? Style.navDark : Style.navLight}>
                    <TouchableOpacity style={Style.navButton}>
                        <Image
                            style={Style.navButtonImage}
                            source={require("./image/navGroup.png")}
                        />
                        <View style={Style.navButtonInfo}>
                            <Text style={Style.navButtonText}>Group</Text>
                            <Text style={Style.navButtonSubText}>Free TON</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.navButton}>
                        <Image
                            style={Style.navButtonImage}
                            source={require("./image/navGroup.png")}
                        />
                        <View style={Style.navButtonInfo}>
                            <Text style={Style.navButtonText}>News</Text>
                            <Text style={Style.navButtonSubText}>Online</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.navButton}>
                        <Image
                            style={Style.navButtonImage}
                            source={require("./image/navGroup.png")}
                        />
                        <View style={Style.navButtonInfo}>
                            <Text style={Style.navButtonText}>Wallet</Text>
                        </View>
                    </TouchableOpacity>

                </View>



            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

})

export default Account;