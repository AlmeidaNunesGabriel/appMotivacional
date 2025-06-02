import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useAppContext } from '../../contexts/AppContext';
import TaskItem from '../../components/TaskItem/TaskItem';
import AddTaskModal from '../../components/AddTaskModal/AddTaskModal';
import { getStyles } from './TasksScreen.styles';

const TasksScreen = () => {
  const { setCurrentScreen, tasks, isDayMode, isSmallFont } = useAppContext();
  const [showAddModal, setShowAddModal] = useState(false);
  const styles = getStyles(isDayMode, isSmallFont);

  return (
    <>
      <View style={styles.content}>
        <View style={styles.navigationContainer}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => setCurrentScreen('home')}
          >
            <Text style={styles.navButtonText}>Voltar ao Início</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.tasksList}>
          {tasks.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>
                Nenhuma tarefa adicionada ainda.{'\n'}
                Toque no botão "+" para começar!
              </Text>
            </View>
          ) : (
            <FlatList
              data={tasks}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <TaskItem task={item} />}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setShowAddModal(true)}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      <AddTaskModal 
        visible={showAddModal} 
        onClose={() => setShowAddModal(false)} 
      />
    </>
  );
};

export default TasksScreen;