import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../features/theme/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.illustration.secondary,
    margin: 4,
    flex: 1 / 2,
    borderRadius: 10,
    padding: 8,
  },
  imageWrapper: {
    flex: 1,
    height: Dimensions.get('screen').height / 4,
    resizeMode: 'contain',
  },
  image: {
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  infoWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingVertical: 8,
  },
  statusAlive: {
    color: colors.status.success,
    fontFamily: 'OpenSansRegular',
  },
  statusDead: {
    color: colors.status.danger,
    fontFamily: 'OpenSansRegular',
  },
  statusUnknown: {
    color: colors.status.warning,
    fontFamily: 'OpenSansRegular',
  },
});
