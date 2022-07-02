import React, {useState} from 'react';
import { Provider } from "react-redux";
import { store } from './src/common/store/store';

import LoginNavigation from './src/components/LoginNavigation/LoginNavigation';

import Search from './src/components/Search/Search';

import AccountNavigation from './src/components/AccountNavigation/AccountNavigation';
import MessageNavigation from './src/components/MessageNavigation/MessageNavigation';
import CalendarNavigation from './src/components/CalendarNavigation/CalendarNavigation';

import { SafeAreaView } from 'react-native';
import { NativeRouter, Routes, Route} from "react-router-native";

const App = () => {

  const [login, setLogin] = useState(false)

  return (
    <Provider store={store}>
      {login 
      ?
        <SafeAreaView style={{flex: 1, position: "relative"}}>
          <NativeRouter>
            <Routes>
              <Route path="/" element={<AccountNavigation setLogin={setLogin} />} />
              <Route path="/search" element={<Search />} />
              <Route path="/calendar" element={<CalendarNavigation />} />
              <Route path="/message" element={<MessageNavigation />} />
            </Routes>
          </NativeRouter>
        </SafeAreaView>

      :<>
      <LoginNavigation setLogin={setLogin} />
      </>}
    </Provider>
  );

};


export default App;
