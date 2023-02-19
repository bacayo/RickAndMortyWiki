import { StyleSheet, StatusBar, Platform } from 'react-native';
import { colors } from '../../features/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.elements.background,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
