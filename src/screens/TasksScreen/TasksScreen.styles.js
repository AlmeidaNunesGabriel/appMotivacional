import { StyleSheet } from 'react-native';

export const getStyles = (isDayMode, isSmallFont) => StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  navButton: {
    backgroundColor: isDayMode ? '#007AFF' : '#0A84FF',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  navButtonText: {
    color: '#ffffff',
    fontSize: isSmallFont ? 14 : 16,
    fontWeight: '600',
  },
  tasksList: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyStateText: {
    fontSize: isSmallFont ? 14 : 16,
    color: isDayMode ? '#999999' : '#666666',
    textAlign: 'center',
    lineHeight: isSmallFont ? 20 : 24,
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: isDayMode ? '#007AFF' : '#0A84FF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});