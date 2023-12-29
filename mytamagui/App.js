import { SafeAreaView, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ClerkProvider } from "@clerk/clerk-react";
import * as SecureStore from "expo-secure-store";
import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";

import { Homepage } from "./src/components/homepage";
import { Details } from "./src/components/details";
import { Countries } from "./src/components/countries";
import { AddCountry } from "./src/components/add-country";

import { SignedOut, SignedIn } from "@clerk/clerk-react";
const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

//own custom tokenCache - past this to our provider
const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  //
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
const Stack = createStackNavigator();

export default function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <TamaguiProvider config={config}>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="HELLO" component={Homepage} />
              <Stack.Screen name="Details" component={Details} />
              <Stack.Screen name="Countries" component={Countries} />
              <Stack.Screen
                name="Please add a new country"
                component={AddCountry}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </TamaguiProvider>
    </ClerkProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
