import React, { useEffect, useState } from "react";
import { View, Text } from "tamagui";
import { ActivityIndicator } from "react-native";

export const Countries = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); // Use useState to manage the error state
  const [isLoading, setIsLoading] = useState(true); // Start with isLoading set to true

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "51bfca0c62mshece35940d7c1bbdp1c4292jsnc420ad0fb819",
          "X-RapidAPI-Host": "ajayakv-rest-countries-v1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setIsLoading(false);
        setData(result);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };

    fetchData();
  }, []);

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      return <Text>Error: {error.message}</Text>;
    }

    if (data) {
      return (
        <View>
          <Text>Country Name: {data.name}</Text>
          <Text>Population: {data.population}</Text>
        </View>
      );
    }

    return <Text>No data available.</Text>;
  };

  return <View>{getContent()}</View>;
};
