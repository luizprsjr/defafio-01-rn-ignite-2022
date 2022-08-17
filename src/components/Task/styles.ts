import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 56,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#262626',
  },
  checkedContainer: {
    borderWidth: 0.5,
    borderColor: '#333333',
  },
  checkedBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: '#5E60CE',
  },
  uncheckedBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 18,
    width: 18,
    borderWidth: 1,
    borderRadius: 9,
    borderColor: '#4EA8DE',
  },
  completedTaskTitle: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    textDecorationLine: 'line-through',
    color: '#808080',
  },
  uncompletedTaskTitle: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    color: '#F2F2F2',
  },
  trash: {
    height: 14,
  },
});
