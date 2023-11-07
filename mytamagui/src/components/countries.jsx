import React, { useEffect, useState } from "react";
import { View, Text, Button, ScrollView } from "tamagui";
import { ActivityIndicator } from "react-native";
import countriesList from "../../assets/countries-list.json";
export const Countries = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = "https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all";
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key": "51bfca0c62mshece35940d7c1bbdp1c4292jsnc420ad0fb819",
  //         "X-RapidAPI-Host": "ajayakv-rest-countries-v1.p.rapidapi.com",
  //       }
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       const result = await response.json();
  //       setIsLoading(false);
  //       setData(result);
  //       console.log({ "data": result }); // Log the result, not the state
  //     } catch (error) {
  //       setIsLoading(false);
  //       setError(error);
  //       console.log({ "error" : error });
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <ScrollView horizontal={true}>
            {countriesList.map((country, index) => {
              return (
                <View key={index}>
                  <Button size="$large" margin="$1.5" backgroundColor="pink">
                    <Text>{country.name}</Text>
                  </Button>
                </View>
              );
            })}
          </ScrollView>
        </View>
      )}
    </>
  );
};
