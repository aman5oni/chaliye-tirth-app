import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store/store";
import IndexNavigator from "./navigators";
import Theme from "./theme";
import OnBoardScreen from "./screens/onBoardScreen";
import LoginScreen from "./screens/loginScreen";
import RegisterScreen from "./screens/registerScreen";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Theme />
        <IndexNavigator />
        {/* <LoginScreen /> */}
        {/* <OnBoardScreen /> */}
        {/* <RegisterScreen /> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
