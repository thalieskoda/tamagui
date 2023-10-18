import { Check } from "@tamagui/lucide-icons";
import { Checkbox, Button, View } from "tamagui";
export const Homepage = ({ navigation }) => {
  return (
    <View>
      <Button
        size="$6"
        backgroundColor="$blue10Light"
        onPress={() => navigation.navigate("Details")}>
        This is a button
      </Button>
      <Checkbox size="$4">
        <Checkbox.Indicator>
          <Check />
        </Checkbox.Indicator>
      </Checkbox>
    </View>
  );
};
