import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StartMeetingPage = ({ route }) => {
  const { meetingCode } = route.params;

  return (
    <View style={styles.container}>
      <Text>Start Meeting Page</Text>
      <Text>Meeting Code: {meetingCode}</Text>
      {/* Add your content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StartMeetingPage;
