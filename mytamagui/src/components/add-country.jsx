import { View, Text, Input } from "tamagui";
import { Form, FormCountry } from "./form";

export const AddCountry = () => {
  return (
    <View>
      <Input m="$5" placeholder="Enter your newly visited country"/>
      <FormCountry />
    </View>
  );
};
