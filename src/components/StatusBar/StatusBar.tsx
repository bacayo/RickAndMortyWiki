import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { colors } from '../../features/theme/colors';

const StatusBar = () => {
  return (
    <ExpoStatusBar
      style="auto"
      backgroundColor={colors.illustration.secondary}
      translucent={true}
    />
  );
};

export default StatusBar;
