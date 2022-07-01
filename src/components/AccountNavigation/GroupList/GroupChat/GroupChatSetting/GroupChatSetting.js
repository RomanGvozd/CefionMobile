import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { content } from "./GroupChatSetting.config";

import { GlobalStyle } from "../../../../../../global.style";
import { Style } from "./GroupChatSetting.style";

const GroupChatSetting = ({groupID, navigation}) => {

    const groups = useSelector((store) => store.groups);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const { 
        Back, 
        Edit,
        Files,
        Photo,
        Video,
        Links,
        GroupEvents,
        Members,
        LoginToZoom,
        AllUsers,
    } = content[language]

    let group = groups.filter((item)=> item.id === groupID)
    group = group[0]

    const [links, setLinks] = useState("files")
    const [showUsers, setShowUsers] = useState(false)


    return(
        <ScrollView style={theme === "dark" ? GlobalStyle.mainDark : GlobalStyle.mainLight}>


            <View 
                style={theme === "dark" ? GlobalStyle.headerDark : GlobalStyle.headerLight}
            >
                <View style={Style.headerBlock}>
                    <TouchableOpacity 
                        style={Style.headerBlockLeft}
                        onPress={() => navigation.navigate({ name: 'GroupChat' })}
                    >
                        <Image
                            style={GlobalStyle.image}
                            source={require("./image/Vector.png")}
                        />
                        <View style={{marginLeft: 12}}>
                            <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                                {Back}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={Style.titleWrapper}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {group.name}
                        </Text>
                    </View>
                    <TouchableOpacity 
                        style={Style.headerBlockRight}
                        onPress={() => navigation.navigate({ name: 'GroupChatEdit' })}
                    >
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {Edit}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={{padding: 20}}>

                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <View style={Style.blockImage}>
                        <Image
                            style={Style.image}
                            source={require("./image/group.png")}
                        />
                    </View>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <View style={GlobalStyle.blockItemOne}>
                        <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                            Everscale
                        </Text>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            $406.27
                        </Text>
                    </View>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                        Пригласительная ссылка на группу
                    </Text>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <View style={Style.fileHeader}>
                        <TouchableOpacity 
                        style={Style.fileHeaderButton}
                        onPress={()=>setLinks("files")}
                        >
                            <Text style={theme === "dark" ? Style.fileHeaderButtontextDark : Style.fileHeaderButtontextLight}>
                                {Files}
                            </Text>
                            {links === "files" && <View style={Style.fileHeaderButtonActive}>
                            </View>}
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={Style.fileHeaderButton}
                        onPress={()=>setLinks("photo")}
                        >
                            <Text style={theme === "dark" ? Style.fileHeaderButtontextDark : Style.fileHeaderButtontextLight}>
                                {Photo}
                            </Text>
                            {links === "photo" && <View style={Style.fileHeaderButtonActive}>
                            </View>}
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={Style.fileHeaderButton}
                        onPress={()=>setLinks("video")}
                        >
                            <Text style={theme === "dark" ? Style.fileHeaderButtontextDark : Style.fileHeaderButtontextLight}>
                                {Video}
                            </Text>
                            {links === "video" && <View style={Style.fileHeaderButtonActive}>
                            </View>}
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={Style.fileHeaderButton}
                        onPress={()=>setLinks("links")}
                        >
                            <Text style={theme === "dark" ? Style.fileHeaderButtontextDark : Style.fileHeaderButtontextLight}>
                                {Links}
                            </Text>
                            {links === "links" && <View style={Style.fileHeaderButtonActive}>
                            </View>}
                        </TouchableOpacity>

                    </View>
                    <View style={{padding: 50}}>

                    </View>
                </View>


                <Text style={theme === "dark" ? GlobalStyle.titleDark : GlobalStyle.titleLight}>
                    {GroupEvents}
                </Text>
                <View style={{padding: 5}}></View>
                {group.events.map((item)=>(
                    <View 
                    style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}
                    key={item.id}
                    >
                        <View style={GlobalStyle.blockItemOne}>
                            <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTtextDark}>
                                {item.date}
                            </Text>
                            <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                                {item.time}
                            </Text>
                        </View>
                        <View style={{paddingTop: 10}}>
                            <Text style={theme === "dark" ? GlobalStyle.titleDark : GlobalStyle.titleLight}>
                                {item.title}
                            </Text>
                        </View>
                        <View>
                            <Text style={theme === "dark" ? Style.subTextDark : Style.subTextLight}>
                                {item.description}
                            </Text>
                        </View>
                        <TouchableOpacity style={Style.button}>
                            <Text style={Style.buttonText}>
                                {LoginToZoom}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}


                <Text style={theme === "dark" ? GlobalStyle.titleDark : GlobalStyle.titleLight}>
                    {Members}
                </Text>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <TouchableOpacity 
                        style={Style.allUsersHeader}
                        onPress={()=>setShowUsers(!showUsers)}
                    >
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {AllUsers}
                        </Text>
                        <Image
                            style={showUsers ? Style.allUsersimageActive : Style.allUsersimage}
                            source={require("./image/Vector.png")}
                        />
                    </TouchableOpacity>
                    {showUsers && <>
                        {group.users.map((item)=>(
                            <TouchableOpacity 
                                style={theme === "dark" ? Style.userBlockDark : Style.userBlockLight}
                                key={item.id}
                            >
                                <Image
                                    style={Style.imageUsers}
                                    source={require("./image/user.png")}
                                />
                                <View style={{marginLeft: 20,}}>
                                    <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                                        {item.name}
                                    </Text>
                                    <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                                        {item.tagName}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                        <View style={{padding: 10}}></View>
                    </>}
    
                </View>

            </View>


        </ScrollView>
    )
}

export default GroupChatSetting;