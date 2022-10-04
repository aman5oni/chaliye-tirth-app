// Import Data

import React from "react";
import { Image, StatusBar, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useSelector } from "react-redux";
import { DIMENSIONS } from "../../theme";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
// Import Data

// Slides Data

const slides = [
  {
    key: "one",
    title: "CHALIYE TIRTH",
    text: "Just Plants makes it easy for you to enjoy plants indoors. We bring the plants to you then tend to them every fortnight.",
    image: require("../../assets/lottie/introAnimations/intro1.json")
  },
  {
    key: "two",
    title: "EXPLORE MORE",
    text: " Whether you’re building a simple blog or an e-commerce, you might need a way to view images in window’s full size.",
    image: require("../../assets/lottie/introAnimations/intro2.json")
  },
  {
    key: "three",
    title: "SMART NAVIGATION",
    text: "Enjoy this beautiful journey of life. life is a beautiful journey, enjoy the ride.” enjoy the journey quotes",
    image: require("../../assets/lottie/introAnimations/intro3.json")
  }
];

// Slides Data

// OnBoard Screen

const OnBoardScreen = ({ navigation }) => {
  // Screen Item

  const Navigation = useNavigation();

  const COLORS = useSelector((state) => state.theme.COLORS);

  const Item = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.ONBOARD_SCREEN,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <StatusBar
          backgroundColor={COLORS.STATUS_BAR_COLOR}
          barStyle={COLORS.STATUS_BAR_CONTENT_COLOR}
        />
        <LottieView
          autoPlay
          source={item.image}
          style={{
            height: DIMENSIONS.HEIGHT * 0.392,
            width: DIMENSIONS.WIDTH * 0.83
          }}
          speed={1}
        />
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 23,
            fontWeight: "bold",
            color: COLORS.ONBOARD_PRIMARY,
            alignSelf: "center"
          }}
        >
          {item.title}
        </Text>

        <Text
          style={{
            textAlign: "center",
            color: COLORS.ONBOARD_TEXT,
            fontSize: 15,
            paddingHorizontal: DIMENSIONS.WIDTH * 0.11
          }}
        >
          {item.text}
        </Text>
      </View>
    );
  };

  // Screen Item

  // Return Data

  return (
    <AppIntroSlider
      onDone={() => {
        Navigation.navigate("AuthPage");
      }}
      renderItem={Item}
      data={slides}
      dotStyle={{
        backgroundColor: COLORS.ONBOARD_DOT_COLOR,
        top: DIMENSIONS.HEIGHT * -0.025
      }}
      activeDotStyle={{
        backgroundColor: COLORS.ONBOARD_ACTIVE_DOT_COLOR,
        top: DIMENSIONS.HEIGHT * -0.025,
        width: DIMENSIONS.WIDTH * 0.07
      }}
      renderNextButton={() => {
        return (
          <View>
            <Image
              style={{
                width: DIMENSIONS.WIDTH * 0.15,
                height: DIMENSIONS.HEIGHT * 0.07,
                tintColor: COLORS.ONBOARD_PRIMARY,
                top: DIMENSIONS.HEIGHT * -0.03,
                right: DIMENSIONS.WIDTH * 0.07
              }}
              source={require("../../assets/images/introImages/ArrowIcon.png")}
            />
          </View>
        );
      }}
      renderDoneButton={() => {
        return (
          <View
            style={{
              top: DIMENSIONS.HEIGHT * -0.03,
              right: DIMENSIONS.WIDTH * 0.07,
              borderRadius: 50
            }}
          >
            <Image
              style={{
                width: DIMENSIONS.WIDTH * 0.15,
                height: DIMENSIONS.HEIGHT * 0.07,
                tintColor: COLORS.ONBOARD_PRIMARY
              }}
              source={require("../../assets/images/introImages/RocketIcon.png")}
            />
          </View>
        );
      }}
    />
  );

  // Return Data
};

// OnBoard Screen

//Export Data

export default OnBoardScreen;

//Export Data
