import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { Character } from '../../redux/slices/characterSlice';
import { colors } from '../../features/theme/colors';
import styles from './CharacterCard.Styles';
import UserText from '../UserText';

type Props = {
  character: Character;
};

const CharacterCard = ({ character }: Props) => {
  const progress = useSharedValue(0);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
    };
  });

  useEffect(() => {
    progress.value = withTiming(1, { duration: 3000 });
  }, [progress]);

  return (
    <Animated.View style={[styles.container, reanimatedStyle]}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{ uri: character.image }} />
      </View>
      <View style={styles.infoWrapper}>
        <UserText
          text={character.name}
          color={colors.elements.buttonText}
          fontFamily="OpenSansBold"
        />
        <UserText text={character.species} fontSize={14} />
        <Text
          style={[
            character.status === 'Alive' && styles.statusAlive,
            character.status === 'Dead' && styles.statusDead,
            character.status === 'unknown' && styles.statusUnknown,
          ]}>
          {character.status}
        </Text>
      </View>
    </Animated.View>
  );
};

export default CharacterCard;
