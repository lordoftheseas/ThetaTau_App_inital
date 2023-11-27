import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import BrothersScreen from './components/BrothersScreen';
import LoginScreen from './components/login';
import EventsScreen from './components/EventsScreen';
import PillarsScreen from './components/PillarsScreen';
import StartMeetingPage from './components/StartMeetingPage';
import EnterMeetingCodePage from './components/EnterMeetingCodePage';
import PollingPage from './components/PollingPage';
import AboutPage from './components/AboutPage';
import BrotherDetailScreen from './components/BrotherDetailScreen';
import { DarkModeProvider } from './components/DarkModeContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="StartMeeting" component={StartMeetingPage} />
      <Stack.Screen name="EnterMeetingCode" component={EnterMeetingCodePage} />
      <Stack.Screen name="Polling" component={PollingPage} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <DarkModeProvider>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false, // This hides the header on all screens within the Tab Navigator
          tabBarStyle: { display: 'none' }, // This hides the tab bar itself
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Brothers" component={BrothersScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Pillars" component={PillarsScreen} />
        <Tab.Screen name="About" component={AboutPage} />
        <Tab.Screen name="BrotherDetail" component={BrotherDetailScreen} />

        {/* The AuthStack is now part of the Tab Navigator but with no visible tab due to tabBarButton */}
        <Tab.Screen
          name="Auth"
          component={AuthStack}
          
        />
      </Tab.Navigator>
    </NavigationContainer>
    </DarkModeProvider>
  );
};

export default App;