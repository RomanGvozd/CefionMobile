import React, {useState} from "react";
import { useSelector } from "react-redux";
import { ScrollView, Switch, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { content } from "./GroupList.config";
import GroupListItem from "./GroupListItem/GroupListItem";

import { GlobalStyle } from "../../../../global.style";
import { Style } from "./GroupList.style";

const GroupList = ({setGroupID, navigation}) => {

    const groups = useSelector((store) => store.groups);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const { Groups, NewGroup, SearchFotGroup } = content[language]

    const openChat = () => navigation.navigate({ name: 'GroupChat' })

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
                            source={require("../../../Image/BackArrow.png")}
                        />
                    </TouchableOpacity>
                    <View style={Style.titleWrapper}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {Groups}
                        </Text>
                    </View>
                    <TouchableOpacity 
                        style={Style.headerBlockRight}
                        onPress={() => navigation.navigate({ name: 'GroupCreate' })}
                    >
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {NewGroup}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={{padding: 20,}}>


                <TextInput
                    style={theme === "dark" ? Style.inputDark : Style.inputLight}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder={SearchFotGroup}
                    placeholderTextColor={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
                />

                {groups.map((item)=>(
                    <GroupListItem key={item.id} item={item} setGroupID={setGroupID} openChat={openChat}/>
                ))}

                
            </View>


        </ScrollView>
    )
}

export default GroupList;