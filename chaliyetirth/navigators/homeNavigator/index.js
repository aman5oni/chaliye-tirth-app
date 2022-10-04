import HomeScreen from "../../screens/homeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";
import { DIMENSIONS } from "../../theme";
import { useSelector } from "react-redux";
import HomeDrawerNavigator from "../homeDrawerNavigator";
import MyTripsScreen from "../../screens/myTripsScreen";
import DiscoverScreen from "../../screens/discoverScreen";
import BookmarkScreen from "../../screens/bookmarkScreen";
import SettingsScreen from "../../screens/settingsScreen";

const Home = createBottomTabNavigator();

// const Home = createStackNavigator();

const HomeNavigator = () => {
  const COLORS = useSelector((state) => state.theme.COLORS);
  return (
    <Home.Navigator
      screenOptions={{
        tabBarShowLabel: false,

        tabBarStyle: {
          paddingHorizontal: DIMENSIONS.WIDTH * 0.02,
          bottom: DIMENSIONS.HEIGHT * 0.008,
          elevation: 0,
          backgroundColor: "#ffffff",
          height: 62,
          shadowColor: "#7F5DF0",
          shadowOffset: {
            width: 0,
            height: 10
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 0
        }
      }}
    >
      <Home.Screen
        options={{
          headerShown: false,
          tabBarShowIcon: true,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused
                      ? COLORS.TAB_BAR_ACTIVE_ICON_COLOR
                      : COLORS.TAB_BAR_ICON_COLOR
                  }}
                  source={require("../../assets/images/homeScreenImages/HomeIcon.png")}
                />
              </View>
            );
          }
        }}
        name="HomeDrawerPage"
        component={HomeDrawerNavigator}
      />
      <Home.Screen
        options={{
          headerShown: false,
          tabBarShowIcon: true,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused
                      ? COLORS.TAB_BAR_ACTIVE_ICON_COLOR
                      : COLORS.TAB_BAR_ICON_COLOR
                  }}
                  source={require("../../assets/images/homeScreenImages/MyTrips.png")}
                />
              </View>
            );
          }
        }}
        name="MyTripsPage"
        component={MyTripsScreen}
      />
      <Home.Screen
        options={{
          headerShown: false,
          tabBarShowIcon: true,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused
                      ? COLORS.TAB_BAR_ACTIVE_ICON_COLOR
                      : COLORS.TAB_BAR_ICON_COLOR
                  }}
                  source={require("../../assets/images/homeScreenImages/Discover.png")}
                />
              </View>
            );
          }
        }}
        name="DiscoverPage"
        component={DiscoverScreen}
      />
      <Home.Screen
        options={{
          headerShown: false,
          tabBarShowIcon: true,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused
                      ? COLORS.TAB_BAR_ACTIVE_ICON_COLOR
                      : COLORS.TAB_BAR_ICON_COLOR
                  }}
                  source={require("../../assets/images/homeScreenImages/Bookmarks.png")}
                />
              </View>
            );
          }
        }}
        name="BookmarksPage"
        component={BookmarkScreen}
      />
      <Home.Screen
        options={{
          headerShown: false,
          tabBarShowIcon: true,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused
                      ? COLORS.TAB_BAR_ACTIVE_ICON_COLOR
                      : COLORS.TAB_BAR_ICON_COLOR
                  }}
                  source={require("../../assets/images/homeScreenImages/Settings.png")}
                />
              </View>
            );
          }
        }}
        name="SettingsPage"
        component={SettingsScreen}
      />
    </Home.Navigator>
  );
};

export default HomeNavigator;
