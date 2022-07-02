import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, } from '@react-navigation/stack';

import Hello from "../Hello/Hello";
import Login from "../Login/Login";
import Presentation from "../Presentation/Presentation";
import SignUp from "../SignUp/SignUp";

const Stack = createStackNavigator();

const LoginNavigation = ({setLogin}) => {

    return(
        <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                // gestureEnabled: true
            }}
        >
            <Stack.Screen name="Hello">
                {props => <Hello {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Login">
                {props => <Login {...props} setLogin={setLogin} />}
            </Stack.Screen>
            <Stack.Screen name="Presentation">
                {props => <Presentation {...props} />}
            </Stack.Screen>
            <Stack.Screen name="SignUp">
                {props => <SignUp {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default LoginNavigation;