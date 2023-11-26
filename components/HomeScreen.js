import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextStyle } from 'react-native';


// HomePage Component
const HomePage = ({ navigation }) => {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey' }}>
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
        <View style={styles.buttonGrid}>
          <TouchableOpacity onPress={() => navigation.navigate('Events')}>
            <Image source={require('../assets/HomeScreen/events.png')} style={styles.buttonImage} />
            <Text>Events</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Brothers')}>
            <Image source={require('../assets/HomeScreen/brothers.png')} style={styles.buttonImage} />
            <Text>Brothers</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Pillars')}>
            <Image source={require('../assets/HomeScreen/pillars.png')} style={styles.buttonImage} />
            <Text>Pillars</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
            <Image source={require('../assets/HomeScreen/meeting.png')} style={styles.buttonImage} />
            <Text>Meeting</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('AboutPage')}>
          <Text>About Theta Tau</Text>
        </TouchableOpacity>
      </View>
    
  );
};

// Styles
const styles = StyleSheet.create({
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
    fontStyle: 'Abel',
    color: '#900807',
    textAlign: 'center',
  },
  chapter: {
    fontSize: 18,
    color: '#900807',
    fontFamily: 'Inter',
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
    marginBottom: '1%',
  },
  buttonGrid: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  buttonImage: {
    width: 100,
    height: 100,
    marginBottom: 0,
  },
});

export default HomePage;
