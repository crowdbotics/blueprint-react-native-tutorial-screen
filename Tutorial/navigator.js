import { createStackNavigator } from "react-navigation-stack";

import MainTutorialScreen from "./screens/MainTutorial";
import Home from "./screens/";


export const TutorialNavigator = createStackNavigator(
  {
    MainTutorial: { screen: MainTutorialScreen },
    Home: { screen: Home },
    
  },
  {
    initialRouteName: "Home",
  }
);