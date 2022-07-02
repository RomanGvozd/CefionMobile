import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { content } from "./RestrictionsModal.config";

import { GlobalStyle } from "../../../../../../../../global.style";
import { Style } from "./RestrictionsModal.style";

const RestrictionsModal = ({show, setShow}) => {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {
        title,
        Confirm,
        Cancel,
        Balance,
        TopUp,
    } = content[language]

    return(
        <View style={Style.background}>
        <View style={theme === "dark" ? Style.blockDark : Style.blockLight}>
            <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                {title}
            </Text>
            <View style={{padding: 10}}></View>
            <TouchableOpacity style={Style.confirm}>
                <Text style={Style.confirmText}>
                    {Confirm}
                </Text>
            </TouchableOpacity>
            <View style={{padding: 10}}></View>

            <TouchableOpacity 
                style={Style.cancel}
                onPress={()=>setShow(false)}
            >
                <Text style={Style.cancelText}>
                    {Cancel}
                </Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}

export default RestrictionsModal;