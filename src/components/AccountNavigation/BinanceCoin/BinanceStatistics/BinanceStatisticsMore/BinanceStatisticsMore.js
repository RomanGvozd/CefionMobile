import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { content } from "../BinanceStatistics.config";

import { GlobalStyle } from "../../../../../../global.style";
import { Style } from "../BinanceStatistics.style";

const BinanceStatisticsMore = () => {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {
        BinanceCoinPriceToday,
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
    } = content[language]

    return(
        <>
            <View style={{padding: 10}}></View>

            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                    {BinanceCoinPriceToday}
                </Text>
            </View>
            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <View style={GlobalStyle.blockItemOne}>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        {YesterdaysLowHigh}
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
                        {YesterdaysOpenClose}
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
                        {YesterdaysChange}
                    </Text>
                    <Text style={Style.textGreen}>
                        7.99%
                    </Text>
                </View>
            </View>
            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <View style={GlobalStyle.blockItemOne}>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        {YesterdaysVolume}
                    </Text>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        $76,875,077,857.95
                    </Text>
                </View>
            </View>

            <View style={{padding: 10}}></View>

            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                    {BinanceCoinPriceToday}
                </Text>
            </View>
            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <View style={GlobalStyle.blockItemOne}>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        {LowHigh7d}
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
                        {LowHigh30d}
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
                        {LowHigh90d}
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
                        {LowHigh52week}
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
                    <View>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            {AllTimeHigh}
                        </Text>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            {MayMonthAgo}
                        </Text>
                    </View>

                    <View style={{alignItems: "flex-end"}}>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            $420.03 /
                        </Text>
                        <Text style={Style.textRed}>
                            7.99%
                        </Text>
                    </View>
                </View>
            </View>
            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <View style={GlobalStyle.blockItemOne}>
                    <View>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            {AllTimeHigh}
                        </Text>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            {MayMonthAgo}
                        </Text>
                    </View>
                    <View style={{alignItems: "flex-end"}}>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            $420.03 /
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
                        {BinanceCoinRoi}
                    </Text>
                    <Text style={Style.textGreen}>
                        7.99%
                    </Text>
                </View>
            </View>

            <View style={{padding: 10}}></View>

            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                    {BinanceCoinSupply}
                </Text>
            </View>
            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <View style={GlobalStyle.blockItemOne}>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        {CirculationSupply}
                    </Text>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        168 137 036 BNB
                    </Text>
                </View>
            </View>
            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <View style={GlobalStyle.blockItemOne}>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        {TotalSupply}
                    </Text>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        168 137 036 BNB
                    </Text>
                </View>
            </View>
            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <View style={GlobalStyle.blockItemOne}>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        {MaxSupply}
                    </Text>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        168 137 036 BNB
                    </Text>
                </View>
            </View>
        </>
    )
}

export default BinanceStatisticsMore;