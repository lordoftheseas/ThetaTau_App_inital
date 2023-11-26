import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView

const EventsScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#ffffff', '#767676']} // Gradient colors
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollViewContent}>
          {/* Event Header */}
          <Text style={styles.headerText}>Events</Text>

          {/* Big Little Dinner */}
          <View style={styles.eventItem}>
            <Text style={styles.eventTitle}>Big Little Dinner</Text>
            <Image
              source={require('../assets/biglil.jpg')} // Replace with your actual image path
              style={styles.eventImage}
            />
          </View>

          {/* Additional events can be added following the same pattern */}

        </ScrollView>

        {/* Home Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.homeButton}
        >
          <Image
            source={require('../assets/homegear.png')} // Replace with your actual image path
            style={styles.homeButtonImage}
          />
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
    paddingHorizontal: 10, // Add some padding if needed
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'maroon',
    textAlign: 'center',
    marginVertical: 20,
  },
  eventItem: {
    alignItems: 'center', // Centering event item
    marginVertical: 10,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center', // Centering title
  },
  eventImage: {
    width: '90%', // Adjust width as needed
    height: 200, // Adjust height as needed
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: 'grey', // Border color for the image
    marginVertical: 10,
  },
  homeButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
  },
  homeButtonImage: {
    width: 100, // Adjust the size as needed
    height: 100, // Adjust the size as needed
    resizeMode: 'contain',
  }
});

export default EventsScreen;