import { View, Text, YStack, XStack, Button, ScrollView } from "tamagui";

export const Details = ({ navigation }) => {
  return (
    <View>
      <ScrollView horizontal={true}>
        <Button
        size="$6"
        backgroundColor="$blue10Light"
        onPress={() => navigation.navigate("Countries")}>click here</Button>
        <Button>this is the detail screen</Button>
        <Button>this is the detail screen</Button>
        <Button>this is the detail screen</Button>
        <Button>this is the detail screen</Button>
        <Button>this is the detail screen</Button>
     </ScrollView>
    </View>
  );
};
