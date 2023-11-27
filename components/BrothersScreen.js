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
    case 'Marissa Gabbamonte': return require('../assets/Brothers/Marissa_Gabbamonte.jpeg');
    case 'Yuanjie Xu': return require('../assets/Brothers/yuanjie.png');
    case 'Karen Cheng': return require('../assets/Brothers/3Karen_Cheng.png');
    case 'Daniel Klein': return require('../assets/Brothers/daniel_klein.png');
    case 'Lior Adjudanpor': return require('../assets/Brothers/3Lior_Adjudanpor.png');
    case 'Matt Amato': return require('../assets/Brothers/matthew_amato.png');
    case 'William Bizier': return require('../assets/Brothers/3William_Bizier.png');
    case 'Lydia Cenac': return require('../assets/Brothers/lydia.png');
    case 'Elise Dougherty': return require('../assets/Brothers/eliseD.png');
    case 'Daniel Galdamez': return require('../assets/Brothers/daniel_galdamez.png');
    case 'Abel George': return require('../assets/Brothers/3Abel_George.png');
    case 'Max Gustin': return require('../assets/Brothers/max_gustin.png');
    case 'James Henry': return require('../assets/Brothers/jph.png');
    case 'Bushra Khan': return require('../assets/Brothers/3Bushra_Khan.png');
    case 'Ryan Khan': return require('../assets/Brothers/3Ryan_Khan.png');
    case 'Anna Kane': return require('../assets/Brothers/anna_kane.png');
    case 'Lana Kim': return require('../assets/Brothers/3Lana_Kim.jpg');
    case 'Jeffrey Kou': return require('../assets/Brothers/jeffrey_kou.png');
    case 'Edward Masalimov': return require('../assets/Brothers/edward.png');
    case 'Muhtasim Mushfiq': return require('../assets/Brothers/3Muhtasim_Mushfiq.png');
    case 'Isabella Nguyen': return require('../assets/Brothers/bella.png');
    case 'Carlos Pedraza': return require('../assets/Brothers/3Carlos_Pedraza.png');
    case 'Quentin Rotoli': return require('../assets/Brothers/3Quentin_Rotoli.png');
    case 'Adrian Sin': return require('../assets/Brothers/adrian_sin.png');
    case 'Rrucha Singh': return require('../assets/Brothers/rrucha_singh.png');
    case 'Justin Siwa': return require('../assets/Brothers/justin_siwa.png');
    case 'Chloe Tullius': return require('../assets/Brothers/chloe_tullius.png');
    case 'Michael VanAuken': return require('../assets/Brothers/3Michael_VanAuken.png');
    case 'Mathew Yeung': return require('../assets/Brothers/3Mathew_Yeung.png');
    case 'Jenny Zhu': return require('../assets/Brothers/jenny.png');
    case 'Hao Zhu': return require('../assets/Brothers/hao_zhu.png');
    
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
      colors={['#ffffff', '#ffffff']}
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
            <Text style={styles.sectionHeaderText}>E-Council</Text>
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
                  <Text style={styles.className}>{brother.className}</Text>
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
    marginTop: 10,
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
  titleContainernada: {
    backgroundColor: '#900807',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 10,
    borderRadius: 10,
    alignSelf: 'stretch',
    height: 60,
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
  titlenada: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  // linearGradient: {
  //   flex: 1,
  // },
  // safeArea: {
  //   flex: 1,
  // },
  // scrollViewContent: {
  //   flex: 1,
  //   paddingHorizontal: 10,
  // },
  // topImage: {
  //   width: '100%',
  //   height: 70, // Adjust as needed
  //   resizeMode: 'contain',
  // },
  // sectionHeader: {
  //   backgroundColor: '#900807',
  //   paddingHorizontal: 10,
  //   paddingVertical: 5,
  //   marginTop: 18,
  //   marginBottom: 10,
  //   borderRadius: 10,
  //   alignSelf: 'center',
  // },
  // sectionHeaderText: {
  //   color: 'white',
  //   fontSize: 18,
  //   fontWeight: 'bold',
  // },
  // profileContainer: {
  //   borderWidth: 1, // Set border width.
  //   flexDirection: 'row', // Arrange children in a row.
  //   borderColor: '#000', // Set border color.
  //   padding: 10, // Set padding to create space around the content.
  //   marginBottom: 10, // Set bottom margin to create space between the boxes.
  //   borderRadius: 5, // Optional: if you want rounded corners.
  // },
  // profileContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   paddingVertical: 10,
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#ccc',
  //   paddingHorizontal: 10, // Add horizontal padding for profile items
  // },
  // profileImage: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 50,
  //   marginRight: 10,
  // },
  // profileTextContainer: {
  //   justifyContent: 'center',
  // },
  // profileName: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  // },
  // profileRole: {
  //   fontSize: 14,
  //   color: 'grey',
  // },
  // homeButton: {
  //   position: 'absolute',
  //   alignSelf: 'center',
  //   bottom: 20,
  // },
  // homeButtonImage: {
  //   width: 100,
  //   height: 100,
  //   resizeMode: 'contain',
  // },
  // backButton: {
  //   position: 'absolute',
  //   top: 20,
  //   left: 20,
  //   zIndex: 1,
  // },
  // backButtonImage: {
  //   width: 40,
  //   height: 40,
  //   resizeMode: 'contain',
  // },
});


export default BrothersScreen;
