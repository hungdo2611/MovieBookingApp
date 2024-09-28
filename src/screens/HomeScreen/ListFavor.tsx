import React from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import MovieCard from '../../components/MovieCard';
import { Movie } from '../../utils/generateMovies';

const FavourtieScreen: React.FC = () => {
    const data = useSelector(
        (state: { movies: { list_movies: Movie[] } }) => state.movies.list_movies);
    const movies_favor = data.filter(movie => movie.favorite)
    if (movies_favor.length == 0) {
        return <Text> favourite film  empty </Text>
    }
    return (
        <SafeAreaView testID='list_favor'>
            <FlatList
                data={movies_favor}
                renderItem={({ item }) => <MovieCard movie={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    );
};
export default FavourtieScreen;