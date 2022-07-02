import React from 'react';
import { useSelector } from "react-redux";
import { ScrollView, SafeAreaView, TextInput, Text, View, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';
import 'moment/locale/ru';

import { Style } from "./MarketNews.style";
import { GlobalStyle } from '../../../../../global.style';

const MarketNews = ({type, openNewsPage, setPageID}) => {
    let news = useSelector((store) => store.news);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    if (type !== "AllNews" && type !== "Popular") {
        news = news.filter(item=> item.type === type)
    }
    
    return(
        <>
            {news.map((item)=>(
                <TouchableOpacity 
                    key={item.id}
                    style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}
                    onPress={()=>{
                        openNewsPage()
                        setPageID(item.id)
                    }}
                >
                    <View style={GlobalStyle.blockItemOne}>
                        <Image
                            style={Style.newsImage}
                            source={require("./image/news.png")}
                        />
                        <View style={Style.blockItemText}>
                            {language === "EN" 
                            ?<Text style={theme === "dark" ? Style.titleDark : Style.titleLight}>
                                News Title
                            </Text>
                            :<Text style={theme === "dark" ? Style.titleDark : Style.titleLight}>
                                News Title
                            </Text>
                            }
                            {language === "EN"
                            ?<Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                                {item.titleEN}
                            </Text>
                            :<Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                                {item.titleRU}
                            </Text>
                            }

                            {language === "EN" 
                            ?<Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTtextLight}>
                                {moment(item.date, "YYYYMMDD h:mm:ss").locale('en').fromNow()}
                            </Text>
                            :<Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTtextLight}>
                                {moment(item.date, "YYYYMMDD h:mm:ss").locale('ru').fromNow()}
                            </Text>
                            }

                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </>
    )
}

export default MarketNews;