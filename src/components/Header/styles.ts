import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 173 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    backgroundColor: '#0D0D0D',
  },
});
