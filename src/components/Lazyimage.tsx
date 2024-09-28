import React, { useState } from 'react';
import { Image, View, StyleSheet } from 'react-native';

interface LazyLoadImageProps {
  source: { uri: string };
  placeholderSource?: { uri: string }; // New prop for placeholder
  style?: object;
}

const LazyLoadImage: React.FC<LazyLoadImageProps> = ({
  source,
  placeholderSource = require('../assets/thumb.png'),
  style,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <View style={style}>
      {isLoading && (
        <Image
          source={placeholderSource} // Show the placeholder while loading
          style={style}
          resizeMode="cover"
        />
      )}
      <Image
        source={source}
        style={style}
        onLoad={handleLoad}
        onError={() => setIsLoading(false)}
        resizeMode="cover"
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LazyLoadImage;