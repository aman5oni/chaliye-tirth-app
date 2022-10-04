import {
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  Pressable,
  TouchableOpacity
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { DIMENSIONS } from "../../theme";
import { useNavigation } from "@react-navigation/native";
// import BorderShadow from "react-native-shadow";

const LoginScreen = () => {
  const Navigation = useNavigation();
  const COLORS = useSelector((state) => state.theme.COLORS);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.AUTH_SCREEN_MAIN_COLOR
      }}
    >
      <StatusBar
        backgroundColor={COLORS.STATUS_BAR_COLOR}
        barStyle={COLORS.STATUS_BAR_CONTENT_COLOR}
      />
      <View>
        <Image
          style={{
            position: "absolute",
            top: DIMENSIONS.HEIGHT * -0.25,
            right: DIMENSIONS.WIDTH * -0.39,
            width: DIMENSIONS.WIDTH * 0.61,
            height: DIMENSIONS.WIDTH * 0.49
          }}
          source={require("../../assets/images/loginSignupIcons/Image.png")}
        />
        <View
          style={{
            marginBottom: DIMENSIONS.HEIGHT * 0.052
          }}
        >
          <Text
            style={{
              color: COLORS.AUTH_SCREEN_TEXT_COLOR,
              fontSize: DIMENSIONS.WIDTH * 0.083,
              fontWeight: "bold"
            }}
          >
            LOGIN
          </Text>
          <Text
            style={{
              color: COLORS.AUTH_SCREEN_TEXT_COLOR,
              opacity: 0.6
            }}
          >
            Please Sign In To Continue
          </Text>
        </View>
        <View
          style={{
            marginBottom: DIMENSIONS.HEIGHT * 0.039
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.AUTH_SCREEN_OTHER_COLOR,
              width: DIMENSIONS.WIDTH * 0.75,
              height: DIMENSIONS.HEIGHT * 0.07,
              shadowColor: COLORS.AUTH_SCREEN_SHADOW_COLOR,
              shadowRadius: 1,
              shadowOffset: {
                width: 0,
                height: 1
              },
              shadowOpacity: 0.8,
              elevation: 4,
              marginVertical: DIMENSIONS.HEIGHT * 0.01
            }}
          >
            <TextInput
              style={{
                color: COLORS.AUTH_SCREEN_TEXT_COLOR,
                borderColor: "orange",
                width: DIMENSIONS.WIDTH * 0.75,
                height: DIMENSIONS.HEIGHT * 0.07,
                paddingLeft: DIMENSIONS.WIDTH * 0.11,
                paddingVertical: DIMENSIONS.HEIGHT * 0.01
              }}
              placeholder="Email"
              placeholderTextColor={COLORS.AUTH_SCREEN_PLACEHOLDER_COLOR}
            />
            <Image
              style={{
                tintColor: COLORS.AUTH_SCREEN_ICON_COLOR,
                position: "absolute",
                top: DIMENSIONS.HEIGHT * 0.019,
                left: DIMENSIONS.WIDTH * 0.023,
                width: DIMENSIONS.WIDTH * 0.07,
                height: DIMENSIONS.WIDTH * 0.07
              }}
              source={require("../../assets/images/loginSignupIcons/Email.png")}
            />
          </View>

          <View
            style={{
              backgroundColor: COLORS.AUTH_SCREEN_OTHER_COLOR,
              width: DIMENSIONS.WIDTH * 0.75,
              height: DIMENSIONS.HEIGHT * 0.07,
              shadowColor: COLORS.AUTH_SCREEN_SHADOW_COLOR,
              shadowRadius: 1,
              shadowOffset: {
                width: 0,
                height: 1
              },
              shadowOpacity: 0.8,
              elevation: 4,
              marginVertical: DIMENSIONS.HEIGHT * 0.01
            }}
          >
            <TextInput
              style={{
                color: COLORS.AUTH_SCREEN_TEXT_COLOR,
                borderColor: "orange",
                width: DIMENSIONS.WIDTH * 0.75,
                height: DIMENSIONS.HEIGHT * 0.07,
                paddingLeft: DIMENSIONS.WIDTH * 0.11,
                paddingVertical: DIMENSIONS.HEIGHT * 0.01
              }}
              placeholder="Password"
              placeholderTextColor={COLORS.AUTH_SCREEN_PLACEHOLDER_COLOR}
              secureTextEntry={true}
            />
            <Image
              style={{
                tintColor: COLORS.AUTH_SCREEN_ICON_COLOR,
                position: "absolute",
                top: DIMENSIONS.HEIGHT * 0.019,
                left: DIMENSIONS.WIDTH * 0.023,
                width: DIMENSIONS.WIDTH * 0.07,
                height: DIMENSIONS.WIDTH * 0.07,
                borderWidth: 1
              }}
              source={require("../../assets/images/loginSignupIcons/Password.png")}
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                top: DIMENSIONS.HEIGHT * 0.023,
                right: DIMENSIONS.WIDTH * 0.025
              }}
            >
              <Text
                style={{
                  color: COLORS.AUTH_SCREEN_PRIMARY_COLOR,
                  fontSize: 10
                }}
              >
                FORGOT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              position: "absolute",
              right: DIMENSIONS.WIDTH * 0.001,
              height: DIMENSIONS.HEIGHT * 0.06,
              width: DIMENSIONS.WIDTH * 0.28,
              backgroundColor: "rgb(255, 106, 0)",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              paddingLeft: DIMENSIONS.WIDTH * 0.04
            }}
          >
            <Text
              style={{
                color: COLORS.AUTH_SCREEN_BUTTON_TEXT_COLOR,
                fontWeight: "bold"
              }}
            >
              LOGIN
            </Text>
            <Image
              style={{
                tintColor: COLORS.AUTH_SCREEN_BUTTON_TEXT_COLOR,
                width: DIMENSIONS.WIDTH * 0.1,
                height: DIMENSIONS.WIDTH * 0.1
              }}
              source={require("../../assets/images/loginSignupIcons/Arrow.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: DIMENSIONS.HEIGHT * 0.049,
          flexDirection: "row"
        }}
      >
        <Text
          style={{
            color: COLORS.AUTH_SCREEN_TEXT_COLOR,
            opacity: 0.6
          }}
        >
          Don't have an account
        </Text>
        <TouchableOpacity
          onPress={() => {
            Navigation.navigate("RegisterPage");
          }}
        >
          <Text
            style={{
              marginHorizontal: DIMENSIONS.WIDTH * 0.02,
              color: COLORS.AUTH_SCREEN_PRIMARY_COLOR
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
