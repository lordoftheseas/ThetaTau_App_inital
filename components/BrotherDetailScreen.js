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

        <View style={styles.textBoxContainer}>
          <Text style={styles.textBoxText}>{brother.description}
          </Text>
        </View>

      
        
        {brother.linkedin && (
          <TouchableOpacity
            style={styles.linkedinButton}
            onPress={() => Linking.openURL(brother.linkedin)}
          >
           <Image source={require('../assets/linkedin_logo.png')} style={styles.linkedinButtonImage} />
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
  textBoxContainer: {
    alignItems: 'center', // Position the container absolutely
    top: 0, // Adjust this percentage to position the box right under the verse text
    bottom: 10,
    backgroundColor: '#828282', // Dark grey background
    padding: 10,
    borderRadius: 5,
  },
  textBoxText: {
    color: 'black', // Dark'black color
    textAlign: 'center',
    fontSize: 18, // Increased font size
  },
  linkedinButton: {
    alignSelf: 'center',
    bottom: 20,
  },
  linkedinButtonImage: {
    width: 75,  // Adjust size as needed
    height: 75, // Adjust size as needed
    marginTop: "20%",
  },
});

export default BrotherDetailScreen;

