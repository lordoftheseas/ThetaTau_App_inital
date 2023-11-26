import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const PillarsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#ffffff', '#767676']} // Gradient colors
        style={styles.linearGradient}
      >
        <ScrollView style={styles.scrollViewContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Pillars</Text>
          </View>
          
          {/* Pillar: Brotherhood */}
          <View style={styles.pillarContainer}>
            <Text style={styles.pillarTitle}>Brotherhood</Text>
            <View style={styles.pillarContent}>
              <Text style={styles.pillarText}>The brothers of Theta Tau Mu Gamma Chapter value strong bonds of friendship among its members...</Text>
            </View>
          </View>
          
          {/* Pillar: Professionalism */}
          <View style={styles.pillarContainer}>
            <Text style={styles.pillarTitle}>Professionalism</Text>
            <View style={styles.pillarContent}>
              <Text style={styles.pillarText}>The brothers of Theta Tau Mu Gamma Chapter participate in numerous professional development opportunities...</Text>
            </View>
          </View>
          
          {/* Pillar: Community Service */}
          <View style={styles.pillarContainer}>
            <Text style={styles.pillarTitle}>Community Service</Text>
            <View style={styles.pillarContent}>
              <Text style={styles.pillarText}>The brothers of Theta Tau Mu Gamma Chapter works hard to impact the world through acts of service...</Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>

      {/* Home Button */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
        <Image
          source={require('../assets/homegear.png')} // Replace with your home button image path
          style={styles.homeButtonImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
  },
  scrollViewContent: {
    flex: 1,
  },
  titleContainer: {
    backgroundColor: '#900807', // Background color for the title container
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    borderRadius: 10, // Curved edges for the title container
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Text color for the title
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
    borderRadius: 10, // Curved edges for the title container,
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
    width: 250, // Increase the width as needed
    height: 250, // Increase the height as needed
    resizeMode: 'contain',
  },
});

export default PillarsScreen;