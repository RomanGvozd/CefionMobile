import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, TouchableHighlight  } from 'react-native';
import Swiper from 'react-native-swiper';

import { Style } from './Presentation.style';

const presentation = ({navigation}) => {

  return (
    <SafeAreaView style={Style.mainDark}>
      <TouchableOpacity style={Style.header} onPress={() => navigation.navigate({ name: 'Hello' })}>
          <Image
            style={Style.image}
            source={require("./image/Vector.png")}
          />
      </TouchableOpacity>
      <Swiper
        loop={false}
        dot={<View style={Style.dot}></View>}
        activeDot={<View style={Style.activeDot}></View>}
      >
        <View style={Style.slide}>
          <Image
              style={Style.imageSlide}
              source={require("./image/icon-tap1.png")}
            />
          <Text style={Style.text}>Do translations</Text>
          <Text style={Style.subtext}>Instantly.No waste.</Text>
        </View>
        <View style={Style.slide}>
          <Image
              style={Style.imageSlide}
              source={require("./image/icon-tap2.png")}
            />
          <Text style={Style.text}>Invest in cryptocurrencies</Text>
          <Text style={Style.subtext}>The most popular cryptocurrencies. Buy from other users at a favorable rate!</Text>
        </View>
        <View style={Style.slide}>
          <Image
              style={Style.imageSlide}
              source={require("./image/icon-tap3.png")}
            />
          <Text style={Style.text}>Communicate anonymously</Text>
          <Text style={Style.subtext}>Your messages are encrypted in the blockchain and no one except you won't get access to them</Text>
        </View>
        <View style={Style.slide}>
          <Image
              style={Style.imageSlide}
              source={require("./image/icon-tap4.png")}
            />
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
