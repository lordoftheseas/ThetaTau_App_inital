import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { DarkModeContext } from './DarkModeContext'; 

const AboutPage = ({ navigation }) => {
  const { isDarkMode } = useContext(DarkModeContext); // Use the dark mode state
  const dynamicStyles = isDarkMode ? stylesDark : styles; 
  return (
      <LinearGradient
        colors={isDarkMode ? ['#000', '#333'] : ['#ffffff', '#767676']}
        style={dynamicStyles.linearGradient}
      >
      <View style={styles.container}>
        <Image source={require('../assets/R.png')} style={styles.topImage} />

        <Text style={styles.title}>Theta Tau</Text>
        <Text style={styles.chapter}>Mu Gamma Chapter</Text>
        <Text style={styles.profession}>Professional Engineering Fraternity</Text>
        <Text style={styles.verse}>
          “Whatsoever thy hand findeth to do, do it with thy might;...”
          ~Ecclesiastes 9:10
        </Text>

        <View style={styles.textBoxContainer}>
          <Text style={styles.textBoxText}>
            The purpose of Theta Tau is to develop and maintain a high standard of professional interest among its members, and to unite them in a strong bond of fraternal fellowship.
            {"\n\n"}
            Theta Tau, a co-ed professional engineering fraternity, emphasizes academic excellence, professional growth, and community service. Founded in 1904, it offers aspiring engineers a supportive network for personal and professional development. Activities include professional workshops, networking events, and community service projects, fostering leadership and lifelong friendships among members.
            {"\n\n"}
            The Theta Tau Mu Gamma Chapter was chartered and certified on April 5th, 2003 at the University at Buffalo in Buffalo, New York. The latest class will currently be Omega Beta.
          </Text>
        </View>


        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginBottom: '10%' }}>
          {/* Invisible Button - Events */}
          <TouchableOpacity >
            <Image source={require('../assets/HomeScreen/events.png')} style={styles.buttonImage} />
            <Text style={styles.buttonLabels}></Text>
          </TouchableOpacity>

          <View style={{ width: 50 }} />

          {/* Invisible Button - Brothers */}
          <TouchableOpacity >
            <Image source={require('../assets/HomeScreen/brothers.png')} style={styles.brothers} />
            <Text style={styles.brothersLabels}></Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row-reverse', flexWrap: 'wrap', justifyContent: 'space-around', marginBottom: '20%' }}>
          {/* Invisible Button - Pillars */}
          <TouchableOpacity >
            <Image source={require('../assets/HomeScreen/pillars.png')} style={styles.buttonImage} />
            <Text style={styles.buttonLabels}></Text>
          </TouchableOpacity>

          <View style={{ width: 50 }} />

          {/* Invisible Button - Meeting */}
          <TouchableOpacity >
            <Image source={require('../assets/HomeScreen/meeting.png')} style={styles.buttonImage} />
            <Text style={styles.buttonLabels}></Text>
          </TouchableOpacity>
        </View>

        {/* About Theta Tau Button */}
        <TouchableOpacity >
          <Text style={styles.aboutButtonText}></Text>
        </TouchableOpacity>
        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()} // Adjust the navigation as needed
        >
          <Image source={require('../assets/x.png')} style={styles.backButtonImage} />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  topImage: {
    width: '100%',
    height: '8%',
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
  textBoxContainer: {
    position: 'absolute', // Position the container absolutely
    top: '38%', // Adjust this percentage to position the box right under the verse text
    left: 10,
    right: 10,
    bottom: 0,
    backgroundColor: '#828282', // Dark grey background
    padding: 10,
    borderRadius: 5,
  },
  textBoxText: {
    color: '#ffffff', // Dark red color
    textAlign: 'center',
    fontSize: 18, // Increased font size
  },
  buttonImage: {
    width: 100,
    height: 100,
    opacity: 0,
  },
  brothers: {
    marginTop: 5,
    width: 92,
    height: 92,
    opacity: 0,
  },
  brothersLabels: {
    textAlign: 'center',
    marginTop: 5,
    opacity: 0,
  },
  buttonLabels: {
    textAlign: 'center',
    opacity: 0,
  },
  aboutButtonContainer: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    opacity: 0,
  },
  aboutButtonText: {
    color: 'white', // White text color for contrast
    textAlign: 'center',
    fontSize: 16, // Adjust as needed
    opacity: 0, // Make the button image invisible

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
  backButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
  },
  backButtonImage: {
    width: 50,  // Adjust size as needed
    height: 50, // Adjust size as needed
  },
});

const stylesDark = StyleSheet.create({
  linearGradient: {
    flex: 1,
    backgroundColor: '#333', // Dark background
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#333', // Dark background
  },
});

export default AboutPage;
