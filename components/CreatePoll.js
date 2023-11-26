import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CreatePollPage = ({ navigation }) => {
  const [question, setQuestion] = useState('');
  const [answerOne, setAnswerOne] = useState('');
  const [answerTwo, setAnswerTwo] = useState('');

  const handleSubmitPoll = () => {
    // Logic to store the poll information or send it to your backend
    // For demonstration, we navigate to PollingPage with this data
    navigation.navigate('Polling', { question, answerOne, answerTwo });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a Poll</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Question"
        onChangeText={setQuestion}
        value={question}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Answer One"
        onChangeText={setAnswerOne}
        value={answerOne}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Answer Two"
        onChangeText={setAnswerTwo}
        value={answerTwo}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmitPoll}>
        <Text style={styles.buttonText}>Start Poll</Text>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default CreatePollPage;
