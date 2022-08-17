import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const styles = StyleSheet.create({
  container: {
    zIndex: 0,
    flex: 1,
  },
  header: {
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 173 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    backgroundColor: '#0D0D0D',
  },
  logo: {},
  newTask: {
    position: 'absolute',
    zIndex: 2,
    flexDirection: 'row',
    width: '100%',
    bottom: -27,
    paddingHorizontal: 24,
  },
  input: {
    flex: 1,
    height: 54,
    padding: 16,
    borderRadius: 6,
    backgroundColor: '#262626',
    color: '#F2F2F2',
    marginRight: 4,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 54,
    width: 54,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
  },
  tasksContainer: {
    zIndex: 1,
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#1A1A1A',
  },
  tasksStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 55,
    marginBottom: 20,
  },
  statusBox: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  statusTitle: {
    fontWeight: 'bold',
    marginRight: 8,
  },
  countBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 19,
    width: 25,
    backgroundColor: '#333333',
    borderRadius: 999,
  },
  count: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D9D9D9',
  },
  noTasksContainer: {
    alignItems: 'center',
  },
  separatorLine: {
    width: '100%',
    height: 1,
    borderWidth: 1,
    borderColor: '#333',
  },
  clipboardImage: {
    marginTop: 48,
    marginBottom: 16,
  },
  clipboardText: {
    color: '#808080',
    fontSize: 14,
    lineHeight: 19.6,
  },
});
