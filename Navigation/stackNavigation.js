import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from '../Screen/WelcomScreen';
import SplashScreen from '../Screen/SplashScreen';
import StarSelectionScreen  from '../Screen/StarSelectScreen'
import StarOne from "../Screen/StarOne"

const RootStack = createStackNavigator();

const StackNavigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <RootStack.Screen name="StarSelectionScreen" component={StarSelectionScreen} />
      <RootStack.Screen name="StarOne" component={StarOne} />
     
     
     
    </RootStack.Navigator>
  );
};

export default StackNavigation;
