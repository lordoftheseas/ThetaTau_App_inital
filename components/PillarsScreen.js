import React, { useContext } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import { DarkModeContext } from './DarkModeContext';

const PillarsScreen = ({ navigation }) => {
  const { isDarkMode } = useContext(DarkModeContext); // Use the dark mode state

  const dynamicStyles = isDarkMode ? stylesDark : styles; // Choose styles based on dark mode

  // Sample data for pillar images and descriptions
  const pillarData = [
    {
      title: 'Brotherhood',
      description: 'The brothers of Theta Tau Mu Gamma Chapter value strong bonds of friendship among its members...',
      images: [
        require('../assets/Events/brotherhood1.png'), // change this to right pic
        require('../assets/Events/brotherhood4.jpg'),
        require('../assets/Events/brotherhood5.jpg'),
        require('../assets/Events/brotherhood2.png'),
        
        // change this to right pic
        // Add more images as needed
      ],
    },
    {
      title: 'Professionalism',
      description: 'The brothers of Theta Tau Mu Gamma Chapter participate in numerous professional development opportunities...',
      images: [
        require('../assets/Events/professionalism1.png'), 
        require('../assets/Events/professionalism2.png'),
        require('../assets/Events/professionalism3.png'), 
        require('../assets/Events/professionalism4.png'),
        // Add more images as needed
      ],
    },
    {
      title: 'Community Service',
      description: 'The brothers of Theta Tau Mu Gamma Chapter works hard to impact the world through acts of service...',
      images: [
        require('../assets/Events/service1.png'), 
        require('../assets/Events/service2.png'), 
        require('../assets/Events/service3.png'),
        // Add more images as needed
      ],
    },
    // Add more pillar data as needed
  ];

  return (
    <LinearGradient
      colors={isDarkMode ? ['#000', '#333'] : ['#ffffff', '#767676']}
      style={dynamicStyles.linearGradient}
    >
      <SafeAreaView style={styles.safeArea}>
        {/* Title and Back Button */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Pillars</Text>
        </View>
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../assets/back.png')} style={styles.backButtonImage} />
        </TouchableOpacity>
        {/* Scrollable Content */}
        <ScrollView style={styles.scrollViewContent}>
          {pillarData.map((pillar, index) => (
            <View key={index} style={styles.pillarContainer}>
              <View style={styles.pillarTitleContainer}>
                <Text style={styles.pillarTitle}>{pillar.title}</Text>
              </View>
              <Swiper style={styles.swiperContainer} showsButtons={false}>
                {pillar.images.map((image, imageIndex) => (
                  <View key={imageIndex} style={styles.pillarItem}>
                    <Image source={image} style={styles.pillarImage} />
                  </View>
                ))}
              </Swiper>
              <View style={styles.pillarContent}>
                <Text style={styles.pillarText}>{pillar.description}</Text>
              </View>
            </View>
          ))}
          
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    paddingHorizontal: 10,
  },
  titleContainer: {
    backgroundColor: '#900807',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 10,
    borderRadius: 10,
    alignSelf: 'stretch',
    height: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  pillarContainer: {
    marginBottom: 20,
    alignItems: 'center',
    marginTop: 20, // Start content slightly lower
  },
  pillarTitleContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  pillarTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
  },
  pillarItem: {
    alignItems: 'center',
    marginVertical: 10,
  },
  pillarImage: {
    width: '90%',
    height: 200,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: 'grey',
    marginVertical: 10,
  },
  pillarContent: {
    width: '80%',
    minHeight: 100,
    borderWidth: 2,
    borderColor: '#900807',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'grey',
    marginTop: 10,
  },
  pillarText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  },
  swiperContainer: {
    height: 300,
  },
  backButton: {
    position: 'absolute',
    top: 80,
    left: 20,
    zIndex: 10,
  },
  backButtonImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  // homeButton: {
  //   position: 'absolute',
  //   alignSelf: 'center',
  //   bottom: 20,
  // },
  // homeButtonImage: {
  //   width: 100,
  //   height: 100,
  //   resizeMode: 'contain',
  // },
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

export default PillarsScreen;