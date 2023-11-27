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
import BrotherData from '../data/brotherData.json';

const getImageSource = (name) => {
  switch(name) {
    case 'Aryaman Ghosh': return require('../assets/Brothers/aryaman_ghosh.png');
    case 'Gabriel Thornton': return require('../assets/Brothers/gabriel.png');
    // Add cases for each brother's name
    default: return require('../assets/Brothers/gabriel.png'); // A default image if no match is found
  }
};

const BrothersScreen = ({ navigation }) => {
  const onProfilePress = (brother) => {
    const brotherWithImageSource = {
      ...brother,
      imageSource: getImageSource(brother.name),
    };
    navigation.navigate('BrotherDetail', { brother: brotherWithImageSource });
  };

  return (
    <LinearGradient
      colors={['#ffffff', '#767676']}
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollViewContent}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Image source={require('../assets/back.png')} style={styles.backButtonImage} />
          </TouchableOpacity>
          <Image source={require('../assets/R.png')} style={styles.topImage} />

          {/* E-Council Header */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>E - Council</Text>
          </View>

          {BrotherData.brotherData.map((brother, index) => (
            <View key={index}>
              {index === 6 && (
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionHeaderText}>Brothers</Text>
                </View>
              )}
              <TouchableOpacity
                style={styles.profileContainer}
                onPress={() => onProfilePress(brother)}
              >
                <Image source={getImageSource(brother.name)} style={styles.profileImage} />
                <View style={styles.profileTextContainer}>
                  <Text style={styles.profileName}>{brother.name}</Text>
                  <Text style={styles.profileTitle}>{brother.title}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
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
    flex: 1,
    paddingHorizontal: 10,
  },
  topImage: {
    width: '100%',
    height: 70,
    resizeMode: 'contain',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
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
  profileTitle: {
    fontSize: 14,
    color: '#501315',
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
  sectionHeader: {
    backgroundColor: '#900807',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 18,
    borderRadius: 10,
    alignSelf: 'center',
  },
  sectionHeaderText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BrothersScreen;
