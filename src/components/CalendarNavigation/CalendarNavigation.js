import React, {useState} from 'react';
import { useSelector} from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, } from '@react-navigation/stack';

import Calendar from './Calendar/Calendar';
import AddTask from './AddTask/AddTask';

const Stack = createStackNavigator();

const CalendarNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator

        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true
        }}
      >
        <Stack.Screen name="Calendar">
          {props => <Calendar {...props} />}
        </Stack.Screen>
        <Stack.Screen name="AddTask">
          {props => <AddTask {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CalendarNavigation;