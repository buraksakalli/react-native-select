import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './button.style';

export interface ButtonInterface extends TouchableOpacityProps {
  title: string;
  borderColor?: string;
}

export const Button: React.FC<ButtonInterface> = ({
  onPress,
  title = 'option',
  borderColor,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { borderColor }]}
      onPress={onPress}
    >
      <Text>{title}</Text>
      <Text>&times;</Text>
    </TouchableOpacity>
  );
};
