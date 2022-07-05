import React, {useState, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { content } from "./GroupChat.config";
import { editItem } from '../../../../common/store/groups/actions'

import { GlobalStyle } from "../../../../../global.style";
import { Style } from "./GroupChat.style";

import BackArrowSvg from '../../../Image/BackArrow.svg';

const GroupChat = ({navigation, groupID}) => {
    const dispatch = useDispatch()

    const groups = useSelector((store) => store.groups);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    let group = groups.filter((item)=> item.id === groupID)
    group = group[0]

    const {
        Back,
        SubmitPhoto,
        SendFile,
        Cancel,
        Subscribe,
    } = content[language]

    const [showModal, setShowModal] = useState(false)

    const [text, setText] = useState("")

    const sendMessage = () => {

        // chat.message.push({
        //     userID: 1,
        //     message: text,
        // })
        dispatch(editItem(groupID,{
            userID: 1,
            message: text,
        }))
        setText("")
    }

    const[subscribe, setSubscribe] = useState(false)

    const scrollViewRef = useRef();

    return(
        <>
            <ScrollView 
                style={theme === "dark" ? GlobalStyle.mainDark : GlobalStyle.mainLight}
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
            >
                <View style={theme === "dark" ? GlobalStyle.headerDark : GlobalStyle.headerLight}>
                        <View style={Style.headerBlock}>
                            <TouchableOpacity 
                                style={Style.headerBlockLeft}
                                onPress={() => navigation.navigate({ name: 'GroupList' })}
                            >
                                <BackArrowSvg fill={theme === "dark" ? "#fff" : "#000"}/>
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
                                onPress={() => navigation.navigate({ name: 'GroupChatSetting' })}
                            >
                                <Image
                                    style={Style.headerImage}
                                    source={require("./image/group.png")}
                                />
                            </TouchableOpacity>
                        </View>
                </View>


                <View style={{paddingTop: 20, paddingBottom: 100, paddingLeft: 20, paddingRight: 20}}>
                    {group.message.map((item, index)=>(
                        <View key={index}>{item.userID === 1 
                        ?<View style={Style.blockMessage} >
                            <View style={theme === "dark" ? Style.blockMessageTextWrapperDark : Style.blockMessageTextWrapperLight}>
                                <Text style={theme === "dark" ? GlobalStyle.textLight : GlobalStyle.textDark}>
                                    {item.message}
                                </Text>
                            </View>
                            <View style={Style.blockMessageImageWrapper}>
                            <Image
                                style={Style.blockMessageImage}
                                source={require("./image/user2.png")}
                            />
                            </View>
                        </View>
                        :<View style={Style.blockMessage} >
                            <Image
                                style={Style.blockMessageImage}
                                source={require("./image/user.png")}
                            />
                            <View style={theme === "dark" ? Style.blockMessageTextWrapperLight : Style.blockMessageTextWrapperDark}>
                                <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                                    {item.message}
                                </Text>
                            </View>
                        </View>
                        }</View>
                    ))}
                </View>


            </ScrollView>
            <View style={theme === "dark" ? Style.footerDark : Style.footerLight}>
                <TouchableOpacity style={Style.footerImageWrapper} onPress={()=>setShowModal(true)}>
                    <Image
                        style={Style.footerImage}
                        source={require("./image/openFile.png")}
                    />
                </TouchableOpacity>
                <View style={theme === "dark" ? Style.footerInputWrapperDark : Style.footerInputWrapperLight}>
                    <TextInput
                        style={theme === "dark" ? Style.footerInputDark : Style.footerInputLight}
                        onChangeText={setText}
                        value={text}
                    />
                    <TouchableOpacity style={Style.inputImageWrapper}>
                        <Image
                            style={Style.inputImage}
                            source={require("./image/openSmile.png")}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                    style={Style.footerButtonWrapper}
                    onPress={sendMessage}
                >
                    <View style={Style.footerButton}>
                        <Image
                            style={Style.footerButtonImage}
                            source={require("./image/button.png")}
                        />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={showModal ? Style.modalActive : Style.modal}>
                <View style={theme === "dark" ? Style.modalDark : Style.modalLight}>
                    <TouchableOpacity style={Style.modalHeader}>
                        <View style={Style.modalHeaderButton}>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={theme === "dark" ? Style.modalButtonDark : Style.modalButtonLight}>
                        <Text style={theme === "dark" ? Style.modalButtonTextDark : Style.modalButtonTextLight}>
                            {SubmitPhoto}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={theme === "dark" ? Style.modalButtonDark : Style.modalButtonLight}>
                        <Text style={theme === "dark" ? Style.modalButtonTextDark : Style.modalButtonTextLight}>
                           {SendFile}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={theme === "dark" ? Style.modalButtonCancelDark : Style.modalButtonCancelLight}
                        onPress={()=>setShowModal(false)}
                    >
                        <Text style={theme === "dark" ? Style.modalButtonTextDark : Style.modalButtonTextLight}>
                            {Cancel}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            {!subscribe && <View style={theme === "dark" ? Style.groupSubscribeDark : Style.groupSubscribeLight}>
                <TouchableOpacity 
                    style={theme === "dark" ? Style.groupSubscribeButtomDark : Style.groupSubscribeButtomLight}
                    onPress={()=>setSubscribe(true)}
                >
                    <Text style={theme === "dark" ? Style.groupSubscribeButtomTextDark : Style.groupSubscribeButtomTextLight}>
                        {Subscribe}
                    </Text>
                </TouchableOpacity>
            </View>}
        </>
    )
}

export default GroupChat;