import React from 'react';
import { useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import ListScreen from './ListFilm';
import FavourtieScreen from './ListFavor';
import BookedScreen from './ListBooked';

const renderScene = SceneMap({
  first: ListScreen,
  second: FavourtieScreen,
  thrid: BookedScreen
});
const HomeScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'List Film', testID: 'tab_film' },
    { key: 'second', title: 'Favourite', testID: 'tab_favor' },
    { key: 'thrid', title: 'Booked', testID: 'tab_booked' },

  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};


export default HomeScreen;