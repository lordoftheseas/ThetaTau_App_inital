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

// array to update pictures of the brothers
const brotherImages = [
  require('../assets/Brothers/aryaman_ghosh.png'),
  require('../assets/Brothers/gabriel.png'),
  // require('../assets/Brothers/daniel_klein.png'), 
  // require('../assets/Brothers/yuanjie.png'),
  // require('../assets/Brothers/Marissa_Gabbamonte.jpeg'),
  // require('../assets/Brothers/3Karen_Cheng.png'),
];

// Placeholder data for E-Council and Brothers
const eCouncilMembers = [
  { id: '1', name: 'Aryaman Ghosh', role: 'Regent', className: 'Chi Beta', image: require('../assets/Brothers/aryaman_ghosh.png') },
  { id: '2', name: 'Gabriel Thornton', role: 'Vice Regent', className: 'Phi Beta', image: require('../assets/Brothers/gabriel.png') },
  { id: '3', name: 'Daniel Klein', role: 'Pledge Marshal', className: 'Phi Beta', image: require('../assets/Brothers/daniel_klein.png') },
  { id: '4', name: 'Yuanjie Xu', role: 'Treasurer', className: 'Phi Beta', image: require('../assets/Brothers/yuanjie.png') },
  { id: '5', name: 'Marissa Gabbamonte', role: 'Corresponding Secretary', className: 'Upsilon Beta', image: require('../assets/Brothers/Marissa_Gabbamonte.jpeg') },
  { id: '6', name: 'Karen Cheng', role: 'Scribe', className: 'Psi Beta', image: require('../assets/Brothers/3Karen_Cheng.png') },
  // ... other members added here
];


const brothers = [
  { id: '7', name: 'Alex Johnson',image: require('../assets/Brothers/gabriel.png')},
  { id: '8', name: 'Michael Brownie',image: require('../assets/Brothers/aryaman_ghosh.png')},
  { id: '9', name: 'Michael Brownie',image: require('../assets/Brothers/aryaman_ghosh.png')},
  { id: '10', name: 'Michael Brownie',image: require('../assets/Brothers/aryaman_ghosh.png')},
  { id: '11', name: 'Michael Brownie',image: require('../assets/Brothers/aryaman_ghosh.png')},
  // ... other brothers
];

const BrothersScreen = ({ navigation }) => {

  const onProfilePress = (name, role, className) => {
    // Handle the profile press here
    // For example, navigate to a profile detail screen
    // navigation.navigate('ProfileDetail', { name, role });
    console.log(name, role, className); // Just for demonstration
  };

  return (
    <LinearGradient
      colors={['#ffffff', '#ffffff']} // Gradient colors
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
                onPress={() => onProfilePress(member.name, member.role, member.className)}
              >
                <Image source={member.image} style={styles.profileImage} />
                <View style={styles.profileTextContainer}>
                  <Text style={styles.profileName}>{member.name}</Text>
                  <Text style={styles.profileRole}>{member.role}</Text>
                  <Text style={styles.profileRole}>{member.className}</Text>
                </View>
              </TouchableOpacity>
            ))}

          {/* Brothers Profiles */}
          <Text style={styles.headerText}>Brothers</Text>
          {/* Back Button */}
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Image source={require('../assets/back.png')} style={styles.backButtonImage} />
          </TouchableOpacity>
          {brothers.map((brother) => (
            <TouchableOpacity
              key={brother.id}
              style={styles.profileContainer}
              onPress={() => onProfilePress(brother.name, brother.role)}
            >
            <Image source={brother.image} style={styles.profileImage} />
              <View style={styles.profileTextContainer}>
                <Text style={styles.profileName}>{brother.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Home Button */}
        {/* <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.homeButton}
        >
          <Image
            source={require('../assets/homegear.png')} // Replace with your actual image path
            style={styles.homeButtonImage}
          />
        </TouchableOpacity> */}
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
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'maroon',
    textAlign: 'center',
    marginVertical: 20,
  },
  profileContainer: {
    borderWidth: 1, // Set border width.
    flexDirection: 'row', // Arrange children in a row.
    borderColor: '#000', // Set border color.
    padding: 10, // Set padding to create space around the content.
    marginBottom: 10, // Set bottom margin to create space between the boxes.
    borderRadius: 5, // Optional: if you want rounded corners.
  },
  // profileContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   paddingVertical: 10,
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#ccc',
  //   paddingHorizontal: 10, // Add horizontal padding for profile items
  // },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
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
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  backButtonImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default BrothersScreen;