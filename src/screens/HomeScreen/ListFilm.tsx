import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import MovieCard from '../../components/MovieCard';
import { Movie } from '../../utils/generateMovies';

const ListScreen: React.FC = (props: any) => {
    console.log("props", props);
    const movies = useSelector((state: { movies: { list_movies: Movie[] } }) => state.movies.list_movies);
    return (
        <SafeAreaView>
            <FlatList
                testID='listFilm'
                data={movies}
                renderItem={({ item }) => <MovieCard jumpTo={props?.jumpTo} movie={item} />}
                keyExtractor={(item) => item.id.toString()}
                initialNumToRender={10}
                windowSize={10}
            />
        </SafeAreaView>
    );
};
export default ListScreen;