import React, {useState} from 'react';
import {Provider} from 'react-redux';
import { store } from './src/common/store/store';

import Hello from './src/components/Hello/Hello';
import Login from './src/components/Login/Login';
import Presentation from './src/components/Presentation/Presentation';
import SignUp from './src/components/SignUp/SignUp';

import NavFooter from './src/components/NavFooter/NavFooter';
import Search from './src/components/Search/Search';
import Calendar from './src/components/Calendar/Calendar';
import Message from './src/components/Message/Message';

import AccountNavigation from './src/components/AccountNavigation/AccountNavigation';


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
            <Route path="/" element={<AccountNavigation/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/calendar" element={<Calendar/>} />
            <Route path="/message" element={<Message/>} />
          </Routes>
          <NavFooter/>
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
