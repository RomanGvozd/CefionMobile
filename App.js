import React, {useState} from 'react';
import { Provider } from "react-redux";
import { store } from './src/common/store/store';

import Hello from './src/components/Hello/Hello';
import Login from './src/components/Login/Login';
import Presentation from './src/components/Presentation/Presentation';
import SignUp from './src/components/SignUp/SignUp';

import Search from './src/components/Search/Search';
import Calendar from './src/components/Calendar/Calendar';

import AccountNavigation from './src/components/AccountNavigation/AccountNavigation';
import MessageNavigation from './src/components/MessageNavigation/MessageNavigation';
import CalendarNavigation from './src/components/CalendarNavigation/CalendarNavigation';

import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { NativeRouter, Routes, Route} from "react-router-native";

const App = () => {
  const [login, setLogin] = useState(true)

  const [showHello, setShowHello] = useState(true)
  const [showLogin, setShowLogin] = useState(false)
  const [showPresentation, setShowPresentation] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  return (
    <Provider store={store}>
      {login 
      ?
        <SafeAreaView style={{flex: 1, position: "relative"}}>
          <NativeRouter>
          <Routes>
            <Route path="/" element={<AccountNavigation setLogin={setLogin}/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/calendar" element={<CalendarNavigation/>} />
            <Route path="/message" element={<MessageNavigation/>} />
          </Routes>
          
          </NativeRouter>
        </SafeAreaView>

      :<>
        {showHello && <Hello
          setShowHello={setShowHello}
          setShowLogin={setShowLogin}
          setShowPresentation={setShowPresentation}
        />}
        {showLogin && <Login
          setShowHello={setShowHello}
          setShowLogin={setShowLogin}
          setShowSignUp={setShowSignUp}
          setLogin={setLogin}
        />}
        {showPresentation && <Presentation
          setShowHello={setShowHello}
          setShowSignUp={setShowSignUp}
          setShowPresentation={setShowPresentation}
        />}
        {showSignUp && <SignUp
          setShowHello={setShowHello}
          setShowLogin={setShowLogin}
          setShowSignUp={setShowSignUp}
        />}
      </>}
    </Provider>
  );

};


export default App;
