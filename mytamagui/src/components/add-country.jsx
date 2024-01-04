import { View, Text, Input } from "tamagui";
import { Form, FormCountry } from "./form";
import { BlurView } from "expo-blur";
export const AddCountry = () => {
  return (
    <BlurView intensity={70}>
      <Input m="$5" placeholder="Enter your newly visited country"/>
      <FormCountry />
    </BlurView>
  );
};
