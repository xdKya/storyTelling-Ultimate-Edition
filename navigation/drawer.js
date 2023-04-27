import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "../navigation/bottomTab";
import Profile from "../screens/profile";
import StackNavigator from "./stack";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="stack" component={StackNavigator}></Drawer.Screen>
      <Drawer.Screen name="profile" component={Profile}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
