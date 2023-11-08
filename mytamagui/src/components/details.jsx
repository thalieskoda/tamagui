import { View, Text, YStack, XStack, Button, ScrollView, H4 } from "tamagui";
import { Countries } from "./countries";
import { AddCountry } from "./add-country";
export const Details = ({ navigation }) => {
  return (
    <View>
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
        onPress={() => navigation.navigate("Please add a new country")}>
        Add a new country
      </Button>
    </View>
  );
};
