import { StyleSheet } from 'react-native';

export const getStyles = (isDayMode, isSmallFont) => StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: isDayMode ? '#ffffff' : '#1e1e1e',
    borderBottomWidth: 1,
    borderBottomColor: isDayMode ? '#e0e0e0' : '#333333',
  },
  headerTitle: {
    fontSize: isSmallFont ? 16 : 20,
    fontWeight: 'bold',
    color: isDayMode ? '#333333' : '#ffffff',
    flex: 1,
  },
  switchesContainer: {
    flexDirection: 'row',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  switchLabel: {
    fontSize: isSmallFont ? 12 : 14,
    color: isDayMode ? '#666666' : '#cccccc',
    marginRight: 8,
  },
});