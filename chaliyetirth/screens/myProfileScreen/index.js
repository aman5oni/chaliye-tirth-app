import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { DIMENSIONS } from "../../theme";
import { useNavigation } from "@react-navigation/native";

const MyProfileScreen = () => {
  const Navigation = useNavigation();

  const COLORS = useSelector((state) => state.theme.COLORS);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white"
      }}
    >
      <View
        style={{
          position: "absolute",
          marginTop: DIMENSIONS.HEIGHT * 0.06,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "white",
          width: DIMENSIONS.WIDTH,
          height: DIMENSIONS.HEIGHT * 0.08,
          borderBottomWidth: 0.4,
          borderColor: "rgba(0,0,0,0.3)"
        }}
      >
        <TouchableOpacity
          style={{
            marginLeft: DIMENSIONS.WIDTH * 0.07,
            width: DIMENSIONS.WIDTH * 0.09,
            height: DIMENSIONS.WIDTH * 0.13
          }}
          onPress={() => {
            Navigation.openDrawer();
          }}
        >
          <Image
            style={{
              width: DIMENSIONS.WIDTH * 0.09,
              height: DIMENSIONS.WIDTH * 0.13
            }}
            source={require("../../assets/images/MenuIcon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
      </View>

      <StatusBar
        backgroundColor={COLORS.STATUS_BAR_COLOR}
        barStyle={COLORS.STATUS_BAR_CONTENT_COLOR}
      />
      <Text>MyProfileScreen</Text>
    </View>
  );
};

export default MyProfileScreen;
