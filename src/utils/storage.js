import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadSettings = async () => {
  try {
    const isDayMode = await AsyncStorage.getItem('isDayMode');
    const isSmallFont = await AsyncStorage.getItem('isSmallFont');
    
    return {
      isDayMode: isDayMode !== null ? JSON.parse(isDayMode) : true,
      isSmallFont: isSmallFont !== null ? JSON.parse(isSmallFont) : false,
    };
  } catch (error) {
    console.error('Erro ao carregar configurações:', error);
    return { isDayMode: true, isSmallFont: false };
  }
};

export const saveSettings = async ({ isDayMode, isSmallFont }) => {
  try {
    await AsyncStorage.setItem('isDayMode', JSON.stringify(isDayMode));
    await AsyncStorage.setItem('isSmallFont', JSON.stringify(isSmallFont));
  } catch (error) {
    console.error('Erro ao salvar configurações:', error);
  }
};

export const loadTasks = async () => {
  try {
    const tasks = await AsyncStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  } catch (error) {
    console.error('Erro ao carregar tarefas:', error);
    return [];
  }
};

export const saveTasks = async (tasks) => {
  try {
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Erro ao salvar tarefas:', error);
  }
};