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
    navigation.navigate('BrotherDetail', { brother });
  };

  return (
    <LinearGradient
      colors={['#ffffff', '#ffffff']}
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollViewContent}>
          <Image source={require('../assets/R.png')} style={styles.topImage} />

          {BrotherData.brotherData.map((brother, index) => (
            <TouchableOpacity
              key={index}
              style={styles.profileContainer}
              onPress={() => onProfilePress(brother)}
            >
              <Image source={getImageSource(brother.name)} style={styles.profileImage} />
              <View style={styles.profileTextContainer}>
                <Text style={styles.profileName}>{brother.name}</Text>
                <Text style={styles.profileTitle}>{brother.title}</Text>
              </View>
            </TouchableOpacity>
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
    color: 'grey',
  },
});

export default BrothersScreen;
