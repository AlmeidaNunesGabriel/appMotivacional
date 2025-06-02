import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { useAppContext } from '../../contexts/AppContext';
import { getStyles } from './AddTaskModal.styles';

const AddTaskModal = ({ visible, onClose }) => {
  const [taskText, setTaskText] = useState('');
  const { addTask, isDayMode, isSmallFont } = useAppContext();
  const styles = getStyles(isDayMode, isSmallFont);

  const handleAddTask = async () => {
    const success = await addTask(taskText);
    if (success) {
      setTaskText('');
      onClose();
    }
  };

  const handleClose = () => {
    setTaskText('');
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={handleClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Nova Tarefa</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Digite sua tarefa..."
            placeholderTextColor={isDayMode ? '#999999' : '#666666'}
            value={taskText}
            onChangeText={setTaskText}
            autoFocus={true}
            multiline={true}
            maxLength={200}
          />
          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.modalButton, styles.cancelButton]}
              onPress={handleClose}
            >
              <Text style={[styles.modalButtonText, styles.cancelButtonText]}>
                Cancelar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, styles.confirmButton]}
              onPress={handleAddTask}
            >
              <Text style={[styles.modalButtonText, styles.confirmButtonText]}>
                Adicionar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddTaskModal;