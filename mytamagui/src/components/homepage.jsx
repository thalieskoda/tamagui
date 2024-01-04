import { Check } from "@tamagui/lucide-icons";
import { Checkbox, Button, View, Text, H4 } from "tamagui";
export const Homepage = ({ navigation }) => {
  return (
    <View>
      <H4 textAlign="center" margin="$10">
        Welcome Thalie!
      </H4>
      <Button
        size="$4"
        margin="$5"
        backgroundColor="$pink5Light"
        pressStyle={{
          scale: 0.9,
        }}
        onPress={() => navigation.navigate("Details")}>
        Click here to access your profile
      </Button>
    </View>
  );
};
