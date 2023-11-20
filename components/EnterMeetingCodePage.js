import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const EnterMeetingCodePage = ({ navigation }) => {
  const [meetingCode, setMeetingCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEnterMeetingCode = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:3001/verify-meeting-code', {
        meetingCode,
        // Add the user ID or any other identifier as meetingId
        meetingId: user.id, // Assuming user has an 'id' property, replace it with the actual property name
      });
  
      if (response.data.success) {
        // Verification successful, navigate to the Polling Page
        navigation.navigate('Polling');
      } else {
        // Verification failed
        setErrorMessage('Invalid meeting code. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying meeting code:', error.response ? error.response.data : error.message);
      setErrorMessage('Error connecting to the server. Please try again.');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Meeting Code</Text>
      <TextInput
        style={styles.input}
        placeholder="Meeting Code"
        onChangeText={(text) => setMeetingCode(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleEnterMeetingCode}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>

      {/* Display error message for incorrect meeting code or server error */}
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
