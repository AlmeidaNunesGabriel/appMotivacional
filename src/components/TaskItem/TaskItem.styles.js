import { StyleSheet } from 'react-native';

export const getStyles = (isDayMode, isSmallFont) => StyleSheet.create({
  taskItem: {
    backgroundColor: isDayMode ? '#ffffff' : '#1e1e1e',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: isDayMode ? '#007AFF' : '#0A84FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: isDayMode ? '#007AFF' : '#0A84FF',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 12,
  },
  taskText: {
    flex: 1,
    fontSize: isSmallFont ? 14 : 16,
    color: isDayMode ? '#333333' : '#ffffff',
    marginLeft: 10,
  },
  taskTextCompleted: {
    textDecorationLine: 'line-through',
    color: isDayMode ? '#999999' : '#666666',
  },
  deleteButton: {
    padding: 10,
  },
  deleteButtonText: {
    color: '#FF3B30',
    fontSize: isSmallFont ? 12 : 14,
    fontWeight: '600',
  },
});