import { View, FlatList, ListRenderItem } from 'react-native';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { Character } from '../../redux/slices/characterSlice';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import { getAllCharacters } from '../../redux/thunks';
import styles from './HomeScreen.Styles';
import StatusBar from '../../components/StatusBar/StatusBar';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { character } = useAppSelector((state) => state.character);

  useEffect(() => {
    dispatch(getAllCharacters());

    return () => {};
  }, [dispatch]);

  //* Render character card
  const renderItem: ListRenderItem<Character> = ({ item }) => <CharacterCard character={item} />;

  return (
    <View style={styles.container}>
      <StatusBar />
      <FlatList data={character} renderItem={renderItem} numColumns={2} />
    </View>
  );
};

export default HomeScreen;
