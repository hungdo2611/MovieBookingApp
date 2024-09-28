import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  disable?: boolean;
  background?: string;
  testId?: string
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, disable, background, testId }) => (
  <TouchableOpacity testID={testId} disabled={disable} style={[styles.button, { backgroundColor: background ? background : '#6200ee' }]} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default CustomButton;