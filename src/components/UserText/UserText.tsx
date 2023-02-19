import { Text, ColorValue } from 'react-native';
import React from 'react';
import { colors } from '../../features/theme/colors';

interface UserText {
  text: string;
  fontFamily?: string;
  color?: ColorValue | undefined;
  fontSize?: number | undefined;
}

const UserText = ({
  color = colors.elements.buttonText,
  fontFamily = 'OpenSansRegular',
  fontSize = 16,
  text,
}: UserText) => {
  return <Text style={{ fontFamily: fontFamily, color: color, fontSize: fontSize }}>{text}</Text>;
};

export default UserText;
