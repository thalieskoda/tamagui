import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Homepage } from "./src/components/homepage";
import { Details } from "./src/components/details";
import { Countries } from "./src/components/countries";
import { AddCountry } from "./src/components/add-country";
import { TouchableOpacity, Text } from "react-native";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Homepage} />
      <Tab.Screen name="Details" component={Details} />
      <Tab.Screen name="Countries" component={Countries} />
      <Tab.Screen
        name="AddCountry"
        component={AddCountry}
        options={({ navigation }) => ({
          presentation: "transparentModal",
          animation: "fade",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text>X</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;