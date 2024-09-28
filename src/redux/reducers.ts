import { generateMovies, Movie } from '../utils/generateMovies';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface MovieState {
  list_movies: Movie[];
  list_favourite: Movie[];
  list_booked: Movie[];
}

const initialState: MovieState = {
  list_movies: generateMovies(1000),
  list_favourite: [],
  list_booked: []
};
const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<number>) {
      const movieId = action.payload;
      state.list_movies = state.list_movies.map(movie =>
        movie.id === movieId ? { ...movie, favorite: !movie.favorite } : movie
      )
    },
    bookMovie(state, action: PayloadAction<number>) {
      const movieId = action.payload;
      state.list_movies = state.list_movies.map(movie =>
        movie.id === movieId ? { ...movie, booked: true } : movie
      )
    },

    // ... other reducer functions
  },
});



export const { toggleFavorite, bookMovie } = movieSlice.actions;
export default movieSlice.reducer;