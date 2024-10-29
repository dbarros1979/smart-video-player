import { View, Text } from 'react-native'
import React from 'react'
import Filter from '../../components/MyComponents/Filter'
import MovieHeading from '../../components/MyComponents/MovieHeading'
import MovieCard from '../../components/MyComponents/MovieCard'

const index = () => {
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
      <MovieCard Title='A p de Bambuuuu' />
    </View>
  )
}

export default index