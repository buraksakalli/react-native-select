import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    padding: 5,
    margin: 5,
    flexDirection: 'row',
    borderWidth: 1,
  },
});

export interface ButtonInterface {
  title: string;
  onPress: (title: string | number) => void;
  borderColor?: string;
}

export const Button: React.FC<ButtonInterface> = ({
  onPress,
  title = 'Test',
  borderColor,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { borderColor }]}
      // @ts-ignore
      onPress={onPress}
    >
      <Text>{title}</Text>
      <Text>&times;</Text>
    </TouchableOpacity>
  );
};
