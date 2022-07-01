import React from "react";
import { useSelector } from "react-redux";
import { ScrollView, SafeAreaView, TextInput, Text, View, Image, TouchableOpacity } from 'react-native';
import moment from "moment";

import { Style } from "./Page.style";
import { GlobalStyle } from "../../../../../global.style";

const Page = ({pageID, navigation}) => {
    const newsPublish = useSelector((store) => store.news);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    let news = newsPublish.filter((item)=> item.id === pageID)
    news = news[0]

    return(
        <ScrollView style={theme === "dark" ? GlobalStyle.mainDark : GlobalStyle.mainLight}>


            <TouchableOpacity 
                style={theme === "dark" ? GlobalStyle.headerDark : GlobalStyle.headerLight} 
                onPress={() => navigation.navigate({ name: 'News' })}
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
                
                </Text>
            </TouchableOpacity>


            <View style={{padding: 20}}>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    {language === "EN"
                    ?<Text style={theme === "dark" ? GlobalStyle.titleDark : GlobalStyle.titleLight}>
                        {news.titleEN}
                    </Text>
                    :<Text style={theme === "dark" ? GlobalStyle.titleDark : GlobalStyle.titleLight}>
                        {news.titleRU}
                    </Text>
                    }
                    <Image
                        style={Style.newsImage}
                        source={require("./image/news.png")}
                    />
                    {language === "EN"
                    ?<Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                        {news.descriptionEN}
                    </Text>
                    :<Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                        {news.descriptionRU}
                    </Text>
                    }


                    <View style={Style.blockUser}>
                        <View style={{flexDirection: "row", alignItems: "center",}}>
                            <Image
                                style={Style.userImage}
                                source={require("./image/user.png")}
                            />
                            <Text style={theme === "dark" ? Style.userTextDark : Style.userTextLight}>
                                {news.author}
                            </Text>
                            {language === "EN"
                            ?<Text style={theme === "dark" ? Style.userSubTextDark : Style.userSubTtextDark}>
                                {moment(news.date, "YYYYMMDD h:mm:ss").locale('en').fromNow()}
                            </Text>
                            :<Text style={theme === "dark" ? Style.userSubTextDark : Style.userSubTtextDark}>
                                {moment(news.date, "YYYYMMDD h:mm:ss").locale('ru').fromNow()}
                            </Text>
                            }
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center",}}>
                            <Text style={theme === "dark" ? Style.userTextDark : Style.userTextLight}>
                                15
                            </Text>
                            <Text style={theme === "dark" ? Style.userTextDark : Style.userTextLight}>
                                423
                            </Text>
                        </View>
                    </View>


                </View>
            </View>
        </ScrollView>
    )
}

export default Page;