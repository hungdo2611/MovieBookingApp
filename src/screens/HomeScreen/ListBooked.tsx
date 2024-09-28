import React from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import MovieCard from '../../components/MovieCard';
import { Movie } from '../../utils/generateMovies';

const BookedScreen: React.FC = () => {
    const data = useSelector(
        (state: { movies: { list_movies: Movie[] } }) => state.movies.list_movies);
    const movies_booked = data.filter(movie => movie.booked)
    if (movies_booked.length == 0) {
        return <Text> Booked film  empty </Text>
    }
    return (
        <SafeAreaView testID='list_booked'
        >
            <FlatList
                data={movies_booked}
                renderItem={({ item }) => <MovieCard movie={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    );
};
export default BookedScreen;