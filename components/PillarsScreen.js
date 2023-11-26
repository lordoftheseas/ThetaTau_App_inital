import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

const PillarsScreen = ({ navigation }) => {
  // Sample data for pillar images and descriptions
  const pillarData = [
    {
      title: 'Brotherhood',
      description: 'The brothers of Theta Tau Mu Gamma Chapter value strong bonds of friendship among its members...',
      images: [
        require('../assets/biglil.jpg'), // change this to right pic
        require('../assets/biglil.jpg'), // change this to right pic
        // Add more images as needed
      ],
    },
    {
      title: 'Professionalism',
      description: 'The brothers of Theta Tau Mu Gamma Chapter participate in numerous professional development opportunities...',
      images: [
        require('../assets/biglil.jpg'), // change this to right pic
        require('../assets/biglil.jpg'), // change this to right pic 2
        // Add more images as needed
      ],
    },
    {
      title: 'Community Service',
      description: 'The brothers of Theta Tau Mu Gamma Chapter works hard to impact the world through acts of service...',
      images: [
        require('../assets/biglil.jpg'), // change this to right pic
        require('../assets/biglil.jpg'), // change this to right pic
        // Add more images as needed
      ],
    },
    // Add more pillar data as needed
  ];

  return (
    <LinearGradient colors={['#ffffff', '#767676']} style={styles.linearGradient}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollViewContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Pillars</Text>
          </View>
          
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

          {/* Home Button */}
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
            <Image source={require('../assets/homegear.png')} style={styles.homeButtonImage} />
          </TouchableOpacity>
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
    paddingVertical: 5,
    marginTop: 20,
    borderRadius: 10,
    alignSelf: 'center',
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

export default PillarsScreen;