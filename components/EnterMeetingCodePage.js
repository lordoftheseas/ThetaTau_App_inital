import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const EnterMeetingCodePage = ({ navigation }) => {
  const [meetingCode, setMeetingCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleVerifyMeetingCode = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:3001/verify-meeting-code', {
        meetingCode: meetingCode,
      });

      if (response.data.success) {
        navigation.navigate('Polling');
      } else {
        setErrorMessage('Invalid meeting code. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying meeting code:', error);
      setErrorMessage('Error connecting to the server. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Enter Meeting Code</Text>
      <TextInput
        style={styles.input}
        placeholder="Meeting Code"
        onChangeText={setMeetingCode}
      />
      <TouchableOpacity style={styles.button} onPress={handleVerifyMeetingCode}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>

      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
  },
});

export default EnterMeetingCodePage;
