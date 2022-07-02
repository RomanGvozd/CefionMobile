import React, {useState} from 'react';
import { useSelector} from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, } from '@react-navigation/stack';

import ChatList from '../ChatList/ChatList';
import Chat from '../ChatList/Chat/Chat';
import ChatSetting from '../ChatList/Chat/ChatSetting/ChatSetting';
import ChatNew from '../ChatList/ChatNew/ChatNew';

const Stack = createStackNavigator();

const MessageNavigation = ({setLogin}) => {

  const [chatId, setChatID] = useState('')

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
        }}
      >
        <Stack.Screen name="ChatList">
          {props => <ChatList {...props} setChatID={setChatID} />}
        </Stack.Screen>
        <Stack.Screen name="Chat">
          {props => <Chat {...props} chatId={chatId} />}
        </Stack.Screen>
        <Stack.Screen name="ChatSetting">
          {props => <ChatSetting {...props} chatId={chatId} />}
        </Stack.Screen>
        <Stack.Screen name="ChatNew">
          {props => <ChatNew {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MessageNavigation;