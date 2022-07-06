import React, {useState} from "react";
import { useSelector } from "react-redux";
import { ScrollView, Switch, Text, View, Image, TouchableOpacity, TextInput, Animated } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { content } from "./GroupListItem.config";

import { GlobalStyle } from "../../../../../global.style";
import { Style } from "./GroupListItem.style";

const GroupListItem = ({item, setGroupID, openChat}) => {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const { users, Leave } = content[language]

    const renderRight = (progress, dragX) => {
        return (
            <TouchableOpacity style={Style.buttonDelete}>
                <Animated.Text style={Style.buttonText}>
                    {Leave}
                </Animated.Text>
            </TouchableOpacity>
        );
    };

    return(
        <Swipeable 
            renderRightActions={renderRight}
            key={item.id}
        >
            <TouchableOpacity 
                style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}
                onPress={()=>{
                    openChat()
                    setGroupID(item.id)
                }}
                activeOpacity={1}
                
            >
                <View style={GlobalStyle.blockItemOneCenter}>
                    <Image
                        style={Style.image}
                        source={require("./image/group.png")}
                    />
                    <View style={{marginLeft: 20,}}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {item.name}
                        </Text>
                        <View style={{padding: 17}}></View>
                        <View style={Style.blockText}>
                            <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                                {`${item.users.length} ${users}`}
                            </Text>
                            <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                                $475.22
                            </Text>
                            <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                                15
                            </Text>
                            
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Swipeable>
    )
}

export default GroupListItem;