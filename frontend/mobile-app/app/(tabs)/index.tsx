import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Filter from '../../components/MyComponents/Filter'
import MovieHeading from '../../components/MyComponents/MovieHeading'
import MovieCard from '../../components/MyComponents/MovieCard'
import axios from 'axios'

const index = () => {

  const [Title, SetTitle] = useState("No Title");
  const [Url, SetUrl] = useState("");
  const [error, SetError] = useState<string | null>(null); // corrected to SetError

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://moviesdatabase.p.rapidapi.com/titles/tt10967898', {
          headers: {
            'x-rapidapi-key': '<YourApiKey>',
            'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
          }
        });
        console.log(response.data)
        console.log(response.data.results.primaryImage.url)
        const title = response.data?.results.originalTitleText.text || "No Title Found";
        SetTitle(title);
        SetUrl(response.data.results.primaryImage.url)
      } catch (err) {
        SetError("Failed to fetch title"); // corrected to SetError
      }
    };

    fetchData();
  }, []);

  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        paddingHorizontal: 20
      }}
    >
      <Filter />
      <MovieHeading />
      <MovieCard Title={Title} url={Url} />
    </View>
  )
}

export default index