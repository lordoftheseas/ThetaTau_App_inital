import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BrothersScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Theta Tau Brothers</Text>
      {/* Add content for the brothers screen */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default BrothersScreen;
