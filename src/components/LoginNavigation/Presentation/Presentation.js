import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { SafeAreaView, Text, View, Image, TouchableOpacity, TouchableHighlight  } from 'react-native';
import Swiper from 'react-native-swiper';

import BackArrow from "../../Image/BackArrow.svg";
import IconTap1 from './image/icon-tap1.svg';
import IconTap2 from './image/icon-tap2.svg';
import IconTap3 from './image/icon-tap3.svg';
import IconTap4 from './image/icon-tap4.svg';


import { Style } from './Presentation.style';

const presentation = ({navigation}) => {

  const theme = useSelector((store) => store.theme.theme);
  const language = useSelector((store) => store.language.language);

  return (
    <SafeAreaView style={Style.mainDark}>
      <TouchableOpacity style={Style.header} onPress={() => navigation.navigate({ name: 'Hello' })}>
        <BackArrow fill={theme === "dark" ? "#fff" : "#000"}/>
      </TouchableOpacity>
      <Swiper
        loop={false}
        dot={<View style={Style.dot}></View>}
        activeDot={<View style={Style.activeDot}></View>}
      >
        <View style={Style.slide}>
        <IconTap1 />
          <Text style={Style.text}>Do translations</Text>
          <Text style={Style.subtext}>Instantly.No waste.</Text>
        </View>
        <View style={Style.slide}>
          <IconTap2 />
          <Text style={Style.text}>Invest in cryptocurrencies</Text>
          <Text style={Style.subtext}>The most popular cryptocurrencies. Buy from other users at a favorable rate!</Text>
        </View>
        <View style={Style.slide}>
          <IconTap3 />
          <Text style={Style.text}>Communicate anonymously</Text>
          <Text style={Style.subtext}>Your messages are encrypted in the blockchain and no one except you won't get access to them</Text>
        </View>
        <View style={Style.slide}>
          <IconTap4 />
          <Text style={Style.text}>Your funds under protection!</Text>
          <Text style={Style.subtext}>Store your money in digital currencies.</Text>
          <TouchableOpacity 
            style={Style.button} 
            onPress={() => navigation.navigate({ name: 'SignUp' })}
            activeOpacity={1}
          >
            <Text style={Style.buttonText}>Okay</Text>
          </TouchableOpacity >
        </View>
      </Swiper>
    </SafeAreaView>
  );
};

export default presentation;
