import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

const EnterMeetingCodePage = ({ navigation }) => {
  const [meetingCode, setMeetingCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEnterMeetingCode = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:3001/verify-meeting-code', {
        meetingCode, // Only send the meetingCode
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
//comment
  return (
    <LinearGradient
      colors={['#ffffff', '#767676']} // Gradient colors
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <Image source={require('../assets/R.png')} style={styles.logo} />
        <Text style={styles.title}>Enter Meeting Code</Text>
        <TextInput
          style={styles.input}
          placeholder="Meeting Code"
          onChangeText={(text) => setMeetingCode(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleEnterMeetingCode}>
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>
{/* Home Button */}
<TouchableOpacity
  onPress={() => navigation.navigate('Home')}
  style={styles.homeButton}
>
  <Image
    source={require('../assets/homegear.png')}
    style={styles.homeButtonImage}
  />
</TouchableOpacity>

        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
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
    width: 150, // Adjust the size as needed
    height: 150, // Adjust the size as needed
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
    backgroundColor: 'white', // Background color set to white
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ddd', // Change the background color to match your design
    borderRadius: 5,
  },
  buttonText: {
    color: 'black', // Change the text color to match your design
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
  },
  homeButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
  },
  homeButtonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});



export default EnterMeetingCodePage;