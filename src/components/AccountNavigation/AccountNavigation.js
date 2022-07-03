import React, {useState} from 'react';
import { useSelector} from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, } from '@react-navigation/stack';

import Account from './Account/Account'
import Statistics from './Statistics/Statistics'
import Setting from './Setting/Setting';
import Followers from './Followers/Followers';
import Following from './Following/Following';
import AccountInfo from '../AccountInfo/AccountInfo';

import News from './News/News';
import Page from './News/Page/Page';
import NewsCreate from './News/NewsCreate/NewsCreate';

import GroupList from './GroupList/GroupList';
import GroupCreate from './GroupList/GroupCreate/GroupCreate';
import GroupChat from './GroupList/GroupChat/GroupChat';
import GroupChatSetting from './GroupList/GroupChat/GroupChatSetting/GroupChatSetting';
import GroupChatEdit from './GroupList/GroupChat/GroupChatSetting/GroupChatEdit/GroupChatEdit';
import GroupAddTask from './GroupList/GroupChat/GroupChatSetting/GroupChatEdit/AddTask/GroupAddTask';

import Wallet from './Wallet/Wallet';
import Everscape from './Wallet/Everscape/Everscape';
import BinanceCoin from './BinanceCoin/BinanceCoin';

const Stack = createStackNavigator();

const AccountNavigation = ({setLogin}) => {
  const theme = useSelector((store) => store.theme.theme);

  const [pageID, setPageID] = useState('')
  const [groupID, setGroupID] = useState('')

  const [userID, setUserID] = useState('')
  const [typeUser, setTypeUser] = useState('')

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true
        }}
      >
        <Stack.Screen name="Account">
          {props => <Account {...props} setPageID={setPageID} />}
        </Stack.Screen>
        <Stack.Screen name="Statistics" component={Statistics} />
        <Stack.Screen name="Setting">
          {props => <Setting {...props} setLogin={setLogin} />}
        </Stack.Screen>
        <Stack.Screen name="Followers">
          {props => <Followers {...props} setTypeUser={setTypeUser} setUserID={setUserID}/>}
        </Stack.Screen>
        <Stack.Screen name="Following">
          {props => <Following {...props} setTypeUser={setTypeUser} setUserID={setUserID}/>}
        </Stack.Screen>
        <Stack.Screen name="AccountInfo">
          {props => <AccountInfo {...props} typeUser={typeUser} userID={userID}/>}
        </Stack.Screen>

        <Stack.Screen name="News">
          {props => <News {...props} setPageID={setPageID} />}
        </Stack.Screen>
        <Stack.Screen name="Page">
          {props => <Page {...props} pageID={pageID} />}
        </Stack.Screen>
        <Stack.Screen name="NewsCreate">
          {props => <NewsCreate {...props} />}
        </Stack.Screen>


        <Stack.Screen name="GroupList">
          {props => <GroupList {...props} setGroupID={setGroupID} />}
        </Stack.Screen>
        <Stack.Screen name="GroupCreate">
          {props => <GroupCreate {...props} groupID={groupID} />}
        </Stack.Screen>
        <Stack.Screen name="GroupChat">
          {props => <GroupChat {...props} groupID={groupID} />}
        </Stack.Screen>
        <Stack.Screen name="GroupChatSetting">
          {props => <GroupChatSetting {...props} groupID={groupID}/>}
        </Stack.Screen>
        <Stack.Screen name="GroupChatEdit">
          {props => <GroupChatEdit {...props} groupID={groupID}/>}
        </Stack.Screen>
        <Stack.Screen name="GroupAddTask">
          {props => <GroupAddTask {...props} groupID={groupID}/>}
        </Stack.Screen>


        <Stack.Screen name="Wallet">
          {props => <Wallet {...props}/>}
        </Stack.Screen>
        <Stack.Screen name="Everscape">
          {props => <Everscape {...props}/>}
        </Stack.Screen>
        <Stack.Screen name="BinanceCoin">
          {props => <BinanceCoin {...props}/>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AccountNavigation;