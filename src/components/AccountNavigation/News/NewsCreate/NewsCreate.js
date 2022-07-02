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


            <View style={{padding: 20,}}>


                <RichToolbar
                    editor={richText}
                    selectedIconTint="#873c1e"
                    iconTint="#fff"
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
                    style={Style.headerDark}
                />
                {/* <RichEditor
                    useContainer={false}
                    disabled={false}
                    ref={richText}
                    style={{
                        minHeight: 200,
                        flex: 1,
                        marginBottom: 2
                    }}
                    placeholder={"Start Writing Here"}
                    onChange={(text) => setText(text)}
                /> */}


            </View>


        </ScrollView>
    )
}

export default NewsCreate;