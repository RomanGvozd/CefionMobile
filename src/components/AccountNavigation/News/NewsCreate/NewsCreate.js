import React, {useState, useRef} from "react";
import { useSelector } from "react-redux";
import { ScrollView, SafeAreaView, TextInput, Text, View, Image, TouchableOpacity } from 'react-native';
import { content } from "./NewsCreate.config";
import Select from "./Select/Select";

import { actions, defaultActions, RichEditor, RichToolbar,} from "react-native-pell-rich-editor";

import { GlobalStyle } from "../../../../../global.style";
import { Style } from "./NewsCreate.style";

import BackArrowSvg from '../../../Image/BackArrow.svg';

const NewsCreate = ({navigation}) => {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {
        NewArticle,
        SubmitToTheEditor,
        SendToDraft,
        inputEN,
        inputRU,
        textAreaEN,
        textAreaRU,
        AddHashtag,
    } = content[language]

    const richText = useRef();

    const [showFooter, setShowFooter] = useState(false)

    const [titleEN, setTitleEN] = useState("")
    const [titleRU, setTitleRU] = useState("")

    const [descriptionEN, setDescriptionEN] = useState("")
    const [descriptionRU, setDescriptionRU] = useState("")

    const [inputTagsValue, setInputTagsValue] = useState('')
    const [tags, setTags] = useState([])

    const handleAddTag = () => {
        setTags([...tags, `#${inputTagsValue}`])
    }

    const handleDeleteTag = (id) => {
        setTags(tags.filter(tag => tag !== id ))
    }

    const [selected, setSelected] = useState("Blockchain");
    const options = ["Blockchain", "NFT", "DeFI", "Business", "GameFi"];

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
                    <BackArrowSvg fill={theme === "dark" ? "#fff" : "#000"}/>
                </View>
                <Text style={theme === "dark" ? GlobalStyle.headerTitleDark : GlobalStyle.headerTitleLight}>
                    {NewArticle}
                </Text>
            </TouchableOpacity>


            <View style={{padding: 20}}>

                <TextInput
                    style={theme === "dark" ? Style.inputDark : Style.inputLight}
                    onChangeText={setTitleEN}
                    value={titleEN}
                    placeholder={inputEN}
                    placeholderTextColor={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
                />
                <TextInput
                    style={theme === "dark" ? Style.inputDark : Style.inputLight}
                    onChangeText={setTitleRU}
                    value={titleRU}
                    placeholder={inputRU}
                    placeholderTextColor={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
                />
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
                    placeholder={textAreaEN}
                    onChange={ (e)=> setDescriptionEN(e)}
                    style={Style.textAreaDark}
                />
                <View style={{padding: 10}}></View>
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
                    placeholder={textAreaRU}
                    onChange={ (e)=> setDescriptionRU(e)}
                    style={Style.textAreaDark}
                />
                <View style={{padding: 20}}></View>
                <TextInput
                    style={theme === "dark" ? Style.inputDark : Style.inputLight}
                    onChangeText={setInputTagsValue}
                    value={inputTagsValue}
                    placeholder={AddHashtag}
                    placeholderTextColor={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
                />
                <View style={{width: "100%", flexDirection: "row",  flexWrap: "wrap"}}>
                    {tags.map((item, index)=>(
                        <TouchableOpacity 
                        key={index}
                        style={Style.blockTag}
                        onPress={()=>handleDeleteTag(item)}
                        >
                            <Text style={Style.blockTagText}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <TouchableOpacity style={Style.buttonDraft} onPress={handleAddTag}>
                    <Text style={Style.buttonDraftText}>
                        {AddHashtag}
                    </Text>
                </TouchableOpacity>
                <View style={{padding: 10}}></View>
                <Select
                    selected={selected} 
                    setSelected={setSelected}
                    options={options}
                />
                <View style={{padding: 70}}></View>

            </View>


        </ScrollView>
        <View style={theme === "dark" ? Style.footerDark : Style.footerLight}>
            <TouchableOpacity 
                style={Style.footerButtonWrapper}
                onPress={()=>setShowFooter(!showFooter)}
            >
                <View style={Style.buttonLineDark}></View>  
            </TouchableOpacity>
            {showFooter && <>
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
            </>}
        </View>
        </>
    )
}

export default NewsCreate;