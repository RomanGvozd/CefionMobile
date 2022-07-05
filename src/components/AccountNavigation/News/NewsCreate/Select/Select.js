import React, {useState} from "react";
import { useSelector } from "react-redux";
import { ScrollView, SafeAreaView, TextInput, Text, View, Image, TouchableOpacity } from 'react-native';

import { GlobalStyle } from "../../../../../../global.style";
import { Style } from "./Select.style";

const Select = ({selected, setSelected, options}) => {
    const theme = useSelector((store) => store.theme.theme);

    const [isActive, setIsActive] = useState(false);

    return(
        <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
            <TouchableOpacity 
                onPress={() => setIsActive(!isActive)}
            >
                <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                    {selected}
                </Text>
            </TouchableOpacity>
            
            {isActive && (
                <View>
                    <View style={{padding: 7}}></View>
                    {options.map(option => (
                        <TouchableOpacity 
                            style={theme === "dark" ? Style.optionsDark : Style.optionsLight}
                            onPress={() => {
                                    setIsActive(false)
                                    setSelected(option)
                            }}
                        >
                        <Text style={theme === "dark" ? GlobalStyle.textDark : GlobalStyle.textLight}>
                            {option}
                        </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
}

export default Select;