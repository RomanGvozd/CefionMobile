import React, {useState, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { content } from "./Chat.config";

import { GlobalStyle } from "../../../global.style";
import { Style } from "./Chat.style";

import { editItem } from "../../../common/store/chats/actions";

const Chat = ({navigation, chatId}) => {

    const dispatch = useDispatch()

    const chats = useSelector((store) => store.chats);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    let chat = chats.filter((item)=> item.id === chatId)
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

        // chat.message.push({
        //     userID: 1,
        //     message: text,
        // })
        dispatch(editItem(chatId,{
            userID: 1,
            message: text,
        }))
        setText("")
    }

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
                                onPress={() => navigation.navigate({ name: 'ChatList' })}
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
                        <View key={index}>{item.userID === 1 
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
        </>
    )
}

export default Chat;