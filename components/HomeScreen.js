import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { DarkModeContext } from './DarkModeContext';

// Import your dark mode and light mode toggle images
const lightModeIcon = require('../assets/HomeScreen/light_mode_icon.png');
const darkModeIcon = require('../assets/HomeScreen/dark_mode_icon.png');

// HomePage Component
const HomePage = ({ navigation }) => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  // Define dark mode styles if needed
  const darkStyles = isDarkMode ? stylesDark : styles;

  return (
    <LinearGradient
      colors={isDarkMode ? ['#333' , '#000' ] : ['#ffffff', '#767676']}
      style={[styles.linearGradient, darkStyles.linearGradient]}
    >
      <View style={styles.container}>
        {/* Top PNG Image */}
        <Image source={require('../assets/R.png')} style={styles.topImage} />

        {/* Text Section */}
        <Text style={isDarkMode ? stylesDark.titleDark : styles.title}>Theta Tau</Text>
        <Text style={isDarkMode ? stylesDark.chapterDark : styles.chapter}>Mu Gamma Chapter</Text>
        <Text  style={isDarkMode ? stylesDark.professionDark : styles.profession}>Professional Engineering Fraternity</Text>
        <Text style={isDarkMode ? stylesDark.verseDark : styles.verse}>
          “Whatsoever thy hand findeth to do, do it with thy might;...”
          ~Ecclesiastes 9:10
        </Text> 

        {/* Button Grid Section */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginBottom: '10%' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Events')}>
            <Image source={require('../assets/HomeScreen/events.png')} style={styles.buttonImage} />
            <Text style={isDarkMode ? stylesDark.buttonLabelsDark : styles.buttonLabels}>Events</Text>
          </TouchableOpacity>

          <View style={{ width: 50 }} />

          <TouchableOpacity onPress={() => navigation.navigate('Brothers')}>
            <Image source={require('../assets/HomeScreen/brothers.png')} style={styles.brothers} />
            <Text style={isDarkMode ? stylesDark.brothersLabelsDark : styles.brothersLabels}>Brothers</Text>
          </TouchableOpacity>
          
        </View>

        <View style={{ flexDirection: 'row-reverse', flexWrap: 'wrap', justifyContent: 'space-around', marginBottom: '20%' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Pillars')}>
            <Image source={require('../assets/HomeScreen/pillars.png')} style={styles.buttonImage} />
            <Text style={isDarkMode ? stylesDark.buttonLabelsDark : styles.buttonLabels}>Pillars</Text>
          </TouchableOpacity>

          <View style={{ width: 50 }} />

          <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
            <Image source={require('../assets/HomeScreen/meeting.png')} style={styles.buttonImage} />
            <Text style={isDarkMode ? stylesDark.buttonLabelsDark : styles.buttonLabels}>Meeting</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.aboutButtonContainer}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('About')} 
            style={isDarkMode ? styles.aboutButtonDark : styles.aboutButton}
          >
          <Text style={isDarkMode ? stylesDark.aboutButtonTextDark : styles.aboutButtonText}>
            About Theta Tau
          </Text>
          </TouchableOpacity>
        </View>

        {/* Dark Mode Toggle Button */}
        <TouchableOpacity onPress={toggleDarkMode} style={styles.darkModeButton}>
          <Image 
            source={isDarkMode ? darkModeIcon : lightModeIcon} 
            style={styles.darkModeButtonImage} 
            />
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
  darkModeButton: {
    padding: 10,
    alignContent: "center"
  },
  darkModeButtonImage: {
    width:50,
    height:50,
  },
});

const stylesDark = StyleSheet.create({
  titleDark: {
    fontSize: 36,
    color: '#ea190a',
    textAlign: 'center',
  },
  chapterDark: {
    fontSize: 18,
    color: '#ea190a',
    textAlign: 'center',
  },
  darkModeButton: {
    marginTop: 20,
    backgroundColor: '#555', // Darker background for the button in dark mode
    padding: 10,
    borderRadius: 5,
  },
  aboutButtonTextDark: {
    color: 'gold', // White text color for contrast
    textAlign: 'center',
    fontSize: 16, // Adjust as needed
  },
  aboutButtonDark: {
    backgroundColor: '#555', // Dark mode background color
    // ...other styling for the button in dark mode...
  },
  verseDark: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: '15%',
  },
  professionDark: {
    fontSize: 18,
    color: 'gold',
    textAlign: 'center',
  },
  buttonLabelsDark: {
    textAlign: 'center',
    color: 'gold'
  },
  brothersLabelsDark: {
    textAlign: 'center',
    marginTop: 5,
    color: 'gold'
  },
});
export default HomePage;
