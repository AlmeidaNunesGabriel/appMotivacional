import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAppContext } from '../../contexts/AppContext';
import { getStyles } from './TaskItem.styles';

const TaskItem = ({ task }) => {
  const { toggleTask, removeTask, isDayMode, isSmallFont } = useAppContext();
  const styles = getStyles(isDayMode, isSmallFont);

  return (
    <View style={styles.taskItem}>
      <TouchableOpacity
        style={[
          styles.checkbox,
          task.completed && styles.checkboxChecked
        ]}
        onPress={() => toggleTask(task.id)}
      >
        {task.completed && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>
      <Text
        style={[
          styles.taskText,
          task.completed && styles.taskTextCompleted
        ]}
      >
        {task.text}
      </Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => removeTask(task.id)}
      >
        <Text style={styles.deleteButtonText}>Remover</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;