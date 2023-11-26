import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, Image, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      Keyboard.dismiss();
    });

    return () => {
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

  const handleContainerPress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleContainerPress}>
      <LinearGradient
        colors={['#ffffff', '#767676']} // Gradient colors
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

          {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
            <Image
              source={require('../assets/homegear.png')} // Replace with your home button image path
              style={styles.homeButtonImage}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
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
    width: 150, // Adjust as needed
    height: 150, // Adjust as needed
    resizeMode: 'contain',
    marginBottom: 20,
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
    backgroundColor: 'darkred', // Changed color to dark red
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