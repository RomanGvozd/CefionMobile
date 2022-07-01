import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { content } from "./BinanceCoinChart.config";
import { buttonsHeader } from "./buttons.array";
import { buttons } from "./buttons.array";

import { GlobalStyle } from "../../../../../global.style";
import { Style } from "./BinanceCoinChart.style";

const BinanceCoinChart = () => {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {title} = content[language]

    const [buttonHeaderActive, setButtonHeaderActive] = useState("Price")
    const [buttonActive, setButtonActive] = useState("1D")


    return(
        <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
            <Text style={theme === "dark" ? Style.titleDark : Style.titleLight}>
                {title}
            </Text>
            <View style={{padding: 5}}></View>
            <View style={GlobalStyle.blockItemOne}>
                {buttonsHeader.map((item)=>(
                    <View key={item.id}>{buttonHeaderActive === item.titleEN
                        ?<TouchableOpacity 
                            style={Style.ButtonActive}
                            onPress={()=>setButtonHeaderActive(item.titleEN)}
                        >
                            {language === "EN"
                            ?<Text style={Style.ButtonTextActive}>
                                {item.titleEN}
                            </Text>
                            :<Text style={Style.ButtonTextActive}>
                                {item.titleRU}
                            </Text>
                            }

                        </TouchableOpacity>
                        :<TouchableOpacity 
                            style={theme === "dark" ? Style.ButtonDark : Style.ButtonLight}
                            onPress={()=>setButtonHeaderActive(item.titleEN)}
                        >
                            {language === "EN"
                            ?<Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                                {item.titleEN}
                            </Text>
                            :<Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                                {item.titleRU}
                            </Text>
                            }
                        </TouchableOpacity>
                    }</View>
                ))}
            </View>
            <View style={{padding: 5}}></View>
            <View style={GlobalStyle.blockItemOne}>
                {buttons.map((item)=>(
                    <View key={item.id}>{buttonActive === item.titleEN
                        ?<TouchableOpacity 
                            style={Style.ButtonActive}
                            onPress={()=>setButtonActive(item.titleEN)}
                        >
                            {language === "EN"
                            ?<Text style={Style.ButtonTextActive}>
                                {item.titleEN}
                            </Text>
                            :<Text style={Style.ButtonTextActive}>
                                {item.titleRU}
                            </Text>
                            }

                        </TouchableOpacity>
                        :<TouchableOpacity 
                            style={theme === "dark" ? Style.ButtonDark : Style.ButtonLight}
                            onPress={()=>setButtonActive(item.titleEN)}
                        >
                            {language === "EN"
                            ?<Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                                {item.titleEN}
                            </Text>
                            :<Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                                {item.titleRU}
                            </Text>
                            }
                        </TouchableOpacity>
                    }</View>
                ))}
            </View>
            <Image
                style={Style.image}
                source={require("./image/Chart.png")}
            />
        </View>
    )
}

export default BinanceCoinChart;