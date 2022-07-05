import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Link, useLocation } from "react-router-native";
import { Style } from "./NavFooter.style";

import AccountSvg from './image/Account.svg'
import SearchSvg from './image/Search.svg'
import CalendarSvg from './image/Calendar.svg'
import ChatSvg from './image/Chat.svg'

const NavFooter = () => {
    const theme = useSelector((store) => store.theme.theme);

    const {pathname} = useLocation();

    console.log()

    return(
        <View style={theme === "dark" ? Style.footerDark : Style.footerLight}>

            
            <Link to="/" style={Style.footerItem}>
                <View style={pathname === "/" ? Style.footerButtonActive : Style.footerButton}>
                    {pathname === "/"
                    ? <AccountSvg fill={theme === "dark" ? "#1C1C1E" : "#fff"}/>
                    : <AccountSvg fill={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}/>
                    }  
                </View>
            </Link>
            <Link to="/search" style={Style.footerItem}>
                <View style={pathname === "/search" ? Style.footerButtonActive : Style.footerButton}>
                    {pathname === "/search"
                        ? <SearchSvg fill={theme === "dark" ? "#1C1C1E" : "#fff"}/>
                        : <SearchSvg fill={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}/>
                        }  
                </View>
            </Link>
            <Link to="/calendar" style={Style.footerItem}>
                <View style={pathname === "/calendar" ? Style.footerButtonActive : Style.footerButton}>              
                    {pathname === "/calendar"
                        ? <CalendarSvg fill={theme === "dark" ? "#1C1C1E" : "#fff"}/>
                        : <CalendarSvg fill={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}/>
                        }  
                </View>
            </Link>
            <Link to="/message" style={Style.footerItem}>
                <View style={pathname === "/message" ? Style.footerButtonActive : Style.footerButton}>
                    {pathname === "/message"
                        ? <ChatSvg fill={theme === "dark" ? "#1C1C1E" : "#fff"}/>
                        : <ChatSvg fill={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}/>
                        }  
                </View>
            </Link>

            
        </View>
    )
}

export default NavFooter;