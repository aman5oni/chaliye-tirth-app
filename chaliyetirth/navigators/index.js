import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnBoardScreen from "../screens/onBoardScreen";
import AuthNavigator from "./authNavigator";
const Stack = createStackNavigator();

const IndexNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch == null) {
    return null;
  } else if (isFirstLaunch == true) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Onboard" component={OnBoardScreen} />
        <Stack.Screen name="AuthPage" component={AuthNavigator} />
      </Stack.Navigator>
    );
  } else {
    return <AuthNavigator />;
  }
};

export default IndexNavigator;
