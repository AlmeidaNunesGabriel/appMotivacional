import React from 'react';
import { View, Text, Switch } from 'react-native';
import { useAppContext } from '../../contexts/AppContext';
import { getStyles } from './Header.styles';

const Header = ({ title }) => {
  const { isDayMode, isSmallFont, toggleDayMode, toggleFontSize } = useAppContext();
  const styles = getStyles(isDayMode, isSmallFont);

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.switchesContainer}>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Dia</Text>
          <Switch
            value={isDayMode}
            onValueChange={toggleDayMode}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDayMode ? '#007AFF' : '#f4f3f4'}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Pequeno</Text>
          <Switch
            value={isSmallFont}
            onValueChange={toggleFontSize}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isSmallFont ? '#007AFF' : '#f4f3f4'}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;