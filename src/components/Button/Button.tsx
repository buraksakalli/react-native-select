import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './button.style';

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
