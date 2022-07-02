import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { content } from "./BinanceStatistics.config";

import { GlobalStyle } from "../../../../../global.style";
import { Style } from "./BinanceStatistics.style";

import BinanceStatisticsMore from "./BinanceStatisticsMore/BinanceStatisticsMore";

const BinanceStatistics = ({show, setShow}) => {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {
        title,
        BinanceCoinPriceToday,
        BinanceCoinPrice,
        PriceChange,
        LowHigh24h,
        TradingVolume,
        VolumeMarketCap,
        MarketDominance,
        MarketRank,
        BinanceCoinPriceCap,
        MarketCap,
        FullyDilutedMarketCap,
        YesterdaysLowHigh,
        YesterdaysOpenClose,
        YesterdaysChange,
        YesterdaysVolume,
        LowHigh7d,
        LowHigh30d,
        LowHigh90d,
        LowHigh52week,
        AllTimeHigh,
        MayMonthAgo,
        BinanceCoinRoi,
        BinanceCoinSupply,
        CirculationSupply,
        TotalSupply,
        MaxSupply,
        ShowMore,
        ShowLess,
    } = content[language]

    return(
        <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>


            <Text style={theme === "dark" ? Style.titleDark : Style.titleLight}>
                {title}
            </Text>
            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                    {BinanceCoinPriceToday}
                </Text>
            </View>
            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <View style={GlobalStyle.blockItemOne}>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        {BinanceCoinPrice}
                    </Text>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        $457.86
                    </Text>
                </View>
            </View>
            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <View style={GlobalStyle.blockItemOne}>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        {PriceChange}
                    </Text>
                    <View style={{alignItems: "flex-end"}}>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            $33.81
                        </Text>
                        <Text style={Style.textGreen}>
                            7.99%
                        </Text>
                    </View>
                </View>
            </View>
            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <View style={GlobalStyle.blockItemOne}>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        {LowHigh24h}
                    </Text>
                    <View style={{alignItems: "flex-end"}}>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            $420.03 /
                        </Text>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            $467.25
                        </Text>
                    </View>
                </View>
            </View>
            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <View style={GlobalStyle.blockItemOne}>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        {TradingVolume}
                    </Text>
                    <View style={{alignItems: "flex-end"}}>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            $5,150,655,390.35.81
                        </Text>
                        <Text style={Style.textGreen}>
                            121.79%
                        </Text>
                    </View>
                </View>
            </View>
            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <View style={GlobalStyle.blockItemOne}>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        {VolumeMarketCap}
                    </Text>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        0.067
                    </Text>
                </View>
            </View>
            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <View style={GlobalStyle.blockItemOne}>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        {MarketDominance}
                    </Text>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        3,36%
                    </Text>
                </View>
            </View>
            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <View style={GlobalStyle.blockItemOne}>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        {MarketRank}
                    </Text>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        #3
                    </Text>
                </View>
            </View>


            <View style={{padding: 10}}></View>


            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                    {BinanceCoinPriceCap}
                </Text>
            </View>
            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <View style={GlobalStyle.blockItemOne}>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        {MarketCap}
                    </Text>
                    <View style={{alignItems: "flex-end"}}>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            $76,875,077,857.95
                        </Text>
                        <Text style={Style.textGreen}>
                            7.99%
                        </Text>
                    </View>
                </View>
            </View>
            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <View style={GlobalStyle.blockItemOne}>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        {FullyDilutedMarketCap}
                    </Text>
                    <View style={{alignItems: "flex-end"}}>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            $76,875,077,857.95
                        </Text>
                        <Text style={Style.textGreen}>
                            7.99%
                        </Text>
                    </View>
                </View>
            </View>

            {show && <BinanceStatisticsMore />}

            <TouchableOpacity 
                style={Style.button} 
                onPress={()=>setShow(!show)}
            >
                {show
                ?<Text style={Style.buttonText}>
                    {ShowLess}
                </Text>
                :<Text style={Style.buttonText}>
                    {ShowMore}
                </Text>
                }
            </TouchableOpacity>
        </View>
    )
}

export default BinanceStatistics;