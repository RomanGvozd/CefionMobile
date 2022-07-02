import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { content } from "./GroupChatEdit.config";
import RestrictionsModal from "./RestrictionsModal/RestrictionsModal";

import { GlobalStyle } from "../../../../../../../global.style";
import { Style } from "./GroupChatEdit.style";

const GroupChatEdit = ({groupID, navigation}) => {

    const groups = useSelector((store) => store.groups);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {
        Back,
        Ready,
        GroupName,
        Control,
        RoleManagement,
        RemoveRestrictions,
        restriction,
        AddWallet,
        YourBalance,
        AddEvent,
    } = content[language]

    let group = groups.filter((item)=> item.id === groupID)
    group = group[0]

    const [show, setShow] = useState(false)

    return(
        <>
        <ScrollView style={theme === "dark" ? GlobalStyle.mainDark : GlobalStyle.mainLight}>


            <View 
                style={theme === "dark" ? GlobalStyle.headerDark : GlobalStyle.headerLight}
            >
                <View style={Style.headerBlock}>
                    <TouchableOpacity 
                        style={Style.headerBlockLeft}
                        onPress={() => navigation.navigate({ name: 'GroupChatSetting' })}
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
                    >
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {Ready}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>



            <View style={{padding: 20,}}>


                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <Image
                        style={Style.groupImage}
                        source={require("./image/group.png")}
                    />
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                        {group.name}
                    </Text>
                    <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                        {GroupName}
                    </Text>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                        Пригласительная ссылка на группу
                    </Text>
                </View>

                <Text style={theme === "dark" ? GlobalStyle.titleDark : GlobalStyle.titleLight}>
                    {Control}
                </Text>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <View style={GlobalStyle.blockItemOne}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {RoleManagement}
                        </Text>
                        <Image
                            style={Style.image}
                            source={require("./image/Vector.png")}
                        />
                    </View>
                </View>
                <TouchableOpacity 
                    style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}
                    onPress={()=>setShow(true)}
                >
                    <View style={GlobalStyle.blockItemOne}>
                        <View>
                            <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                                {RemoveRestrictions}
                            </Text>
                            <Text style={GlobalStyle.greenText}>
                                {restriction}
                            </Text>
                        </View>
                        <Image
                            style={Style.image}
                            source={require("./image/Vector.png")}
                        />
                    </View>
                </TouchableOpacity>
                <View style={GlobalStyle.blockItemOne}>
                    <View style={Style.addWalett}>
                        <View style={Style.addWalettBlock}>
                            <Text style={Style.addWalettBlockText}>
                                +
                            </Text>
                        </View>
                        <Text style={Style.addWalettText}>
                            {AddWallet}
                        </Text>
                    </View>
                    <View style={theme === "dark" ? Style.balanceDark : Style.balanceLight}>
                        <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                            {YourBalance}
                        </Text>
                        <Text style={theme === "dark" ? Style.balanceTextDark : Style.balanceTextLight}>
                            $406.27
                        </Text>
                    </View>
                </View>
                <View style={{padding: 10}}></View>
                <TouchableOpacity 
                    style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}
                    onPress={() => navigation.navigate({ name: 'GroupAddTask' })}
                >
                    <View style={GlobalStyle.blockItemOne}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {AddEvent}
                        </Text>
                        <Image
                            style={Style.image}
                            source={require("./image/Vector.png")}
                        />
                    </View>
                </TouchableOpacity>

            </View>


        </ScrollView>
        {show && <RestrictionsModal show={show} setShow={setShow}/>}
        </>
    )
}

export default GroupChatEdit;