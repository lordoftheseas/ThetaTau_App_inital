import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { DarkModeContext } from './DarkModeContext';

// HomePage Component
const HomePage = ({ navigation }) => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  // Define dark mode styles if needed
  const darkStyles = isDarkMode ? stylesDark : styles;

  return (
    <LinearGradient
      colors={isDarkMode ? ['#000', '#333'] : ['#ffffff', '#767676']}
      style={[styles.linearGradient, darkStyles.linearGradient]}
    >
      <View style={styles.container}>
        {/* Top PNG Image */}
        <Image source={require('../assets/R.png')} style={styles.topImage} />

        {/* Text Section */}
        <Text style={styles.title}>Theta Tau</Text>
        <Text style={styles.chapter}>Mu Gamma Chapter</Text>
        <Text style={styles.profession}>Professional Engineering Fraternity</Text>
        <Text style={styles.verse}>
          “Whatsoever thy hand findeth to do, do it with thy might;...”
          ~Ecclesiastes 9:10
        </Text> 

        {/* Button Grid Section */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginBottom: '10%' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Events')}>
            <Image source={require('../assets/HomeScreen/events.png')} style={styles.buttonImage} />
            <Text style={styles.buttonLabels}>Events</Text>
          </TouchableOpacity>

          <View style={{ width: 50 }} />

          <TouchableOpacity onPress={() => navigation.navigate('Brothers')}>
            <Image source={require('../assets/HomeScreen/brothers.png')} style={styles.brothers} />
            <Text style={styles.brothersLabels}>Brothers</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row-reverse', flexWrap: 'wrap', justifyContent: 'space-around', marginBottom: '20%' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Pillars')}>
            <Image source={require('../assets/HomeScreen/pillars.png')} style={styles.buttonImage} />
            <Text style={styles.buttonLabels}>Pillars</Text>
          </TouchableOpacity>

          <View style={{ width: 50 }} />

          <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
            <Image source={require('../assets/HomeScreen/meeting.png')} style={styles.buttonImage} />
            <Text style={styles.buttonLabels}>Meeting</Text>
          </TouchableOpacity>
        </View>

          {/* Dark Mode Toggle Button */}
          <TouchableOpacity onPress={toggleDarkMode} style={styles.darkModeButton}>
          <Text style={styles.darkModeButtonText}>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </Text>
        </TouchableOpacity>

        {/* About Theta Tau Button */}
        <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.aboutButtonContainer}>
          <Text style={styles.aboutButtonText}>About Theta Tau</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

// Styles
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topImage: {
    width: '100%',
    height: '8%', // Adjust as needed
    resizeMode: 'contain',
  },
  title: {
    fontSize: 36,
    color: '#900807',
    textAlign: 'center',
  },
  chapter: {
    fontSize: 18,
    color: '#900807',
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  verse: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: '15%',
  },
  buttonGrid: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  buttonImage: {
    width: 100,
    height: 100,
  },
  brothers: {
    marginTop: 5,
    width: 92,
    height: 92,
  },
  brothersLabels: {
    textAlign: 'center',
    marginTop: 5,
  },
  buttonLabels: {
    textAlign: 'center',
  },
  aboutButtonContainer: {
    backgroundColor: '#900807', // Dark red background
    padding: 10,
    borderRadius: 5, // Rounded corners
    marginTop: 10, // Adjust as needed
  },
  aboutButtonText: {
    color: 'white', // White text color for contrast
    textAlign: 'center',
    fontSize: 16, // Adjust as needed
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

const stylesDark = StyleSheet.create({
  linearGradient: {
    // Define your dark mode specific styles here
  },
  // Add dark mode styles for other components if needed
  darkModeButton: {
    marginTop: 20,
    backgroundColor: '#555', // Darker background for the button in dark mode
    padding: 10,
    borderRadius: 5,
  },
  darkModeButtonText: {
    color: '#fff', // Text color for better visibility in dark mode
    textAlign: 'center',
  },
  // ... other dark mode styles ...
});
export default HomePage;
