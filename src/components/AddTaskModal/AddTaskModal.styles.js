import { StyleSheet } from 'react-native';

export const getStyles = (isDayMode, isSmallFont) => StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: isDayMode ? '#ffffff' : '#1e1e1e',
    padding: 25,
    borderRadius: 15,
    width: '85%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: isSmallFont ? 16 : 18,
    fontWeight: 'bold',
    color: isDayMode ? '#333333' : '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: isDayMode ? '#e0e0e0' : '#333333',
    backgroundColor: isDayMode ? '#f9f9f9' : '#2a2a2a',
    color: isDayMode ? '#333333' : '#ffffff',
    padding: 12,
    borderRadius: 8,
    fontSize: isSmallFont ? 14 : 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: isDayMode ? '#f0f0f0' : '#333333',
  },
  confirmButton: {
    backgroundColor: isDayMode ? '#007AFF' : '#0A84FF',
  },
  modalButtonText: {
    textAlign: 'center',
    fontSize: isSmallFont ? 14 : 16,
    fontWeight: '600',
  },
  cancelButtonText: {
    color: isDayMode ? '#666666' : '#cccccc',
  },
  confirmButtonText: {
    color: '#ffffff',
  },
});