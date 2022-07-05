import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { ScrollView, Switch, Text, View, Image, TouchableOpacity } from 'react-native';

import { changeLanguage } from "../../../common/store/language/actions";
import { content } from "./Settilng.config";

import { Style } from "./Setting.style";
import { GlobalStyle } from "../../../../global.style";

import BackArrowSvg from '../../../Image/BackArrow.svg'

const Setting = ({setLogin, navigation }) => {
    const user = useSelector((store) => store.user);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);
    const dispatch = useDispatch();

    const {
        Setting, 
        English, 
        Language, 
        EnglishSelect, 
        RussianSelect, 
        InfoAndSettings, 
        name, 
        username, 
        Security,
        Email,
        PhoneNumber,
        Password,
        TwoFactorAuthentication,
        SecurityScreen,
        SeedPhrase,
        Show,
        Privacy,
        HideSubscribers,
        HideSubscriptions,
        HideWallet,
        HideWalletAdress,
        HideStatistics,
        Logout,
    } = content[language]

    const [showLanguage, setShowLanguage] = useState(false);

    const handleEnglish = () => {
        setShowLanguage(false)
        dispatch(changeLanguage("EN"))
    }

    const handleRussian = () => {
        setShowLanguage(false)
        dispatch(changeLanguage("RU"))
    }

    const [twoFactorAuthentication, setTwoFactorAuthentication] = useState(false);
    const [securityScreen, setSecurityScreen] = useState(false);

    const [hideSubscribers, setHideSubscribers] = useState(false);
    const [hideSubscriptions, setHideSubscriptions] = useState(false);
    const [hideWallet, setHideWallet] = useState(false);
    const [hideWalletAdress, setHideWalletAdress] = useState(false);
    const [hideStatistics, setHideStatistics] = useState(false);

    return(
        <>
        <ScrollView style={theme === "dark" ? GlobalStyle.mainDark : GlobalStyle.mainLight}>


            <TouchableOpacity style={theme === "dark" ? GlobalStyle.headerDark : GlobalStyle.headerLight} onPress={() => navigation.navigate({ name: 'Account' })}>
                <View 
                    style={GlobalStyle.imageWrapper}
                >
                    <BackArrowSvg fill={theme === "dark" ? "#fff" : "#000"}/>
                </View>
                <Text style={theme === "dark" ? GlobalStyle.headerTitleDark : GlobalStyle.headerTitleLight}>
                    {Setting}
                </Text>
            </TouchableOpacity>


            <View style={{padding: 20}}>


                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.titleLight}>
                    <Image
                        style={Style.imageUser}
                        source={require("./image/user.png")}
                    />
                </View>


                <Text style={theme === "dark" ? GlobalStyle.titleDark : GlobalStyle.titleLight}>
                    {Language}
                </Text>
                <View 
                    style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}
                    
                >
                    <TouchableOpacity style={GlobalStyle.blockItemOne} onPress={()=>setShowLanguage(!showLanguage)}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {English}
                        </Text>

                    </TouchableOpacity>
                    {showLanguage && 
                    <>
                        <TouchableOpacity style={Style.select}>
                            <Text 
                                style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}
                                onPress={handleEnglish}
                            >
                                {EnglishSelect}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Style.select}>
                            <Text 
                                style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}
                                onPress={handleRussian}
                            >
                                {RussianSelect}
                            </Text>
                        </TouchableOpacity>
                    </>}
                </View>


                <Text style={theme === "dark" ? GlobalStyle.titleDark : GlobalStyle.titleLight}>
                    {InfoAndSettings}
                </Text>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                        {user.name}
                    </Text>
                    <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTtextDark}>
                        {name}
                    </Text>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                        {user.tagName}
                    </Text>
                    <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTtextDark}>
                        {username}
                    </Text>
                </View>


                <Text style={theme === "dark" ? GlobalStyle.titleDark : GlobalStyle.titleLight}>
                    {Security}
                </Text>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                        nvt.isst.nute@gmail.com
                    </Text>
                    <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTtextDark}>
                        {Email}
                    </Text>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                        (207) 555-0119
                    </Text>
                    <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTtextDark}>
                        {PhoneNumber}
                    </Text>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                        ************
                    </Text>
                    <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTtextDark}>
                        {Password}
                    </Text>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <View style={GlobalStyle.blockItemOne}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {TwoFactorAuthentication}
                        </Text>
                        <Switch
                            
                            trackColor={{ false: "rgba(255, 255, 255, 0.15)", true: "#2E9C3E" }}
                            thumbColor={hideSubscribers ? "#fff" : "#fff"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setTwoFactorAuthentication(previousState => !previousState)}
                            value={twoFactorAuthentication}
                            style={{ transform: [{ scale: 1.3 }] }}
                        />
                    </View>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <View style={GlobalStyle.blockItemOne}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {SecurityScreen}
                        </Text>
                        <Switch
                            
                            trackColor={{ false: "rgba(255, 255, 255, 0.15)", true: "#2E9C3E" }}
                            thumbColor={hideSubscribers ? "#fff" : "#fff"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setSecurityScreen(previousState => !previousState)}
                            value={securityScreen}
                            style={{ transform: [{ scale: 1.3 }] }}
                        />
                    </View>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <View style={GlobalStyle.blockItemOne}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {SeedPhrase}
                        </Text>
                        <TouchableOpacity style={Style.showButton}>
                            <Text style={Style.showButtonText}>
                                {Show}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>



                <Text style={theme === "dark" ? GlobalStyle.titleDark : GlobalStyle.titleLight}>
                    {Privacy}
                </Text>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <View style={GlobalStyle.blockItemOne}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {HideSubscribers}
                        </Text>
                        <Switch
                            
                            trackColor={{ false: "rgba(255, 255, 255, 0.15)", true: "#2E9C3E" }}
                            thumbColor={hideSubscribers ? "#fff" : "#fff"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setHideSubscribers(previousState => !previousState)}
                            value={hideSubscribers}
                            style={{ transform: [{ scale: 1.3 }] }}
                        />
                    </View>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <View style={GlobalStyle.blockItemOne}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {HideSubscriptions}
                        </Text>
                        <Switch
                            
                            trackColor={{ false: "rgba(255, 255, 255, 0.15)", true: "#2E9C3E" }}
                            thumbColor={hideSubscriptions ? "#fff" : "#fff"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setHideSubscriptions(previousState => !previousState)}
                            value={hideSubscriptions}
                            style={{ transform: [{ scale: 1.3 }] }}
                        />
                    </View>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <View style={GlobalStyle.blockItemOne}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {HideWallet}
                        </Text>
                        <Switch
                            
                            trackColor={{ false: "rgba(255, 255, 255, 0.15)", true: "#2E9C3E" }}
                            thumbColor={hideWallet ? "#fff" : "#fff"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setHideWallet(previousState => !previousState)}
                            value={hideWallet}
                            style={{ transform: [{ scale: 1.3 }] }}
                        />
                    </View>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <View style={GlobalStyle.blockItemOne}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {HideWalletAdress}
                        </Text>
                        <Switch
                            
                            trackColor={{ false: "rgba(255, 255, 255, 0.15)", true: "#2E9C3E" }}
                            thumbColor={hideWalletAdress ? "#fff" : "#fff"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setHideWalletAdress(previousState => !previousState)}
                            value={hideWalletAdress}
                            style={{ transform: [{ scale: 1.3 }] }}
                        />
                    </View>
                </View>
                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <View style={GlobalStyle.blockItemOne}>
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {HideStatistics}
                        </Text>
                        <Switch
                            
                            trackColor={{ false: "rgba(255, 255, 255, 0.15)", true: "#2E9C3E" }}
                            thumbColor={hideStatistics ? "#fff" : "#fff"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setHideStatistics(previousState => !previousState)}
                            value={hideStatistics}
                            style={{ transform: [{ scale: 1.3 }] }}
                        />
                    </View>
                </View>

                <View style={{padding: 40}}>

                </View>
            </View>
        </ScrollView>
        <View style={theme === "dark" ? Style.footerDark : Style.footerLight}>
            <TouchableOpacity style={Style.logoutButton} onPress={()=>setLogin(false)}>
                <Text style={Style.logoutButtonText}>
                    {Logout}
                </Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

export default Setting;