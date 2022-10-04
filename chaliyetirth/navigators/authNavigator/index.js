import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../screens/loginScreen";
import RegisterScreen from "../../screens/registerScreen";
import HomeNavigator from "../homeNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Auth = createStackNavigator();

const AuthNavigator = () => {
  const [isAlreadyLogin, setIsAlreadyLogin] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLogin").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLogin", "true");
        setIsAlreadyLogin(true);
      } else {
        setIsAlreadyLogin(false);
      }
    });
  }, []);

  if (isAlreadyLogin == null) {
    return null;
  } else if (isAlreadyLogin == true) {
    return (
      <Auth.Navigator>
        <Auth.Screen
          options={{
            headerShown: false
          }}
          name="LoginPage"
          component={LoginScreen}
        />
        <Auth.Screen
          options={{
            headerShown: false
          }}
          name="RegisterPage"
          component={RegisterScreen}
        />
      </Auth.Navigator>
    );
  } else {
    return <HomeNavigator />;
  }
};

export default AuthNavigator;
