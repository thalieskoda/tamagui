import { View, Text, YStack, XStack, Button, ScrollView } from "tamagui";
import { Countries } from "./countries";

export const Details = ({ navigation }) => {
  return (
    <View>
        <Button
        size="$6"
        margin="$6"
        backgroundColor="$blue10Light"
        onPress={() => navigation.navigate("Countries")}>click here</Button>
      <ScrollView horizontal={true}>
        <Countries/>
     </ScrollView>
    </View>
  );
};
