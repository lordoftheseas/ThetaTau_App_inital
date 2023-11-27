import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CreatePollPage = ({ navigation }) => {
  const [question, setQuestion] = useState('');
  const [answerOne, setAnswerOne] = useState('');
  const [answerTwo, setAnswerTwo] = useState('');

  const handleSubmitPoll = async () => {
    try {
      const response = await fetch('http://your-backend-url.com/create-poll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: question,
          answers: [answerOne, answerTwo],
        }),
      });

      if (!response.ok) {
        throw new Error('Poll creation failed');
      }

      const { pollId } = await response.json(); // Adjust according to your backend response
      navigation.navigate('Polling', { pollId });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LinearGradient
      colors={['#ffffff', '#767676']}
      style={styles.linearGradient}
    >
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
  },
});

export default CreatePollPage;
