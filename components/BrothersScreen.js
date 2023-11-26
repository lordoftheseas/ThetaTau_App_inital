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

  return (
    <LinearGradient
      colors={['#ffffff', '#767676']} // Gradient colors
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollViewContent}>
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
            style={styles.homeButtonImage}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

// Add new styles for profile containers
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
  topImage: {
    width: '100%',
    height: 70, // Adjust as needed
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
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },

});

export default BrothersScreen;