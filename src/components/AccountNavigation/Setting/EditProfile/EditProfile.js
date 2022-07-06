import React from "react";
import { useSelector } from "react-redux";
import { ScrollView, Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { content } from "./EditProfile.config";

import { GlobalStyle } from '../../../../../global.style';
import { Style } from "./EditProfile.style";

const EditProfile = ({navigation}) => {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {
        Cancel,
        EditProfile,
        Ready,
    } = content[language]

    return(
        <ScrollView style={theme === "dark" ? GlobalStyle.mainDark : GlobalStyle.mainLight}>


            <View style={theme === "dark" ? GlobalStyle.headerDark : GlobalStyle.headerLight}>
                <View style={Style.headerBlock}>
                    <TouchableOpacity 
                        style={Style.headerBlockLeft}
                        onPress={() => navigation.navigate({ name: 'Setting' })}
                    >
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {Cancel}
                        </Text>
                    </TouchableOpacity>
                    <View style={Style.titleWrapper}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {EditProfile}
                        </Text>
                    </View>
                    <TouchableOpacity 
                        style={Style.headerBlockRight}
                        // onPress={() => navigation.navigate({ name: 'Setting' })}
                    >
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {Ready}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={{padding: 20}}>

            </View>


        </ScrollView>
    )
}

export default EditProfile;