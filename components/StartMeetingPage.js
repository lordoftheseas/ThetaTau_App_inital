import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { DarkModeContext } from './DarkModeContext'; 

const StartMeetingPage = ({ navigation, route }) => {
  const { meetingCode } = route.params;
  const { isDarkMode } = useContext(DarkModeContext); // Use the dark mode state
  const dynamicStyles = isDarkMode ? stylesDark : styles; // Choose styles based on dark mode

  return (
    <LinearGradient
      colors={isDarkMode ? ['#333' , '#000' ] : ['#ffffff', '#767676']}
      style={dynamicStyles.linearGradient}
    >
      <View style={styles.container}>
        <Image source={require('../assets/R.png')} style={styles.logo} />
        <Text style={isDarkMode ? stylesDark.textDark : styles.text}>Start Meeting Page</Text>
        <Text style={isDarkMode ? stylesDark.textDark : styles.text}>Meeting Code: {meetingCode}</Text>

        {/* Button to navigate to CreatePoll.js */}
        <TouchableOpacity onPress={() => navigation.navigate('CreatePoll')} style={styles.createPollButton}>
          <Text style={styles.createPollButtonText}>Create Poll</Text>
        </TouchableOpacity>

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
  createPollButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  createPollButtonText: {
    color: 'white',
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
  text: {
    color: "black"
  }
});

const stylesDark = StyleSheet.create ({
  textDark: {
    color: "white"
  }
});

export default StartMeetingPage;