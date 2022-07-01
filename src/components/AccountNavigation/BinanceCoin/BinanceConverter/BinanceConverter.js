import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { content } from "./BinanceConverter.config";

import { GlobalStyle } from "../../../../../global.style";
import { Style } from "./BinanceConverter.style";

const BinanceConverter = () => {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {title} = content[language]

    return(
        <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
            <Text style={theme === "dark" ? Style.titleDark : Style.titleLight}>
                {title}
            </Text>
            <View style={Style.blockBinance}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Image
                        style={Style.image}
                        source={require("./image/Bitcoin.png")}
                    />
                    <View style={{marginLeft: 10}}>
                        <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                            BNB
                        </Text>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            Binance coin
                        </Text>
                    </View>
                </View>
                <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                    1
                </Text>
            </View>
            <View style={Style.blockUSD}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Image
                        style={Style.image}
                        source={require("./image/Bitcoin.png")}
                    />
                    <View style={{marginLeft: 10}}>
                        <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                            USD
                        </Text>
                        <Text style={theme === "dark" ? Style.textDark : Style.textLight}>
                            Inited States Dollar
                        </Text>
                    </View>
                </View>
                <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                    457,86
                </Text>
            </View>
        </View>
    )
}

export default BinanceConverter;