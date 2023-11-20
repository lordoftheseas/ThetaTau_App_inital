import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:3001/login', {
        email: username,
        password: password,
      });
  
      const { success, user, message } = response.data;
  
      if (success) {
        console.log('Login successful');
  
        // Dynamically navigate based on the user's role
        if (user.role === 'admin') {
          // Start a meeting and get the meeting code
          const meetingResponse = await axios.post('http://127.0.0.1:3001/start-meeting', {
            meetingId: user.id, // Add a field for user ID (optional)
          });
  
          if (meetingResponse.data.success) {
            const meetingCode = meetingResponse.data.meetingCode;
            navigation.navigate('StartMeeting', { meetingCode });
          } else {
            console.log('Error starting a meeting:', meetingResponse.data.message);
          }
        } else {
          navigation.navigate('EnterMeetingCode');
        }
      } else {
        console.log('Login failed:', message);
        setErrorMessage('Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      setErrorMessage('Error connecting to the server. Please try again.');
    }
  };
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text.toLowerCase())}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text.toLowerCase())}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Display error message for incorrect credentials or server error */}
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

export default LoginScreen;
