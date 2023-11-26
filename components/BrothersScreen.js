import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const BrothersScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#ffffff', '#767676']} // Gradient colors
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollViewContent}>
          <View style={styles.container}>
            <Text style={styles.title}>Theta Tau Brothers</Text>
            {/* Add content for the brothers screen */}
          </View>
        </ScrollView>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  linearGradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flex: 1,
  },
  homeButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  homeButtonImage: {
    width: 50,
    height: 50,
    fontSize: 24,
    marginBottom: 20,
  },
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

export default BrothersScreen;
