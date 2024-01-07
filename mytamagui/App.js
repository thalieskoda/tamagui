import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { getToken, TamaguiProvider } from "tamagui";
import config from "./tamagui.config";
import { ClerkProvider, useAuth} from "@clerk/clerk-expo";
import { Homepage } from "./src/components/homepage";
import { Details } from "./src/components/details";
import { Countries } from "./src/components/countries";
import { AddCountry } from "./src/components/add-country";
import { Key } from "@tamagui/lucide-icons";
import * as SecureStore from 'expo-secure-store'
import { useEffect } from "react";
import PublicLayout from "./src/components/auth/_layout";
import { useSegments } from "expo-router";
const clerkPublishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
import { useRouter } from "expo-router";
import TabsNavigator from "./src/components/tabs/tabs-navigator";
//own custom tokenCache - past this to our provider
const tokenCache = {
  async getToken(key) {
    try {
      return await SecureStore.getItemsAsync(key);
    } catch (err) {
      return null;
    }
  },

  async saveToken(key, value) {
    try {
      return await SecureStore.setItemsAsync(key, value);
    } catch (err) {
      // Handle the error if needed
      console.error(err);
    }
  }
};

const InitialLayout = () => {
  const {isLoaded, isSignedIn} = useAuth();

  const segments = useSegments();
  const router = useRouter();
useEffect (()=> {
console.log('isSignedIn', isSignedIn);

if (!isLoaded) return ;
const inTabsGroup = segments[0] ==='(auth)';

if (isSignedIn && !inTabsGroup) {
  router.replace('/home');
} else if (!isSignedIn){
  router.replace('/login')
}
}, [isSignedIn]);

  return(
    <></>
  )
}



const Stack = createStackNavigator();

export default function App() {




  return (
    <ClerkProvider publishableKey={clerkPublishableKey} tokenCache={tokenCache}>
      <TamaguiProvider config={config}>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Tabs" component={TabsNavigator} options={{ headerShown: false }} />
              <Stack.Screen name="TRVLUP" component={Homepage} />
              <Stack.Screen name="Details" component={Details} />
              <Stack.Screen name="Countries" component={Countries} />
              <Stack.Screen
                name="Please add a new country"
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
