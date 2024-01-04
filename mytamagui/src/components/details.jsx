import { View, Text, YStack, XStack, Button, ScrollView, H4 } from "tamagui";
import { Countries } from "./countries";
import { AddCountry } from "./add-country";
import {BlurView} from "expo-blur"
import { useState } from "react";

export const Details = ({ navigation }) => {
  const [newCountry, setNewCountry] = useState("");
  return (
    <BlurView intensity={70}>
      <View>
        <H4 m="$5">Visited Countries:</H4>
        <ScrollView horizontal={true}>
          <Countries />
        </ScrollView>
      </View>
      <Button
        size="$6"
        margin="$6"
        backgroundColor="$pink6Light"
        onPress={() => navigation.navigate("Please add a new country")}
        >
        Add a new country
        
      </Button>
    </BlurView>
  );
};
