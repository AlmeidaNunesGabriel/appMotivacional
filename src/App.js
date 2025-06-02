import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { AppProvider } from './contexts/AppContext';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import TasksScreen from './screens/TasksScreen/TasksScreen';
import Header from './components/Header/Header';
import { useAppContext } from './contexts/AppContext';

const AppContent = () => {
  const { currentScreen, isDayMode } = useAppContext();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDayMode ? '#f5f5f5' : '#121212' }}>
      <StatusBar
        barStyle={isDayMode ? 'dark-content' : 'light-content'}
        backgroundColor={isDayMode ? '#ffffff' : '#1e1e1e'}
      />
      
      <Header title={currentScreen === 'home' ? 'Motivação Diária' : 'Lista de Tarefas'} />
      
      {currentScreen === 'home' ? <HomeScreen /> : <TasksScreen />}
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}