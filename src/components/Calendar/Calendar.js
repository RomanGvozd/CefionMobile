import React, {useState} from "react";
import { useSelector } from "react-redux";
import { SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Style } from "./Calendar.style";
import { GlobalStyle } from "../../../global.style"
import { buttonsDays } from "./Calendar.buttons.days";
import moment from "moment";

import { content } from "./Calendar.config";

import NavFooter from "../NavFooter/NavFooter";

const Calendar = ({navigation}) => {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {Calendar, SearchForTask, GroupEvents, LoginToZoom} = content[language]

    const [days, setDays] = useState("Mo")

    return(
        <>
            <ScrollView style={theme === "dark" ? GlobalStyle.mainDark : GlobalStyle.mainLight}>
                <View style={theme === "dark" ? GlobalStyle.headerDark : GlobalStyle.headerLight}>
                    <View style={Style.headerBlock}>
                        <TouchableOpacity 
                            style={Style.headerBlockLeft}
                        >
                        </TouchableOpacity>
                        <View style={Style.titleWrapper}>
                            <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                                {Calendar}
                            </Text>
                        </View>
                        <TouchableOpacity 
                            style={Style.headerBlockRight}
                            onPress={() => navigation.navigate({ name: 'AddTask' })}
                        >
                            <Image
                                style={Style.headerImage}
                                source={require("./image/Vector.png")}
                            />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{padding: 20,}}>


                    <TextInput
                        style={Style.inputDark}
                        placeholder={SearchForTask}
                        placeholderTextColor={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
                    />
                    <View style={Style.week}>
                        <View style={GlobalStyle.blockItemOne}>
                            <Text style={theme === "dark" ? GlobalStyle.titleDark : GlobalStyle.titleLight}>
                                14 Sep 2021
                            </Text>
                            <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTtextDark}>
                                Wed 29 Sep
                            </Text>
                        </View>
                        <View style={GlobalStyle.blockItemOne}>
                            {buttonsDays.map((item)=>(
                                <TouchableOpacity 
                                    key={item.id}
                                    style={theme === "dark" ? Style.weekHeaderButtonDark : Style.weekHeaderButtonLight}
                                    onPress={()=>setDays(item.titleEN)}
                                >
                                    {language === "EN"
                                    ?<Text style={theme === "dark" ? Style.weekHeaderButtontextDark : Style.weekHeaderButtontextLight}>
                                        {item.titleEN}
                                    </Text>
                                    :<Text style={theme === "dark" ? Style.weekHeaderButtontextDark : Style.weekHeaderButtontextLight}>
                                        {item.titleRU}
                                    </Text>
                                    }
                                    <Text style={theme === "dark" ? Style.weekHeaderButtontextDark : Style.weekHeaderButtontextLight}>
                                        {moment().date()}
                                    </Text>
                                    {days === item.titleEN && <View style={Style.weekHeaderButtonActive}>
                                    </View>}
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={{padding: 10}}></View>
                        <View style={GlobalStyle.blockItemOne}>
                            <Text style={theme === "dark" ? GlobalStyle.titleDark : GlobalStyle.titleLight}>
                                {GroupEvents}
                            </Text>
                        </View>
                        <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                            <View style={GlobalStyle.blockItemOne}>
                                <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTtextDark}>
                                    12.02.2022
                                </Text>
                                <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                                    12:49 - 17:00
                                </Text>
                            </View>
                            <View style={{paddingTop: 10}}>
                                <Text style={theme === "dark" ? GlobalStyle.titleDark : GlobalStyle.titleLight}>
                                    Plan for a month
                                </Text>
                            </View>
                            <View>
                                <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                                    The topic of the conversation or chat in short form...
                                </Text>
                            </View>
                            <TouchableOpacity style={Style.button}>
                                <Text style={Style.buttonText}>
                                    {LoginToZoom}
                                </Text>
                            </TouchableOpacity>
                        </View>


                    </View>


                </View>

            </ScrollView>
            <NavFooter/>
        </>
    )
}

export default Calendar;