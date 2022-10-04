import {
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  Pressable,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DIMENSIONS } from "../../theme";
import { useNavigation } from "@react-navigation/native";
// import BorderShadow from "react-native-shadow";
import axios from "axios";

const RegisterScreen = () => {
  const COLORS = useSelector((state) => state.theme.COLORS);
  console.log(DIMENSIONS.WIDTH, DIMENSIONS.HEIGHT);
  const Navigation = useNavigation("LoginPage");

  const [onChangeCity, setOnChangeCity] = useState("");
  const [onChangeName, setOnChangeName] = useState("");
  const [onChangePhone, setOnChangePhone] = useState("");
  const [onChangeEmail, setOnChangeEmail] = useState("");
  const [onChangePassword, setOnChangePassword] = useState("");

  const fetchApi = async () => {
    const data = JSON.stringify({
      touristName: onChangeName,
      touristEmail: onChangeEmail,
      touristCity: onChangeCity,
      touristMobileNo: onChangePhone,
      touristPassword: onChangePassword
    });

    const output = await axios({
      method: "post",
      url: "https://chaliyetirth.herokuapp.com/register",
      data,
      headers: {
        accept: "application/json",
        "content-type": "application/json"
      }
    });

    console.log(output.data,"Output");
  };

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
      <View
        style={{
          marginBottom: DIMENSIONS.HEIGHT * 0.07
        }}
      >
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
              fontSize: DIMENSIONS.WIDTH * 0.0833,
              fontWeight: "bold"
            }}
          >
            CREATE ACCOUNT
          </Text>
          <Text
            style={{
              color: COLORS.AUTH_SCREEN_TEXT_COLOR,
              opacity: 0.6
            }}
          >
            Please Create Account To Continue
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
                width: DIMENSIONS.WIDTH * 0.75,
                height: DIMENSIONS.HEIGHT * 0.07,
                paddingLeft: DIMENSIONS.WIDTH * 0.11,
                paddingVertical: DIMENSIONS.HEIGHT * 0.01
              }}
              placeholder="Full Name"
              placeholderTextColor={COLORS.AUTH_SCREEN_PLACEHOLDER_COLOR}
              onChangeText={setOnChangeName}
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
              source={require("../../assets/images/loginSignupIcons/User.png")}
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
                width: DIMENSIONS.WIDTH * 0.75,
                height: DIMENSIONS.HEIGHT * 0.07,
                paddingLeft: DIMENSIONS.WIDTH * 0.11,
                paddingVertical: DIMENSIONS.HEIGHT * 0.01
              }}
              placeholder="City"
              placeholderTextColor={COLORS.AUTH_SCREEN_PLACEHOLDER_COLOR}
              onChangeText={setOnChangeCity}
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
              source={require("../../assets/images/loginSignupIcons/City.png")}
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
                width: DIMENSIONS.WIDTH * 0.75,
                height: DIMENSIONS.HEIGHT * 0.07,
                paddingLeft: DIMENSIONS.WIDTH * 0.11,
                paddingVertical: DIMENSIONS.HEIGHT * 0.01
              }}
              placeholder="Phone"
              placeholderTextColor={COLORS.AUTH_SCREEN_PLACEHOLDER_COLOR}
              keyboardType="numeric"
              onChangeText={setOnChangePhone}
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
              source={require("../../assets/images/loginSignupIcons/Number.png")}
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
                width: DIMENSIONS.WIDTH * 0.75,
                height: DIMENSIONS.HEIGHT * 0.07,
                paddingLeft: DIMENSIONS.WIDTH * 0.11,
                paddingVertical: DIMENSIONS.HEIGHT * 0.01
              }}
              placeholder="Email"
              placeholderTextColor={COLORS.AUTH_SCREEN_PLACEHOLDER_COLOR}
              onChangeText={setOnChangeEmail}
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
                width: DIMENSIONS.WIDTH * 0.75,
                height: DIMENSIONS.HEIGHT * 0.07,
                paddingLeft: DIMENSIONS.WIDTH * 0.11,
                paddingVertical: DIMENSIONS.HEIGHT * 0.01
              }}
              placeholder="Password"
              placeholderTextColor={COLORS.AUTH_SCREEN_PLACEHOLDER_COLOR}
              secureTextEntry={true}
              onChangeText={setOnChangePassword}
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
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              fetchApi();
            }}
            style={{
              position: "absolute",
              right: DIMENSIONS.WIDTH * 0.001,
              height: DIMENSIONS.HEIGHT * 0.06,
              width: DIMENSIONS.WIDTH * 0.28,
              backgroundColor: COLORS.AUTH_SCREEN_PRIMARY_COLOR,
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
              SIGN UP
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
          Already Have An Account?
        </Text>
        <TouchableOpacity
          onPress={() => {
            Navigation.navigate("LoginPage");
          }}
        >
          <Text
            style={{
              marginHorizontal: DIMENSIONS.WIDTH * 0.02,
              color: COLORS.AUTH_SCREEN_PRIMARY_COLOR
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
