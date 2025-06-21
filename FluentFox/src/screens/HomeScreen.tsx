import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { SpeakingCard } from '../components/SpeakingCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <Header />
        <View style={styles.content}>
          <SpeakingCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    minHeight: '100%',
  },
  content: {
    flex: 1,
    paddingBottom: 24,
  },
});
