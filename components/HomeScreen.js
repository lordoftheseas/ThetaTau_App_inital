import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextStyle } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';



// HomePage Component
const HomePage = ({ navigation }) => {
  return (
    <LinearGradient
    colors={['#ffffff', '#767676']} // Gradient colors
    style={styles.linearGradient}
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
        <View style={{flexDirection: 'row',flexWrap: 'wrap',justifyContent: 'space-around', marginBottom: '10%'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Events')}>
            <Image source={require('../assets/HomeScreen/events.png')} style={styles.buttonImage} />
            <Text style={styles.buttonLabels}>Events</Text>
          </TouchableOpacity>
          <View style={{ width: 50 }} />
          <TouchableOpacity onPress={() => navigation.navigate('Brothers')}>
            <Image source={require('../assets/HomeScreen/brothers.png')} style={styles.buttonImage} />
            <Text style={styles.buttonLabels}>Brothers</Text>
          </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row-reverse',flexWrap: 'wrap',justifyContent: 'space-around', marginBottom: '20%'}}>

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

        <TouchableOpacity onPress={() => navigation.navigate('AboutPage')}>
          <Text>About Theta Tau</Text>
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
    marginRight: 0,
  },
  buttonLabels: {
    textAlign: 'center',
  }
});

export default HomePage;