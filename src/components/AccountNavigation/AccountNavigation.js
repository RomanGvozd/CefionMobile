import React from 'react';
import { useSelector} from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Account from './Account/Account'
import Statistics from './Statistics/Statistics'
import Setting from './Setting/Setting';

const Stack = createNativeStackNavigator();

const AccountNavigation = () => {
  const theme = useSelector((store) => store.theme.theme);

  let backgroundColor = '#1C1C1E'

  if(theme === "light"){
    backgroundColor = '#fff'
  }

  let headerTintColor = '#fff'

  if(theme === "light"){
    headerTintColor = '#000'
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Statistics" component={Statistics} />
        <Stack.Screen name="Setting" component={Setting} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AccountNavigation;