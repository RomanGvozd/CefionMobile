import React, {useState, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { content } from "./Chat.config";

import { GlobalStyle } from "../../../global.style";
import { Style } from "./Chat.style";

import { editItem } from "../../../common/store/chats/actions";

import BackArrowSvg from '../../../../Image/BackArrow.svg';
import OpenFileSvg from './image/OpenFile.svg';
import OpenSmileSvg from './image/OpenSmile.svg';
import ButtonSvg from './image/Button.svg';


const Chat = ({navigation, chatID, typeChat}) => {

    const dispatch = useDispatch()

    const user = useSelector((store) => store.user);
    const chats = useSelector((store) => store.chats);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    let chat = chats.filter((item)=> item.id === chatID)
    chat = chat[0]

    const {
        Back,
        SubmitPhoto,
        SendFile,
        Cancel,
    } = content[language]

    const [showModal, setShowModal] = useState(false)

    const [text, setText] = useState("")

    const sendMessage = () => {
        
        dispatch(editItem(chatID,{
            userID: user.id,
            message: text,
        }))
        setText("")
    }

    const scrollViewRef = useRef();

    const handleBack = () => {
        if (typeChat === "account") {
            navigation.navigate({ name: 'Account' })
        } else if (typeChat === "chatList") {
            navigation.navigate({ name: 'ChatList' })
        }
    }

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
                                onPress={handleBack}
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
                                    {chat.title}
                                </Text>
                            </View>
                            <TouchableOpacity 
                                style={Style.headerBlockRight}
                                onPress={() => navigation.navigate({ name: 'ChatSetting' })}
                            >
                                <Image
                                    style={Style.headerImage}
                                    source={require("./image/user.png")}
                                />
                            </TouchableOpacity>
                        </View>
                </View>


                <View style={{paddingTop: 20, paddingBottom: 100, paddingLeft: 20, paddingRight: 20}}>
                    {chat.message.map((item, index)=>(
                        <View key={index}>{item.userID === user.id 
                        ?<View style={Style.blockMessage}>
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
                        :<View style={Style.blockMessage}>
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
                    <OpenFileSvg fill={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}/>
                </TouchableOpacity>
                <View style={theme === "dark" ? Style.footerInputWrapperDark : Style.footerInputWrapperLight}>
                    <TextInput
                        style={theme === "dark" ? Style.footerInputDark : Style.footerInputLight}
                        onChangeText={setText}
                        value={text}
                    />
                    <TouchableOpacity style={Style.inputImageWrapper}>
                        <OpenSmileSvg fill={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                    style={Style.footerButtonWrapper}
                    onPress={sendMessage}
                >
                    <View style={Style.footerButton}>
                        <ButtonSvg fill={theme === "dark" ? "#1C1C1E" : "#fff"}/>
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
        </>
    )
}

export default Chat;