import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Link, useLocation } from "react-router-native";
import { Style } from "./NavFooter.style";

const NavFooter = () => {
    const theme = useSelector((store) => store.theme.theme);

    const {pathname} = useLocation();

    return(
        <View style={theme === "dark" ? Style.footerDark : Style.footerLight}>
            
            <TouchableOpacity style={pathname === "/" ? Style.footerButtonActive : Style.footerButton}>
                <Link to="/">
                    <Image
                        style={Style.Image}
                        source={require("./image/account.png")}
                    />
                </Link>
            </TouchableOpacity> 
            <TouchableOpacity style={pathname === "/search" ? Style.footerButtonActive : Style.footerButton}>
                <Link to="/search">
                    <Image
                        style={Style.Image}
                        source={require("./image/search.png")}
                    />
                </Link>
            </TouchableOpacity>
            <TouchableOpacity style={pathname === "/calendar" ? Style.footerButtonActive : Style.footerButton}>
                <Link to="/calendar">
                    <Image
                        style={Style.Image}
                        source={require("./image/calendar.png")}
                    />
                </Link>
            </TouchableOpacity>
            <TouchableOpacity style={pathname === "/message" ? Style.footerButtonActive : Style.footerButton}>
                <Link to="/message">
                    <Image
                        style={Style.Image}
                        source={require("./image/chat.png")}
                    />
                </Link>
            </TouchableOpacity>
        </View>
    )
}

export default NavFooter;