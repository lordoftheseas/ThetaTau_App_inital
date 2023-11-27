import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import { DarkModeContext } from './DarkModeContext';

const EventsScreen = ({ navigation }) => {
  // Sample data for event images and descriptions
  const { isDarkMode } = useContext(DarkModeContext); // Use the dark mode state

  const dynamicStyles = isDarkMode ? stylesDark : styles;

  const eventData = [
    {
      title: 'Field Day',
      images: [
        require('../assets/Events/fieldday3.jpg'),
        require('../assets/Events/fieldday2.jpg'),
        require('../assets/Events/fieldday1.jpg'),
      ]
    },
    {
      title: "Founder's Day",
      images: [
        require('../assets/Events/foundersday1.jpg'),
        require('../assets/Events/foundersday2.jpg'),
        require('../assets/Events/foundersday3.jpg'),
        require('../assets/Events/foundersday4.jpg'),
      ]
    },
    {
      title: 'Big Little Reveal',
      images: [
        require('../assets/Events/biglilreveal1.jpg'),
        require('../assets/Events/biglilreveal2.jpg'),
        require('../assets/Events/biglilreveal3.jpg'),
        
        // Add more images as needed
      ]
    },
    {
      title: "Big Little Dinner",
      images: [
        require('../assets/biglil.jpg'),
        require('../assets/Events/biglil1.png'),
        require('../assets/Events/biglil2.png'),
        require('../assets/Events/biglil3.png'),
        require('../assets/Events/biglil4.png'),
        require('../assets/Events/biglil5.png'),
        require('../assets/Events/biglil6.png'),
        require('../assets/Events/biglil7.png'),
        require('../assets/Events/biglil8.png'),
        require('../assets/Events/biglil9.png'),
        require('../assets/Events/biglil10.png'),
        require('../assets/Events/biglil11.png'),
      ]
    }
    // Add more event data as needed
  ];

  return (
    <LinearGradient
    colors={isDarkMode ? ['#333' , '#000' ] : ['#ffffff', '#767676']}
      style={dynamicStyles.linearGradient}
    >
      <SafeAreaView style={styles.safeArea}>
        {/* Title and Back Button */}
        <View style={styles.titleContainernada}>
          <Text style={styles.titlenada}>Events</Text>
        </View>
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../assets/back.png')} style={styles.backButtonImage} />
        </TouchableOpacity>
        <ScrollView style={styles.scrollViewContent}>
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

          {/* Home Button
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
            <Image source={require('../assets/homegear.png')} style={styles.homeButtonImage} />
          </TouchableOpacity> */}
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
  titleContainer: {
    backgroundColor: '#900807',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 18,
    borderRadius: 10,
    alignSelf: 'center', // Ensure the title container is centered
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
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
    marginBottom: -10,
    marginTop: 20,
  },
  eventImage: {
    width: '90%',
    height: 200,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: 'grey',
    marginVertical: 10,
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
  swiperContainer: {
    height: 300,
  },
  titleContainernada: {
    backgroundColor: '#900807',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 10,
    borderRadius: 10,
    alignSelf: 'stretch',
    height: 60,
  },
  titlenada: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
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

export default EventsScreen;
