import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAppContext } from '../../contexts/AppContext';
import { getStyles } from './HomeScreen.styles';

const HomeScreen = () => {
  const { setCurrentScreen, dailyQuote, isDayMode, isSmallFont } = useAppContext();
  const styles = getStyles(isDayMode, isSmallFont);

  return (
    <View style={styles.content}>
      <View style={styles.quoteContainer}>
        <Text style={styles.quote}>{dailyQuote}</Text>
      </View>
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => setCurrentScreen('tasks')}
        >
          <Text style={styles.navButtonText}>Lista de Tarefas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;