import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";
import HomeScreen from "../../screens/homeScreen";
import { useSelector } from "react-redux";
import MyProfileScreen from "../../screens/myProfileScreen";

const { width, height } = Dimensions.get("window");

const Drawer = createDrawerNavigator();

const HomeDrawerNavigator = () => {
  const COLORS = useSelector((state) => state.theme.COLORS);

  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1,}}>
            <DrawerContentScrollView
              {...props}
              contentContainerStyle={{
                top: -27,
                backgroundColor: COLORS.DRAWER_PRIMARY_COLOR
              }}
            >
              <View
                style={{
                  height: height * 0.27,
                  paddingTop: height * 0.07,
                  paddingLeft: width * 0.06
                }}
              >
                <Image
                  source={require("../../assets/images/homeDrawerImages/SampleProfile.png")}
                  style={{
                    height: 80,
                    width: 80,
                    borderRadius: 40,
                    marginBottom: 10,
                    tintColor: "#FFFFFF"
                  }}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 18,
                    marginBottom: 5
                  }}
                >
                  AMAN SONI
                </Text>
              </View>
              <View
                style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}
              >
                <DrawerItemList {...props} />
              </View>
            </DrawerContentScrollView>
            <View
              style={{
                paddingVertical: 7,
                paddingHorizontal: 22,
                borderTopWidth: 1,
                borderTopColor: "#ccc"
              }}
            >
              <TouchableOpacity
                onPress={() => {}}
                style={{ paddingVertical: 15 }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{
                      width: width * 0.07,
                      height: height * 0.04,
                      marginHorizontal: width * 0.02,
                      tintColor: "black"
                    }}
                    source={require("../../assets/images/homeDrawerImages/ShareIcon.png")}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      marginLeft: 5
                    }}
                  >
                    Tell a Friend
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {}}
                style={{ paddingVertical: 15 }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{
                      width: width * 0.07,
                      height: height * 0.04,
                      marginHorizontal: width * 0.02,
                      tintColor: "black"
                    }}
                    source={require("../../assets/images/homeDrawerImages/SignOutIcon.png")}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      marginLeft: 5
                    }}
                  >
                    Sign Out
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.DRAWER_PRIMARY_COLOR,
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
          fontWeight: "bold"
        },
        
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, focused }) => (
            <Image
              style={{
                width: width * 0.07,
                height: height * 0.04,
                marginHorizontal: width * 0.02,
                tintColor: focused
                  ? COLORS.DRAWER_ACTIVE_ICON_COLOR
                  : COLORS.DRAWER_ICON_COLOR
              }}
              source={require("../../assets/images/homeScreenImages/HomeIcon.png")}
            />
          )
        }}
      />
      <Drawer.Screen
        name="My Profile"
        component={MyProfileScreen}
        options={{
          drawerIcon: ({ color, focused }) => (
            <Image
              style={{
                width: width * 0.07,
                height: height * 0.04,
                marginHorizontal: width * 0.02,
                tintColor: focused
                  ? COLORS.DRAWER_ACTIVE_ICON_COLOR
                  : COLORS.DRAWER_ICON_COLOR
              }}
              source={require("../../assets/images/homeDrawerImages/ProfileIcon.png")}
            />
          )
        }}
      />
    </Drawer.Navigator>
  );
};

export default HomeDrawerNavigator;
