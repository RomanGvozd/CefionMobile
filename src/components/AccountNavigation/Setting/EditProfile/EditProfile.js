import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { content } from "./EditProfile.config";
import { userEdit } from "../../../../common/store/user/actions";

import { GlobalStyle } from '../../../../../global.style';
import { Style } from "./EditProfile.style";

const EditProfile = ({navigation}) => {

    const user = useSelector((store) => store.user);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const dispatch = useDispatch()

    const {
        Cancel,
        EditProfile,
        Ready,
        Name,
        Username,
        Password,
        Email,
        PhoneNumber,
    } = content[language]

    const [name, setName] = useState(user.name)
    const [tagName, setTagName] = useState(user.tagName)
    const [password, setPassword] = useState(user.password)
    const [email, setEmail] = useState(user.email)
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber)

    const handleSave = () => {
        dispatch(userEdit(name, tagName, password, email, phoneNumber))
        navigation.navigate({ name: 'Setting' })
    }

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
                        onPress={handleSave}
                    >
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {Ready}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={{padding: 20}}>


                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <Image
                        style={Style.imageUser}
                        source={require("./image/user.png")}
                    />
                </View>
                <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                    {Name}
                </Text>
                <View style={{padding: 5}}></View>
                <TextInput
                    style={theme === "dark" ? GlobalStyle.inputDark : GlobalStyle.inputLight}
                    onChangeText={setName}
                    value={name}
                    // placeholder={SearchForCalendar}
                    placeholderTextColor={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
                />
                <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                    {Username}
                </Text>
                <View style={{padding: 5}}></View>
                <TextInput
                    style={theme === "dark" ? GlobalStyle.inputDark : GlobalStyle.inputLight}
                    onChangeText={setTagName}
                    value={tagName}
                    // placeholder={SearchForCalendar}
                    placeholderTextColor={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
                />
                <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                    {Password}
                </Text>
                <View style={{padding: 5}}></View>
                <TextInput
                    style={theme === "dark" ? GlobalStyle.inputDark : GlobalStyle.inputLight}
                    onChangeText={setPassword}
                    value={password}
                    // placeholder={SearchForCalendar}
                    placeholderTextColor={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
                />
                <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                    {Email}
                </Text>
                <View style={{padding: 5}}></View>
                <TextInput
                    style={theme === "dark" ? GlobalStyle.inputDark : GlobalStyle.inputLight}
                    onChangeText={setEmail}
                    value={email}
                    // placeholder={SearchForCalendar}
                    placeholderTextColor={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
                />
                <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                    {PhoneNumber}
                </Text>
                <View style={{padding: 5}}></View>
                <TextInput
                    style={theme === "dark" ? GlobalStyle.inputDark : GlobalStyle.inputLight}
                    onChangeText={setPhoneNumber}
                    value={phoneNumber}
                    // placeholder={SearchForCalendar}
                    placeholderTextColor={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
                />

            </View>


        </ScrollView>
    )
}

export default EditProfile;