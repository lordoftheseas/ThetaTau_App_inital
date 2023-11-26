import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, Image, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      // Dismiss the keyboard when it is hidden
      Keyboard.dismiss();
    });

    return () => {
      // Remove the listener when the component is unmounted
      keyboardDidHideListener.remove();
    };
  }, []);

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

  const handleContainerPress = (event) => {
    // Dismiss the keyboard only if the target is not an input field or button
    if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'BUTTON') {
      Keyboard.dismiss();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleContainerPress}>
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
          onTouchStart={() => Keyboard.dismiss()} // Dismiss the keyboard on password input tap
          onChangeText={(text) => setPassword(text.toLowerCase())}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
          <Image
            source={require('../assets/homegear.png')} // Replace with your home button image path
            style={styles.homeButtonImage}
          />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
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
