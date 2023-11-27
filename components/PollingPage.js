import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PollingPage = ({ route, navigation }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const { pollId } = route.params || {};

  if (!pollId) {
    // Return a different UI or handle the absence of pollId appropriately
    return <View style={styles.container}><Text>No Poll ID provided</Text></View>;
  }
  const handleSelectAnswer = async (answerId) => {
    setSelectedAnswer(answerId);
    try {
      const response = await fetch('http://127.0.0.1:3001/vote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ optionId: answerId, pollId: pollId }),
      });

      if (!response.ok) {
        throw new Error('Failed to record vote');
      }

      // Handle response, e.g., navigate to a results page if you have one
    } catch (error) {
      console.error(error);
    }
  };

  const getButtonStyle = (answer) => {
    return answer === selectedAnswer ? styles.selectedButton : styles.button;
  };

  return (
    <View style={styles.container}>
      {/* Replace this part with your logic to display the question and answers */}
      <Text style={styles.question}>Poll Question</Text>
      <TouchableOpacity style={getButtonStyle('answerOne')} onPress={() => handleSelectAnswer('answerOneId')}>
        <Text style={styles.buttonText}>Answer One</Text>
      </TouchableOpacity>
      <TouchableOpacity style={getButtonStyle('answerTwo')} onPress={() => handleSelectAnswer('answerTwoId')}>
        <Text style={styles.buttonText}>Answer Two</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    minWidth: 100,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    minWidth: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default PollingPage;
