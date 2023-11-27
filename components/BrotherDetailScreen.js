import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';


const BrotherDetailScreen = ({ route, navigation }) => {
  const { brother } = route.params;

  return (
    <LinearGradient
      colors={['#ffffff', '#767676']}
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Image source={brother.imageSource} style={styles.image} />
        <Text style={styles.name}>{brother.name}</Text>
        <Text style={styles.title}>{brother.title}</Text>
        <Text style={styles.description}>{brother.description}</Text>
        
        {brother.linkedin && (
          <TouchableOpacity
            style={styles.linkedinButton}
            onPress={() => Linking.openURL(brother.linkedin)}
          >
            <Text style={styles.linkedinButtonText}>View LinkedIn</Text>
          </TouchableOpacity>
        )}

       {/* Back Button */}
       <TouchableOpacity onPress={() => navigation.navigate('Brothers')} style={styles.backButton}>
            <Image source={require('../assets/back.png')} style={styles.backButtonImage} />
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
  container: {
    padding: 20,
  },
  safeArea: {
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 20,
  },
  linkedinButton: {
    backgroundColor: '#0077B5',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  linkedinButtonText: {
    color: 'white',
    fontSize: 16,
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

export default BrotherDetailScreen;

