import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { content } from "./Everscape.config";

import { GlobalStyle } from "../../../../../global.style";
import { Style } from "./Everscape.style";

import BackArrowSvg from '../../../../Image/BackArrow.svg';
import CopySvg from './image/Copy.svg';
import ShowSvg from './image/Show.svg';
import EverscaleSvg from './image/Everscale.svg';

const Everscape = ({navigation}) => {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {
        WalletAdress,
        PublickKey,
        PrivateKey,
        Description,
    } = content[language]

    const [showKey, setShowKey] = useState(true)

    return(
        <ScrollView style={theme === "dark" ? GlobalStyle.mainDark : GlobalStyle.mainLight}>


            <View style={theme === "dark" ? GlobalStyle.headerDark : GlobalStyle.headerLight}>
                <View style={Style.headerBlock}>
                    <TouchableOpacity 
                        style={Style.headerBlockLeft}
                        onPress={() => navigation.navigate({ name: 'Account' })}
                    >
                        <BackArrowSvg fill={theme === "dark" ? "#fff" : "#000"}/>
                    </TouchableOpacity>
                    <View style={Style.titleWrapper}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            Everscape
                        </Text>
                    </View>
                    <TouchableOpacity 
                        style={Style.headerBlockRight}
                        // onPress={() => navigation.navigate({ name: 'ChatSetting' })}
                    >
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            FAQ
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={{padding: 20}}>


                <View 
                    style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}
                >
                    <View style={GlobalStyle.blockItemOneCenter}>
                        <EverscaleSvg />
                        <View style={{marginLeft: 20}}>
                            <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                                Everscale
                            </Text>
                            <Text style={theme === "dark" ? Style.titleDark : Style.titleLight}>
                                147 000.00
                            </Text>
                            <View style={{padding: 5}}></View>
                            <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                                $406.27
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                        {WalletAdress}
                    </Text>
                    <View style={{padding: 5}}></View>
                    <View style={GlobalStyle.blockItemOne}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            0x9129831203981dj192nd...
                        </Text>
                        <TouchableOpacity>
                            <CopySvg fill={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                        {PublickKey}
                    </Text>
                    <View style={{padding: 5}}></View>
                    <View style={GlobalStyle.blockItemOne}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            0x9129831203981dj192nd...
                        </Text>
                        <TouchableOpacity>
                            <CopySvg fill={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                        {PrivateKey}
                    </Text>
                    <View style={{padding: 5}}></View>
                    <View style={GlobalStyle.blockItemOne}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {showKey ? "*********************" : "0x9129831203981dj192nd..."}
                        </Text>
                        <View style={{flexDirection: "row"}}>
                            <TouchableOpacity onPress={()=>setShowKey(!showKey)}>
                                <ShowSvg fill={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}/>
                            </TouchableOpacity>
                            <View style={{padding: 7}}></View>
                            <TouchableOpacity>
                                <CopySvg fill={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                        {Description}
                    </Text>
                </View>


            </View>


        </ScrollView>
    )
}

export default Everscape;