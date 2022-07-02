import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { content } from "./BinanceCoinMore.config";

import { GlobalStyle } from "../../../../../global.style";
import { Style } from "../BinanceCoin.style";

const BinanceCionMore = () => {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {
        MarketCap,
        FullyDilutedMarketCap,
        Volume,
        VolumeMarketCap,
        CirculationSupply,
        MaxSupply,
        TotalSupply,
    } = content[language]

    return(
        <>
            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <View style={GlobalStyle.blockItemOne}>
                    <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                        {MarketCap}
                    </Text>
                    <View style={{alignItems: "flex-end", flexDirection: "row"}}>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            $76,771,796,513
                        </Text>
                        <View style={{padding: 5}}></View>
                        <Text style={Style.textGreen}>
                            7.75%
                        </Text>
                    </View>
                </View>
            </View>
            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <View style={GlobalStyle.blockItemOne}>
                    <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                        {FullyDilutedMarketCap}
                    </Text>
                    <View style={{alignItems: "flex-end", flexDirection: "row"}}>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            $76,771,796,513
                        </Text>
                        <View style={{padding: 5}}></View>
                        <Text style={Style.textGreen}>
                            7.75%
                        </Text>
                    </View>
                </View>
            </View>
            <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
                <View style={GlobalStyle.blockItemOne}>
                    <View>
                        <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                            {Volume}
                        </Text>
                        <View style={{padding: 5}}></View>
                        <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                            {VolumeMarketCap}
                        </Text>
                    </View>
                    <View style={{alignItems: "flex-end"}}>
                        <View style={{alignItems: "flex-end", flexDirection: "row"}}>
                            <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                                $76,771,796,513
                            </Text>
                            <View style={{padding: 5}}></View>
                            <Text style={Style.textGreen}>
                                7.75%
                            </Text>
                        </View>
                        <View style={{padding: 5}}></View>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            0.067
                        </Text>
                    </View>
                </View>
            </View>
            <View style={GlobalStyle.blockItemOne}>
                <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                    {CirculationSupply}
                </Text>
                <View style={{alignItems: "flex-end", flexDirection: "row"}}>
                    <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                        168,137,036.00 BNB
                    </Text>
                    <View style={{padding: 5}}></View>
                    <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                        100%
                    </Text>
                </View>
            </View>
            <View style={{padding: 7}}></View>
            <View style={theme === "dark" ? Style.lineDark : Style.lineLight}>
                <View style={theme === "dark" ? Style.lineTrackDark : Style.lineTrackLight}>
                </View>
            </View>
            <View style={{padding: 10}}></View>
            <View style={GlobalStyle.blockItemOne}>
                <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                    {MaxSupply}
                </Text>
                <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                    168,137,036
                </Text>
            </View>
            <View style={{padding: 7}}></View>
            <View style={GlobalStyle.blockItemOne}>
                <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                    {TotalSupply}
                </Text>
                <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                    168,137,036
                </Text>
            </View>
            <View style={{padding: 10}}></View>
        </>
    )
}

export default BinanceCionMore;