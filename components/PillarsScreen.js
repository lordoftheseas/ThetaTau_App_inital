import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const PillarsScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#ffffff', '#767676']} // Gradient colors
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.safeArea}>
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

        {/* Home Button */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
          <Image
            source={require('../assets/homegear.png')} // Replace with your home button image path
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
  },
});

export default PillarsScreen;
