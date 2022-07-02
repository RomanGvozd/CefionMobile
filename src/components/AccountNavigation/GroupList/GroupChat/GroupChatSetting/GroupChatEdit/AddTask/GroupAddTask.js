import React, {useState} from "react";
import { useSelector } from "react-redux";
import { SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity, TextInput, Button } from 'react-native';
import { content } from "./GroupAddTask.config";
import { Style } from "./GroupAddTask.style";
import moment from "moment";

import DateTimePickerModal from "react-native-modal-datetime-picker";

import { GlobalStyle } from "../../../../global.style";

const GroupAddTask = ({navigation}) => {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const { 
        AddTask,
        Title,
        Date,
        Time,
        Description,
        Create,
     } = content[language]

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [show, showModal] = useState(false);

    const handleDatePicked = date => {
        console.log("A date has been picked: ", date);
    };

    return(
        <ScrollView style={theme === "dark" ? GlobalStyle.mainDark : GlobalStyle.mainLight}>
            <TouchableOpacity 
                style={theme === "dark" ? GlobalStyle.headerDark : GlobalStyle.headerLight} 
                onPress={() => navigation.navigate({ name: 'GroupChatEdit' })}
            >
                <View 
                style={GlobalStyle.imageWrapper}
                >
                    <Image
                        style={GlobalStyle.image}
                        source={require("./image/Vector.png")}
                    />
                </View>
                <Text style={theme === "dark" ? GlobalStyle.headerTitleDark : GlobalStyle.headerTitleLight}>
                    {AddTask}
                </Text>
            </TouchableOpacity>


            <View style={{padding: 20}}>


                <View style={theme === "dark" ? GlobalStyle.blockDark : GlobalStyle.blockLight}>
                    <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                        {Title}
                    </Text>
                    <TextInput
                        style={theme === "dark" ? Style.inputDark : Style.inputLight}
                        placeholder="SearchForTask"
                        placeholderTextColor={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
                    />
                    <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                        {Date}
                    </Text>
                    {/* <TextInput
                        
                        style={theme === "dark" ? Style.inputDark : Style.inputLight}
                        placeholder="SearchForTask"
                        placeholderTextColor={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
                    /> */}
                    <TouchableOpacity
                        style={theme === "dark" ? Style.inputDark : Style.inputLight}
                        onPress={() => showModal(!show)}
                    >
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={show}
                        onConfirm={handleDatePicked}
                        onCancel={() => showModal(false)}
                    />
                    <Text style={theme === "dark" ? GlobalStyle.subTextDark : GlobalStyle.subTextLight}>
                        {Description}
                    </Text>
                    <TextInput
                        style={theme === "dark" ? Style.inputDark : Style.inputLight}
                        placeholder="SearchForTask"
                        placeholderTextColor={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
                    />
                    <TouchableOpacity style={Style.AddTaskButton}>
                        <Text style={Style.AddTaskButtonText}>
                            {Create}
                        </Text>
                    </TouchableOpacity>
                </View>


            </View>


        </ScrollView>
    )
}

export default GroupAddTask;