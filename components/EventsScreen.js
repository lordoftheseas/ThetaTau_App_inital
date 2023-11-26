import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import Lightbox from 'react-native-lightbox';

const EventsScreen = ({ navigation }) => {
  // Sample data for event images and descriptions
  const eventData = [
    {
      title: 'Big Little Dinner',
      images: [
        require('../assets/biglil.jpg'),
        require('../assets/biglil.jpg'),
        require('../assets/biglil.jpg'),
        require('../assets/biglil.jpg'),
        // Add more images as needed
      ]
    },
    {
      title: 'Big Little Dinner',
      images: [
        require('../assets/biglil.jpg'),
        require('../assets/biglil.jpg'),
        require('../assets/biglil.jpg'),
        require('../assets/biglil.jpg'),
        // Add more images as needed
      ]
    },
    {
      title: 'Big Little Dinner',
      images: [
        require('../assets/biglil.jpg'),
        require('../assets/biglil.jpg'),
        require('../assets/biglil.jpg'),
        require('../assets/biglil.jpg'),
        // Add more images as needed
      ]
    },
    // Add more event data as needed
  ];

  return (
    <LinearGradient colors={['#ffffff', '#767676']} style={styles.linearGradient}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollViewContent}>
          {/* Event Header */}
          <Text style={styles.headerText}>Events</Text>

          {/* Description Section */}
          {eventData.map((event, index) => (
            <View key={index}>
              {/* Event Swiper */}
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Swiper style={styles.swiperContainer} showsButtons={false}>
                {event.images.map((image, imageIndex) => (
                  <View key={imageIndex} style={styles.eventItem}>
                    <Image source={image} style={styles.eventImage} />
                  </View>
                ))}
              </Swiper>
            </View>
          ))}
          </ScrollView>

          {/* Home Button */}
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
            <Image source={require('../assets/homegear.png')} style={styles.homeButtonImage} />
          </TouchableOpacity>
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
    flex: 1,
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'maroon',
    textAlign: 'center',
    marginVertical: 20,
  },
  eventItem: {
    alignItems: 'center',
    marginVertical: 10,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  eventImage: {
    width: '90%',
    height: 200,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: 'grey',
    marginVertical: 10,
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
  swiperContainer: {
    height: 300,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  paginationText: {
    color: 'white',
    fontSize: 16,
  },
});

export default EventsScreen;
