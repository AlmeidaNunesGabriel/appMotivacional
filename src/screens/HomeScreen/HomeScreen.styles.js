import { StyleSheet } from 'react-native';

export const getStyles = (isDayMode, isSmallFont) => StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
  },
  quoteContainer: {
    backgroundColor: isDayMode ? '#ffffff' : '#1e1e1e',
    padding: 25,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quote: {
    fontSize: isSmallFont ? 16 : 20,
    fontStyle: 'italic',
    textAlign: 'center',
    color: isDayMode ? '#333333' : '#ffffff',
    lineHeight: isSmallFont ? 24 : 28,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
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
});