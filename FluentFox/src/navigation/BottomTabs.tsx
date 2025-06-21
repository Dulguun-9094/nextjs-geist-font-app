import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { View, Text, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

// Base placeholder screen component
const PlaceholderScreen = ({ title }: { title: string }) => (
  <View style={styles.screen}>
    <Text style={styles.placeholderText}>{title}</Text>
    <Text style={styles.comingSoonText}>Coming soon</Text>
  </View>
);

// Individual screen components
const ChatbotScreen = () => <PlaceholderScreen title="Chatbot" />;
const ProfileScreen = () => <PlaceholderScreen title="Profile" />;
const ToolsScreen = () => <PlaceholderScreen title="Tools" />;

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#1a1a1a',
        tabBarInactiveTintColor: '#666',
        tabBarLabelStyle: styles.tabBarLabel,
        headerShown: false,
        tabBarItemStyle: styles.tabBarItem,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Lessons',
        }}
      />
      <Tab.Screen 
        name="Chatbot" 
        component={ChatbotScreen}
        options={{
          tabBarLabel: 'Chatbot',
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
      <Tab.Screen 
        name="Tools" 
        component={ToolsScreen}
        options={{
          tabBarLabel: 'Tools',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  placeholderText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1a1a1a',
    letterSpacing: -0.5,
  },
  comingSoonText: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    letterSpacing: -0.2,
  },
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    height: 64,
    paddingBottom: 8,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: -0.2,
  },
  tabBarItem: {
    paddingTop: 8,
  },
});
