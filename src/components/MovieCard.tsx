import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../redux/reducers';
import { Movie } from '../utils/generateMovies';
import Button from './CustomButton'
import LazyLoadImage from './Lazyimage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
interface MovieCardProps {
  movie: Movie;
  jumpTo?: Function;
}
type ScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const MovieCard: React.FC<MovieCardProps> = ({ movie, jumpTo }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<ScreenProp>();
  const handleBooking = () => {
    if (!movie.booked) {
      navigation.navigate("Bookinng", {
        screen: "Home",
        movie: movie,
        callback: (screen: String) => {
          if (jumpTo) {
            jumpTo(screen);
            navigation.navigate("Home")
          }
        }
      });

    }
  }
  return (
    <View style={{ flexDirection: "row", padding: 10 }}>
      <LazyLoadImage source={{ uri: movie.thumbnail }} style={styles.image} />
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <Text testID={`title${movie.id}`}>{movie.title}</Text>
        <Text testID={`des${movie.id}`} style={{ flex: 1 }}>{movie.description}</Text>
        <Button
          testId={`bookFilmButton${movie.id}`}
          title={movie.booked ? "Đã Xem" : "Đặt Vé"}
          disable={movie.booked ? true : false}
          background={movie.booked ? 'gray' : ''}
          onPress={handleBooking}
        />
        <Button
          testId={`btnLike${movie.id}`}
          background={movie.favorite ? "#e6864e" : 'rgba(51, 170, 51,  1)'}
          title={movie.favorite ? "Bỏ Yêu Thích" : "Yêu Thích"}

          onPress={() => dispatch(toggleFavorite(movie.id))}
        />
      </View>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {

  },
  image: {
    width: 120, height: 200
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
export default MovieCard;