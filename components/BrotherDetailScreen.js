import React, { useContext, useState} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DarkModeContext } from './DarkModeContext'; 

const BrotherDetailScreen = ({ route, navigation }) => {
  const { brother } = route.params;
  const { isDarkMode } = useContext(DarkModeContext); // Use the dark mode state
  const [showDescription, setShowDescription] = useState(true);
  const dynamicStyles = isDarkMode ? stylesDark : styles; // Choose styles based on dark mode
  const handleDescriptionPress = () => {
    setShowDescription(true);
  };

  const handleLinkedInPress = () => {
    setShowDescription(false);
  };

  return (
    <LinearGradient
    colors={isDarkMode ? ['#333' , '#000' ] : ['#ffffff', '#767676']}
      style={dynamicStyles.linearGradient}
    >
      <SafeAreaView style={styles.safeArea}>
        {/* Title and Back Button */}
        <View style={styles.titleContainernada}>
          <Text style={isDarkMode ? stylesDark.titleDarkNada : styles.titleNada}>Brothers</Text>
        </View>
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.navigate('Brothers')} style={styles.backButton}>
            <Image source={require('../assets/back.png')} style={styles.backButtonImage} />
          </TouchableOpacity>
      <ScrollView style={styles.container}>
        <Image source={brother.imageSource} style={styles.image} />
        <Text style={isDarkMode ? stylesDark.nameDark : styles.name}>{brother.name}</Text>
        <Text style={isDarkMode ? stylesDark.titleDark : styles.title}>{brother.title}</Text>

        {/* Toggle Buttons */}
        <View style={styles.toggleButtons}>
            <TouchableOpacity
              style={[styles.toggleButton, showDescription && styles.activeButton]}
              onPress={handleDescriptionPress}
            >
              <Text style={[isDarkMode ? stylesDark.toggleButtonText : styles.toggleButtonText, showDescription && styles.activeButtonText]}>
                Description
              </Text>
            </TouchableOpacity>

            {brother.linkedin && (
              <TouchableOpacity
                style={[styles.toggleButton, !showDescription && styles.activeButton]}
                onPress={handleLinkedInPress}
              >
                <Text style={[isDarkMode ? stylesDark.toggleButtonText : styles.toggleButtonText, !showDescription && styles.activeButtonText]}>
                  Social
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Content based on Toggle */}
          {showDescription ? (
            // Description Section
            <View style={styles.section}>
              <Text style={isDarkMode ? stylesDark.description : styles.description} >{brother.description}</Text>
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

          {/* Back Button
          <TouchableOpacity onPress={() => navigation.navigate('Brothers')} style={styles.backButton}>
            <Image source={require('../assets/back.png')} style={styles.backButtonImage} />
          </TouchableOpacity> */}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  titleNada: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  titleContainernada: {
    backgroundColor: '#900807',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 10,
    borderRadius: 10,
    alignSelf: 'stretch',
    height: 60,
  },
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
    marginBottom: 10,
    fontWeight: 'bold',
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
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 20,
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
    borderBottomWidth: 2,
    borderBottomColor: '#0077B5',
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  activeButtonText: {
    color: '#0077B5',
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
    top: 80,
    left: 20,
    zIndex: 10,
  },
  backButtonImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
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
    section: {
      marginBottom: 16,
    },
    description: {
      fontSize: 16,
      lineHeight: 24,
      textAlign: 'justify',
      marginBottom: 20,
    }
  // textBoxContainer: {
  //   alignItems: 'center', // Position the container absolutely
  //   top: 0, // Adjust this percentage to position the box right under the verse text
  //   bottom: 10,
  //   backgroundColor: '#828282', // Dark grey background
  //   padding: 10,
  //   borderRadius: 5,
  // },
  // textBoxText: {
  //   color: 'black', // Dark'black color
  //   textAlign: 'center',
  //   fontSize: 18, // Increased font size
  // },
  // linkedinButton: {
  //   alignSelf: 'center',
  //   bottom: 20,
  // },
  // linkedinButtonImage: {
  //   width: 75,  // Adjust size as needed
  //   height: 75, // Adjust size as needed
  //   marginTop: "20%",
  // },
});

const stylesDark = StyleSheet.create({
  titleDarkNada: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffa700',
    textAlign: 'center',
  },
  linearGradient: {
    flex: 1,
    backgroundColor: '#333', // Dark background
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#333', // Dark background
  },
  textBoxContainerDark: {
    alignItems: 'center', // Position the container absolutely
    top: 0, // Adjust this percentage to position the box right under the verse text
    bottom: 10,
    backgroundColor: '#0c0c0c', // Dark grey background
    padding: 10,
    borderRadius: 5,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#ffffff',
  },
  textBoxTextDark: {
    color: '#d8e2eb', // Dark red color
    textAlign: 'center',
    fontSize: 18, // Increased font size
  },
  nameDark: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: "#900807"
  },
  titleDark: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    color: '#ffa700',
    fontWeight: 'bold',
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default BrotherDetailScreen;

