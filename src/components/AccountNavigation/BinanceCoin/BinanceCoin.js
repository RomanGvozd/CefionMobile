import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { content } from "./BinanceCoin.config";

import { GlobalStyle } from "../../../../global.style";
import { Style } from "./BinanceCoin.style";

import BinanceCoinChart from "./BinanceCoinChart/BinanceCoinChart";
import BinanceConverter from "./BinanceConverter/BinanceConverter";
import BinanceStatistics from "./BinanceStatistics/BinanceStatistics";

const BinanceCoin = ({navigation}) => {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {
        MoreStats,
    } = content[language]

    return(
        <ScrollView style={theme === "dark" ? GlobalStyle.mainDark : GlobalStyle.mainLight}>


            <TouchableOpacity 
                style={theme === "dark" ? GlobalStyle.headerDark : GlobalStyle.headerLight} 
                onPress={() => navigation.navigate({ name: 'Account' })}
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
                    Binance Coin
                </Text>
            </TouchableOpacity>


            <View style={{padding: 20}}>


                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight} >
                    <Image
                        style={Style.imageBitcoin}
                        source={require("./image/Bitcoin.png")}
                    />
                    <View style={{padding: 7}}></View>
                    <View style={GlobalStyle.blockItemOneCenter}>
                        <View style={Style.statsButtonActive}>
                            <Text style={Style.statsButtonTextActive}>
                                Rank #3
                            </Text>
                        </View>
                        <View style={theme === "dark" ? Style.statsButtonDark : Style.statsButtonLight}>
                            <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                                Coin
                            </Text>
                        </View>
                        <View style={theme === "dark" ? Style.statsButtonDark : Style.statsButtonLight}>
                            <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                                On 970,541 watchlist
                            </Text>
                        </View>
                    </View>
                    <View style={{padding: 10}}></View>
                    <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                        Binance Coin Price (BNB)
                    </Text>
                    <View style={GlobalStyle.blockItemOne}>
                        <Text style={theme === "dark" ? Style.titleDark : Style.titleLight}>
                            $462.56
                        </Text>
                        <View style={Style.blockBinanceCoin}>
                            <Text style={theme === "dark" ? GlobalStyle.textLight : GlobalStyle.textDark}>
                                15.07%
                            </Text>
                        </View>
                    </View>
                    <View style={{padding: 5}}></View>
                    <View style={GlobalStyle.blockItemOne}>
                        <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                            Low: <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>$392.57</Text>
                        </Text>
                        <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                            High: <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>$467.25</Text>
                        </Text>
                        <View style={theme === "dark" ? Style.ButtonDark : Style.ButtonLight}>
                            <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                                24h
                            </Text>
                        </View>
                    </View>
                    <View style={{padding: 5}}></View>
                    <View style={theme === "dark" ? Style.lineDark : Style.lineLight}>
                        <View style={theme === "dark" ? Style.lineTrackDark : Style.lineTrackLight}>
                        </View>
                    </View>
                    <View style={{padding: 10}}></View>
                    <TouchableOpacity style={Style.buttonMore}>
                        <Text style={Style.buttonMoreText}>
                            {MoreStats}
                        </Text>
                    </TouchableOpacity>
                </View>

                <BinanceCoinChart />

                <BinanceConverter />

                <BinanceStatistics />
                

            </View>


        </ScrollView>
    )
}

export default BinanceCoin;