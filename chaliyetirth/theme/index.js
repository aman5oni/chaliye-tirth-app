import { useEffect } from "react";
import { Dimensions } from "react-native";
import { useColorScheme } from "react-native";
import { useDispatch } from "react-redux";
import { themeSliceAction } from "../store/slice/themeSlice";

const { width, height } = Dimensions.get("window");

const Theme = () => {
  const dispatch = useDispatch();

  const color = "light";
  console.log(useColorScheme());

  useEffect(() => {
    if (color == "dark") {
      dispatch(themeSliceAction.setColor(DARKTHEME));
    } else {
      dispatch(themeSliceAction.setColor(LIGHTTHEME));
    }
    console.log(color);
  });

  const DARKTHEME = {
    //AUTH SCREEN DARK THEME COLORS

    AUTH_SCREEN_PRIMARY_COLOR: "rgb(255, 106, 0)",
    AUTH_SCREEN_MAIN_COLOR: "black",
    AUTH_SCREEN_ICON_COLOR: "white",
    AUTH_SCREEN_TEXT_COLOR: "white",
    AUTH_SCREEN_SHADOW_COLOR: "white",
    AUTH_SCREEN_OTHER_COLOR: "grey",
    AUTH_SCREEN_PLACEHOLDER_COLOR: "rgba(255,255,255,0.5)",
    AUTH_SCREEN_BUTTON_TEXT_COLOR: "white",
    //ONBOARD DARK THEME COLORS
    ONBOARD_PRIMARY: "rgb(255, 175, 117)",
    ONBOARD_DOT_COLOR: "white",
    ONBOARD_TEXT: "white",
    ONBOARD_SCREEN: "black",
    ONBOARD_ACTIVE_DOT_COLOR: "rgb(255, 175, 117)",
    // STATUS BAR LIGHT COLORS
    STATUS_BAR_COLOR: "black",
    STATUS_BAR_CONTENT_COLOR: "light-content"
  };

  const LIGHTTHEME = {
    // DRAWER LIGHT THEME COLORS

    DRAWER_PRIMARY_COLOR: "rgb(255, 106, 0)",
    DRAWER_TEXT_COLOR: "white",
    DRAWER_ACTIVE_ICON_COLOR: "white",
    DRAWER_ICON_COLOR: "black",

    // TAB BAR LIGHT THEME COLORS

    TAB_BAR_PRIMARY_COLOR: "white",
    TAB_BAR_ICON_COLOR: "black",
    TAB_BAR_ACTIVE_ICON_COLOR: "rgb(255, 106, 0)",

    //AUTH SCREEN LIGHT THEME COLORS

    AUTH_SCREEN_PRIMARY_COLOR: "rgb(255, 106, 0)",
    AUTH_SCREEN_MAIN_COLOR: "white",
    AUTH_SCREEN_ICON_COLOR: "black",
    AUTH_SCREEN_TEXT_COLOR: "black",
    AUTH_SCREEN_SHADOW_COLOR: "black",
    AUTH_SCREEN_OTHER_COLOR: "white",
    AUTH_SCREEN_PLACEHOLDER_COLOR: "rgba(0,0,0,0.5)",
    AUTH_SCREEN_BUTTON_TEXT_COLOR: "white",

    //ONBOARD LIGHT THEME COLORS
    ONBOARD_PRIMARY: "rgb(255, 106, 0)",
    ONBOARD_DOT_COLOR: "black",
    ONBOARD_TEXT: "black",
    ONBOARD_SCREEN: "white",
    ONBOARD_ACTIVE_DOT_COLOR: "rgb(255, 106, 0)",
    // STATUS BAR LIGHT COLORS
    STATUS_BAR_COLOR: "white",
    STATUS_BAR_CONTENT_COLOR: "dark-content"
  };
};

const DIMENSIONS = {
  WIDTH: width,
  HEIGHT: height
};

export { DIMENSIONS };
export default Theme;
