import React, {useState} from "react";
import { useSelector } from "react-redux";
import { ScrollView, SafeAreaView, TextInput, Text, View, Image, TouchableOpacity } from 'react-native';
import { content } from "./News.config";
import NewsNav from "./NewsNav/NewsNav";
import MarketNews from "./MarketNews/MarketNews";

import { Style } from "./News.style";
import { GlobalStyle } from "../../../../global.style";

const News = ({setPageID, navigation}) => {
    const news = useSelector((store) => store.news);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {
        News,
        SearchForCalendar,
    } = content[language] 

    const [type, setType] = useState('AllNews')

    const openNewsPage = () => navigation.navigate({ name: 'Page' })

    return(
        <ScrollView style={theme === "dark" ? GlobalStyle.mainDark : GlobalStyle.mainLight}>


            <View style={theme === "dark" ? GlobalStyle.headerDark : GlobalStyle.headerLight}>
                <View style={Style.headerBlock}>
                    <TouchableOpacity 
                        style={Style.headerBlockLeft}
                        onPress={() => navigation.navigate({ name: 'Account' })}
                    >
                        <Image
                            style={GlobalStyle.image}
                            source={require("../../../Image/BackArrow.png")}
                        />
                    </TouchableOpacity>
                    <View style={Style.titleWrapper}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {News}
                        </Text>
                    </View>
                    <TouchableOpacity 
                        style={Style.headerBlockRight}
                        onPress={() => navigation.navigate({ name: 'NewsCreate' })}
                    >
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            New Article
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={{padding: 20}}>

                <TextInput
                    style={theme === "dark" ? Style.inputDark : Style.inputLight}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder={SearchForCalendar}
                    placeholderTextColor={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
                />
                <NewsNav setType={setType} type={type}/>
                <MarketNews type={type} openNewsPage={openNewsPage} setPageID={setPageID}/>

            </View>


        </ScrollView>
    )
}

export default News;