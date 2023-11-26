import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PollingPage = ({ route }) => {
  const { question = '', answerOne = '', answerTwo = '' } = route.params || {};

  const handleVote = (answer) => {
    // Logic to handle the vote
    console.log(`Voted for: ${answer}`);
  };

  if (!question || !answerOne || !answerTwo) {
    return (
      <View style={styles.container}>
        <Text>No poll data available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleVote(answerOne)}>
        <Text style={styles.buttonText}>{answerOne}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleVote(answerTwo)}>
        <Text style={styles.buttonText}>{answerTwo}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
  },
});

export default PollingPage;
