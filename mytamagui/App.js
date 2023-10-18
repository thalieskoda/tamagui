import { SafeAreaView, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";

import { Homepage } from "./src/components/homepage";
import { Details } from "./src/components/details";
import { Countries } from "./src/components/countries";

const Stack = createStackNavigator();

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="TRVL-UP" component={Homepage} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Countries" component={Countries}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </TamaguiProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
