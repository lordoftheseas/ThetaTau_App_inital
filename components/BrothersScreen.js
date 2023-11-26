import React from 'react';
<<<<<<< HEAD
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const BrothersScreen = ({ navigation }) => {
=======
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

// Placeholder data for E-Council and Brothers
const eCouncilMembers = [
  { id: '1', name: 'John Doe', role: 'President' },
  { id: '2', name: 'Jane Smith', role: 'Vice President' },
  // ... other members
];

const brothers = [
  { id: '1', name: 'Alex Johnson' },
  { id: '2', name: 'Michael Brown' },
  // ... other brothers
];

const BrothersScreen = ({ navigation }) => {

  const onProfilePress = (name, role) => {
    // Handle the profile press here
    // For example, navigate to a profile detail screen
    // navigation.navigate('ProfileDetail', { name, role });
    console.log(name, role); // Just for demonstration
  };

>>>>>>> 3c188f41 (Brothers page for now)
  return (
    <LinearGradient
      colors={['#ffffff', '#767676']} // Gradient colors
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollViewContent}>
<<<<<<< HEAD
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Theta Tau Brothers</Text>
            {/* Add content for the brothers screen */}
          </View>
        </ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
          <Image
            source={require('../assets/homegear.png')} // Replace with your home button image path
=======
          {/* Top PNG Image */}
          <Image source={require('../assets/R.png')} style={styles.topImage} />

          {/* E-Council Profiles */}
          <Text style={styles.headerText}>E-Council</Text>
          {eCouncilMembers.map((member) => (
            <TouchableOpacity
              key={member.id}
              style={styles.profileContainer}
              onPress={() => onProfilePress(member.name, member.role)}
            >
              <Image source={require('../assets/R.png')} style={styles.profileImage} />
              <View style={styles.profileTextContainer}>
                <Text style={styles.profileName}>{member.name}</Text>
                <Text style={styles.profileRole}>{member.role}</Text>
              </View>
            </TouchableOpacity>
          ))}

          {/* Brothers Profiles */}
          <Text style={styles.headerText}>Brothers</Text>
          {brothers.map((brother) => (
            <TouchableOpacity
              key={brother.id}
              style={styles.profileContainer}
              onPress={() => onProfilePress(brother.name, brother.role)}
            >
              <Image source={require('../assets/R.png')} style={styles.profileImage} />
              <View style={styles.profileTextContainer}>
                <Text style={styles.profileName}>{brother.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Home Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.homeButton}
        >
          <Image
            source={require('../assets/homegear.png')} // Replace with your actual image path
>>>>>>> 3c188f41 (Brothers page for now)
            style={styles.homeButtonImage}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

// Add new styles for profile containers
const styles = StyleSheet.create({
<<<<<<< HEAD
  linearGradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    paddingHorizontal: 10, // Add horizontal padding if needed
  },
  titleContainer: {
    backgroundColor: '#900807',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 20,
    borderRadius: 10,
    alignSelf: 'center', // Ensure the title container is centered
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
  },
  pillarTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 10,
  },
  pillarContent: {
    width: '80%',
    minHeight: 100,
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  pillarText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
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
=======

  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'maroon',
    textAlign: 'center',
    marginVertical: 20,
  },
  topImage: {
    width: '100%',
    height: 90, // Adjust as needed
    resizeMode: 'contain',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 10, // Add horizontal padding for profile items
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
>>>>>>> 3c188f41 (Brothers page for now)
  },
  profileTextContainer: {
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileRole: {
    fontSize: 14,
    color: 'grey',
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

export default BrothersScreen;
