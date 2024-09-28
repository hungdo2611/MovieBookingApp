import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { Movie } from '../utils/generateMovies';
import Button from '../components/CustomButton'
import LazyLoadImage from '../components/Lazyimage';
import { bookMovie } from '../redux/reducers';

const BookingScreen: React.FC<{ route: any }> = ({ route }) => {
  const dispatch = useDispatch();
  const callback = route?.params?.callback;
  useEffect(() => {
    const data = route?.params?.movie;
    setMovie(data);
  }, [route?.params])

  const [movie, setMovie] = useState<Movie | null>();

  const handleBookingMovie = () => {
    if (movie && callback) {
      dispatch(bookMovie(movie.id));
      callback('thrid');
      setMovie(null)
    } else {
      Alert.alert("something error")
    }

  }
  if (!movie) {
    return <Text>Select movie in Home</Text>
  }
  return (
    <SafeAreaView testID='bookingScreen'>
      <View style={styles.container}>
        <LazyLoadImage source={{ uri: movie.thumbnail }} style={styles.image} />
        <Text>{movie?.title}</Text>
        <Text>{movie?.description}</Text>
        <Button testId='btn_book' title="Đặt Vé" onPress={handleBookingMovie} />
      </View>

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10
  },
  image: {
    width: 200, height: 200, alignSelf: 'center', margin: 20
  }

});
export default BookingScreen;