import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { content } from "./Wallet.config";
import { transactions } from "./Transactions";

import { GlobalStyle } from "../../../../global.style";
import { Style } from "./Wallet.style";

const Wallet = ({navigation}) => {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {
        Wallet,
        GetTokens,
        SendTokens,
        Graph,
        Transactions,
        Today,
        Yesterday,
    } = content[language]

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
                            source={require("./image/Vector.png")}
                        />
                    </TouchableOpacity>
                    <View style={Style.titleWrapper}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {Wallet}
                        </Text>
                    </View>
                    <TouchableOpacity 
                        style={Style.headerBlockRight}
                        // onPress={() => navigation.navigate({ name: 'Everscape' })}
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
                        <Image
                            style={Style.imageEverscape}
                            source={require("./image/Everscape.png")}
                        />
                        <View style={{marginLeft: 20}}>
                            <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                                Everscale
                            </Text>
                            <Text style={theme === "dark" ? Style.titleDark : Style.titleLight}>
                                147 000.00
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={GlobalStyle.blockItemOne}>
                    <TouchableOpacity style={theme === "dark" ? Style.buttonGet : Style.buttonSend}>
                        <Text style={theme === "dark" ? Style.buttonGetText : Style.buttonSendText}>
                            {GetTokens}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={theme === "dark" ? Style.buttonSend : Style.buttonGet}>
                        <Text style={theme === "dark" ? Style.buttonSendText : Style.buttonGetText}>
                            {SendTokens}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{padding: 7}}></View>
                <Text style={theme === "dark" ? GlobalStyle.titleDark : GlobalStyle.titleLight}>
                    {Graph}
                </Text>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <View style={{padding: 10}}>
                        <Image
                            style={Style.imageGraph}
                            source={require("./image/Graph.png")}
                        />
                    </View>
                </View>
                <View style={{padding: 7}}></View>
                <Text style={theme === "dark" ? GlobalStyle.titleDark : GlobalStyle.titleLight}>
                    {Transactions}
                </Text>
                <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                    {Today}
                </Text>
                <View style={{padding: 7}}></View>
                {transactions.map((item)=>(
                    <View 
                        style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}
                        key={item.id}
                    >
                        <View style={GlobalStyle.blockItemOne}>
                            <View style={Style.transactionsLeft}>
                                <Image
                                    style={Style.imageUser}
                                    source={require("./image/user.png")}
                                />
                                <View style={{marginLeft: 15}}>
                                    <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                                        {item.name}
                                    </Text>
                                    <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                                        {item.title}
                                    </Text>
                                </View>
                            </View>
                            <View style={Style.transactionsRight}>
                                <Text style={item.transaction[0] === '+' ? Style.textBuy : Style.textSell}>
                                    {item.transaction}
                                </Text>
                                <Image
                                    style={Style.imageVectorEverscape}
                                    source={require("./image/VectorEverscape.png")}
                                />
                            </View>
                        </View>
                    </View>
                ))}
                <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                    {Yesterday}
                </Text>
                <View style={{padding: 7}}></View>
                {transactions.map((item)=>(
                    <View 
                        style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}
                        key={item.id}
                    >
                        <View style={GlobalStyle.blockItemOne}>
                            <View style={Style.transactionsLeft}>
                                <Image
                                    style={Style.imageUser}
                                    source={require("./image/user.png")}
                                />
                                <View style={{marginLeft: 15}}>
                                    <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                                        {item.name}
                                    </Text>
                                    <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                                        {item.title}
                                    </Text>
                                </View>
                            </View>
                            <View style={Style.transactionsRight}>
                                <Text style={item.transaction[0] === '+' ? Style.textBuy : Style.textSell}>
                                    {item.transaction}
                                </Text>
                                <Image
                                    style={Style.imageVectorEverscape}
                                    source={require("./image/VectorEverscape.png")}
                                />
                            </View>
                        </View>
                    </View>
                ))}
            </View>


        </ScrollView>
    )
}

export default Wallet;