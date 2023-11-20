// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import BrothersScreen from './components/BrothersScreen';
import LoginScreen from './components/login';
import EventsScreen from './components/EventsScreen';
import PillarsScreen from './components/PillarsScreen';
import StartMeetingPage from './components/StartMeetingPage'; // Add this import
import EnterMeetingCodePage from './components/EnterMeetingCodePage'; // Add this import
import PollingPage from './components/PollingPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="StartMeeting" component={StartMeetingPage} />
      <Stack.Screen name="EnterMeetingCode" component={EnterMeetingCodePage} />
      <Stack.Screen name="Polling" component={PollingPage} />
    </Stack.Navigator>
  );
};


const MeetingStack = () => {
  return (
    <Stack.Navigator initialRouteName="StartMeeting">
      <Stack.Screen name="StartMeeting" component={StartMeetingPage} />
      <Stack.Screen name="EnterMeetingCode" component={EnterMeetingCodePage} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Brothers" component={BrothersScreen} />
        {/* Exclude Meeting from the tab bar */}
        { <Tab.Screen name="Auth" component={AuthStack} /> }
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Pillars" component={PillarsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
