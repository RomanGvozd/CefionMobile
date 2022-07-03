import React, {useState, useRef} from "react";
import { useSelector } from "react-redux";
import { ScrollView, SafeAreaView, TextInput, Text, View, Image, TouchableOpacity } from 'react-native';
import { content } from "./NewsCreate.config";

import { actions, defaultActions, RichEditor, RichToolbar,} from "react-native-pell-rich-editor";

import { GlobalStyle } from "../../../../../global.style";
import { Style } from "./NewsCreate.style";

const NewsCreate = ({navigation}) => {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {
        NewArticle,
        SubmitToTheEditor,
        SendToDraft,
    } = content[language]

    const richText = useRef();

    const [text, setText] = useState("")

    return(
        <>
        <ScrollView style={theme === "dark" ? GlobalStyle.mainDark : GlobalStyle.mainLight}>


            <TouchableOpacity 
                style={theme === "dark" ? GlobalStyle.headerDark : GlobalStyle.headerLight} 
                onPress={() => navigation.navigate({ name: 'News' })}
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
                    {NewArticle}
                </Text>
            </TouchableOpacity>


            <View style={{padding: 20}}>

                <RichToolbar
                    editor={richText}
                    selectedIconTint="#2E9C3E"
                    iconTint={theme === "dark" ? "#fff" : "#000"}
                    actions={[
                        actions.insertImage,
                        actions.setBold,
                        actions.setItalic,
                        actions.insertBulletsList,
                        actions.insertOrderedList,
                        actions.insertLink,
                        actions.setStrikethrough,
                        actions.setUnderline,
                    ]}
                    style={theme === "dark" ? Style.headerDark : Style.headerLight}
                />
                <RichEditor
                    ref={richText}
                    initialHeight={250}
                    onChange={ descriptionText => {
                        console.log("descriptionText:", descriptionText);
                    }}
                    style={Style.textAreaDark}
                />
                <View></View>

            </View>


        </ScrollView>
        <View style={theme === "dark" ? Style.footerDark : Style.footerLight}>
            <TouchableOpacity style={Style.buttonSubmit}>
                <Text style={Style.buttonSubmitText}>
                    {SubmitToTheEditor}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.buttonDraft}>
                <Text style={Style.buttonDraftText}>
                    {SendToDraft}
                </Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

export default NewsCreate;