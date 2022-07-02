import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight  } from 'react-native';
import Swiper from 'react-native-swiper'

const presentation = ({navigation}) => {

  // const openHello = () => {
  //   setShowHello(true)
  //   setShowPresentation(false)
  // }

  // const openSignUp = () => {
  //   setShowSignUp(true)
  //   setShowPresentation(false)
  // }

  return (
    <SafeAreaView style={styles.mainDark}>
      <TouchableOpacity style={styles.header} onPress={() => navigation.navigate({ name: 'Hello' })}>
          <Image
            style={styles.image}
            source={require("./image/Vector.png")}
          />
      </TouchableOpacity>
      <Swiper
        loop={false}
        dot={<View style={styles.dot}></View>}
        activeDot={<View style={styles.activeDot}></View>}
      >
        <View style={styles.slide}>
          <Image
              style={styles.imageSlide}
              source={require("./image/icon-tap1.png")}
            />
          <Text style={styles.text}>Do translations</Text>
          <Text style={styles.subtext}>Instantly.No waste.</Text>
        </View>
        <View style={styles.slide}>
          <Image
              style={styles.imageSlide}
              source={require("./image/icon-tap2.png")}
            />
          <Text style={styles.text}>Invest in cryptocurrencies</Text>
          <Text style={styles.subtext}>The most popular cryptocurrencies. Buy from other users at a favorable rate!</Text>
        </View>
        <View style={styles.slide}>
          <Image
              style={styles.imageSlide}
              source={require("./image/icon-tap3.png")}
            />
          <Text style={styles.text}>Communicate anonymously</Text>
          <Text style={styles.subtext}>Your messages are encrypted in the blockchain and no one except you won't get access to them</Text>
        </View>
        <View style={styles.slide}>
          <Image
              style={styles.imageSlide}
              source={require("./image/icon-tap4.png")}
            />
          <Text style={styles.text}>Your funds under protection!</Text>
          <Text style={styles.subtext}>Store your money in digital currencies.</Text>
          <TouchableHighlight  style={styles.button} onPress={() => navigation.navigate({ name: 'SignUp' })}>
            <Text style={styles.buttonText}>Okay</Text>
          </TouchableHighlight >
        </View>
      </Swiper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainDark: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-between",
    backgroundColor: "#000",
  },
  header: {
    width: "100%",
    padding: 24
  },
  image: {
    width: 10,
    height: 20,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    position: 'relative',
  },
  imageSlide: {
    
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: "center",
    marginTop: 90,
  },
  subtext: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 18,
    textAlign: "center",
    marginTop: 16,

  },
  dot:{
    width: 30,
    height: 3,
    backgroundColor: "rgba(46, 156, 62, 0.15)",
    marginLeft: 6,
    marginRight: 6,
  },
  activeDot:{
    width: 30,
    height: 3,
    backgroundColor: "#2E9C3E",
    marginLeft: 6,
    marginRight: 6,
  },
  button: {
    width: "100%",
    padding: 16,
    display: 'flex',
    justifyContent: "center",
    backgroundColor: "#2E9C3E",
    borderRadius: 10,
    marginTop: 51,
    position: 'absolute',
    left: 24,
    bottom: 24,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: 'SF UI Display',
    fontSize: 15,
  },
});

export default presentation;
