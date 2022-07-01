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

            <Link to="/" style={Style.footerItem}>
                <View style={pathname === "/" ? Style.footerButtonActive : Style.footerButton}>
                    <Image
                        style={Style.image}
                        source={require("./image/account.png")}
                    />
                </View>
            </Link>
            <Link to="/search" style={Style.footerItem}>
                <View style={pathname === "/search" ? Style.footerButtonActive : Style.footerButton}>
                    <Image
                        style={Style.image}
                        source={require("./image/search.png")}
                    />
                </View>
            </Link>
            <Link to="/calendar" style={Style.footerItem}>
                <View style={pathname === "/calendar" ? Style.footerButtonActive : Style.footerButton}>              
                    <Image
                        style={Style.image}
                        source={require("./image/calendar.png")}
                    />
                </View>
            </Link>
            <Link to="/message" style={Style.footerItem}>
                <View style={pathname === "/message" ? Style.footerButtonActive : Style.footerButton}>
                    <Image
                        style={Style.image}
                        source={require("./image/chat.png")}
                    />
                </View>
            </Link>
        </View>
    )
}

export default NavFooter;