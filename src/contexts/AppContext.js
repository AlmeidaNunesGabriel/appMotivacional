import React, { createContext, useContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { loadSettings, saveSettings, loadTasks, saveTasks } from '../utils/storage';
import { getRandomQuote } from '../utils/quotes';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [isDayMode, setIsDayMode] = useState(true);
  const [isSmallFont, setIsSmallFont] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [dailyQuote, setDailyQuote] = useState('');

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      const settings = await loadSettings();
      const storedTasks = await loadTasks();
      
      if (settings.isDayMode !== null) setIsDayMode(settings.isDayMode);
      if (settings.isSmallFont !== null) setIsSmallFont(settings.isSmallFont);
      if (storedTasks) setTasks(storedTasks);
      
      setDailyQuote(getRandomQuote());
    } catch (error) {
      console.error('Erro ao inicializar app:', error);
    }
  };

  const toggleDayMode = async () => {
    const newDayMode = !isDayMode;
    setIsDayMode(newDayMode);
    await saveSettings({ isDayMode: newDayMode, isSmallFont });
  };

  const toggleFontSize = async () => {
    const newSmallFont = !isSmallFont;
    setIsSmallFont(newSmallFont);
    await saveSettings({ isDayMode, isSmallFont: newSmallFont });
  };

  const addTask = async (taskText) => {
    if (!taskText.trim()) return false;
    
    const newTask = {
      id: Date.now().toString(),
      text: taskText.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    await saveTasks(updatedTasks);
    return true;
  };

  const toggleTask = async (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    await saveTasks(updatedTasks);
  };

  const removeTask = (taskId) => {
    Alert.alert(
      'Remover Tarefa',
      'Tem certeza que deseja remover esta tarefa?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: async () => {
            const updatedTasks = tasks.filter(task => task.id !== taskId);
            setTasks(updatedTasks);
            await saveTasks(updatedTasks);
          }
        }
      ]
    );
  };

  const value = {
    currentScreen,
    setCurrentScreen,
    isDayMode,
    isSmallFont,
    tasks,
    dailyQuote,
    toggleDayMode,
    toggleFontSize,
    addTask,
    toggleTask,
    removeTask,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext deve ser usado dentro de AppProvider');
  }
  return context;
};