import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, Pressable, Image } from "react-native";

const MovieRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [url]);

  return (
    <View>
      <Text style={{ fontSize: 19, fontWeight: "bold", color: "white" }}>{title}</Text>
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        {movies.map((movie, id) => (
          <Pressable key={id}>
            <Image
              style={{
                width: 105,
                margin: 10,
                height: 152,
                borderRadius: 6,
                resizeMode: "cover",
              }}
              source={{
                uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
              }}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default MovieRow;

const styles = StyleSheet.create({});
