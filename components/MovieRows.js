import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import movieUrl from '../moviesAPI/tmdb_API.js'
import MovieRow from '../components/MovieRow';
const MovieRows = () => {
    const data = movieUrl;
  return (
    <View>
        {data.map((movie) => (
            <MovieRow title={movie.name} url={movie.url}/>
        ))}
      <Text>MovieRows</Text>
    </View>
  )
}

export default MovieRows

const styles = StyleSheet.create({})