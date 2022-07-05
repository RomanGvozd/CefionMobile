import React, {useState} from 'react';
import { useSelector} from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, } from '@react-navigation/stack';

import ChatList from './ChatList/ChatList';
import Chat from './ChatList/Chat/Chat';
import ChatSetting from './ChatList/Chat/ChatSetting/ChatSetting';
import ChatNew from './ChatList/ChatNew/ChatNew';
import AccountInfo from '../AccountInfo/AccountInfo';

const Stack = createStackNavigator();

const MessageNavigation = ({setLogin}) => {

  const [chatID, setChatID] = useState('')
  const [userID, setUserID] = useState('')
  const [typeUser, setTypeUser] = useState('')
  const [typeChat, setTypeChat] = useState('chatList')

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
          {props => <Chat {...props} chatID={chatID} typeChat={typeChat}/>}
        </Stack.Screen>
        <Stack.Screen name="ChatSetting">
          {props => <ChatSetting {...props} chatID={chatID} />}
        </Stack.Screen>
        <Stack.Screen name="ChatNew">
          {props => <ChatNew {...props} setUserID={setUserID} setTypeUser={setTypeUser}/>}
        </Stack.Screen>
        <Stack.Screen name="AccountInfo">
          {props => <AccountInfo {...props} typeUser={typeUser} userID={userID} setChatID={setChatID}/>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MessageNavigation;