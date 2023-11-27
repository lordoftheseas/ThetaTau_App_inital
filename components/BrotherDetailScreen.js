import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const BrotherDetailScreen = ({ route, navigation }) => {
  const { brother } = route.params;
  const [showDescription, setShowDescription] = useState(true);

  const handleDescriptionPress = () => {
    setShowDescription(true);
  };

  const handleLinkedInPress = () => {
    setShowDescription(false);
  };

  return (
    <LinearGradient
      colors={['#ffffff', '#767676']}
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.container}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Brothers</Text>
          </View>
          <Image source={brother.imageSource} style={styles.image} />
          <Text style={styles.name}>{brother.name}</Text>
          <Text style={styles.title}>{brother.title}</Text>

          {/* Toggle Buttons */}
          <View style={styles.toggleButtons}>
            <TouchableOpacity
              style={[styles.toggleButton, showDescription && styles.activeButton]}
              onPress={handleDescriptionPress}
            >
              <Text style={[styles.toggleButtonText, showDescription && styles.activeButtonText]}>
                Description
              </Text>
            </TouchableOpacity>

            {brother.linkedin && (
              <TouchableOpacity
                style={[styles.toggleButton, !showDescription && styles.activeButton]}
                onPress={handleLinkedInPress}
              >
                <Text style={[styles.toggleButtonText, !showDescription && styles.activeButtonText]}>
                  Social
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Content based on Toggle */}
          {showDescription ? (
            // Description Section
            <View style={styles.section}>
              {/* <Text style={styles.sectionTitle}>Description</Text> */}
              <Text style={styles.description}>{brother.description}</Text>
            </View>
          ) : (
            // Social Section
            brother.linkedin && (
              <TouchableOpacity
                style={styles.linkedinButton}
                onPress={() => Linking.openURL(brother.linkedin)}
              >
                <Text style={styles.linkedinButtonText}>View LinkedIn</Text>
              </TouchableOpacity>
            )
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
  sectionHeader: {
    backgroundColor: '#900807',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 18,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  sectionHeaderText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
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
  toggleButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeButton: {
    borderBottomWidth: 2, // Add an underline for active state
    borderBottomColor: '#0077B5', // Customize the active underline color
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Default text color
  },
  activeButtonText: {
    color: '#0077B5', // Change text color for active state
  },
  linkedinButton: {
    backgroundColor: '#0077B5',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  linkedinButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BrotherDetailScreen;

