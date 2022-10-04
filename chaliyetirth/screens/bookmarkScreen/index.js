import { View, Text, StatusBar } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const BookmarkScreen = () => {
  const COLORS = useSelector((state) => state.theme.COLORS);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"white"
      }}
    >
      <StatusBar
        backgroundColor={COLORS.STATUS_BAR_COLOR}
        barStyle={COLORS.STATUS_BAR_CONTENT_COLOR}
      />
      <Text>BookmarkScreen</Text>
    </View>
  );
};

export default BookmarkScreen;
