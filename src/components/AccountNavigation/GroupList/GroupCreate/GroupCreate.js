import React, {useState} from "react";
import { useSelector } from "react-redux";
import { ScrollView, Switch, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { content } from "./GroupCreate.config";

import { GlobalStyle } from "../../../../../global.style";
import { Style } from "./GroupCreate.style";

const GroupCreate = ({navigation, groupID}) => {
    const groups = useSelector((store) => store.groups);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    let group = groups.filter((item)=> item.id === groupID)
    group = group[0]

    const {
        NewGroup,
        GroupName,
        ShortDescription,
        AddNewWallet,
        Cancel,
        Save,
    } = content[language]

    return(
        <>
        <ScrollView style={theme === "dark" ? GlobalStyle.mainDark : GlobalStyle.mainLight}>

            <TouchableOpacity 
                style={theme === "dark" ? GlobalStyle.headerDark : GlobalStyle.headerLight} 
                onPress={() => navigation.navigate({ name: 'GroupList' })}
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
                    {NewGroup}
                </Text>
            </TouchableOpacity>

            <View style={{padding: 20}}>


                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight} >
                    <View style={Style.groupImage}>

                    </View>
                </View>
                <TextInput
                    style={theme === "dark" ? GlobalStyle.inputDark : GlobalStyle.inputLight}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder={GroupName}
                    placeholderTextColor={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
                />
                <TextInput
                    style={theme === "dark" ? GlobalStyle.inputDark : GlobalStyle.inputLight}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder={ShortDescription}
                    placeholderTextColor={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
                />
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight} >
                    <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                        Пригласительная ссылка на группу
                    </Text>
                </View>
                <View style={Style.addWalet}>
                    <View style={Style.addWaletBlock}>
                        <Text style={Style.addWaletText}>
                            +
                        </Text>
                    </View>
                    <Text style={Style.addWaletText}>
                        {AddNewWallet}
                    </Text>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight} >
                    <View style={GlobalStyle.blockItemOne}>
                    <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                        Everscale
                    </Text>
                    <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                        $406.27
                    </Text>
                    </View>
                </View>


            </View>


        </ScrollView>
        <View style={theme === "dark" ? Style.footerDark : Style.footerLight}>
            <View style={GlobalStyle.blockItemOne}>
                <TouchableOpacity style={Style.buttonCancel}>
                    <Text style={Style.buttonCancelText}>
                        {Cancel}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.buttonSave}>
                    <Text style={Style.buttonSaveText}>
                        {Save}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    )
}

export default GroupCreate;