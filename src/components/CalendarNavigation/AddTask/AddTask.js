import React, {useState} from "react";
import { useSelector } from "react-redux";
import { SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity, TextInput, Button } from 'react-native';
import { content } from "./AddTask.config";
import { Style } from "./AddTask.style";
import moment from "moment";

import DateTimePickerModal from "react-native-modal-datetime-picker";

import { GlobalStyle } from "../../../../global.style";

import BackArrowSvg from '../../../Image/BackArrow.svg';

const AddTask = ({navigation}) => {
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

     const showDatePicker = () => {
       setDatePickerVisibility(true);
     };
   
     const hideDatePicker = () => {
       setDatePickerVisibility(false);
     };
   
     const handleConfirm = (date) => {
       console.warn("A date has been picked: ", date);
       hideDatePicker();
     };

    return(
        <ScrollView style={theme === "dark" ? GlobalStyle.mainDark : GlobalStyle.mainLight}>
            <TouchableOpacity 
                style={theme === "dark" ? GlobalStyle.headerDark : GlobalStyle.headerLight} 
                onPress={() => navigation.navigate({ name: 'Calendar' })}
            >
                <View 
                    style={GlobalStyle.imageWrapper}
                >
                    <BackArrowSvg fill={theme === "dark" ? "#fff" : "#000"}/>
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
                        onPress={showDatePicker}
                    >
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
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

export default AddTask;