import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Added import
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
    <LinearGradient
      colors={['#ffffff', '#767676']} // Gradient colors, same as EnterMeetingCodePage
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <Image source={require('../assets/R.png')} style={styles.logo} />
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

        {/* Home Button */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
          <Image
            source={require('../assets/homegear.png')}
            style={styles.homeButtonImage}
          />
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
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: 'black', // Set the text color to black
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white', // Set the background of textboxes to white
    color: 'black', // Set the text color of the textboxes to black
  },
  button: {
    backgroundColor: '#ddd', // Changed to match EnterMeetingCodePage
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black', // Changed to match EnterMeetingCodePage
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
  },
  homeButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
  },
  homeButtonImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default LoginScreen;
