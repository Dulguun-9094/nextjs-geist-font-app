import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const SpeakingCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.label}>Speaking</Text>
          <Text style={styles.title}>Voice input with AI</Text>
        </View>
        <View style={styles.controls}>
          <View style={styles.controlItem}>
            <View style={styles.controlDot} />
            <Text style={styles.controlText}>Audio</Text>
          </View>
          <View style={styles.controlItem}>
            <View style={styles.controlDot} />
            <Text style={styles.controlText}>Reading</Text>
          </View>
          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.startButtonText}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    margin: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    maxWidth: 1200,
    marginHorizontal: 'auto',
    width: '100%',
  },
  content: {
    gap: 20,
  },
  header: {
    gap: 8,
  },
  label: {
    fontSize: 15,
    color: '#666',
    letterSpacing: -0.2,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1a1a1a',
    letterSpacing: -0.4,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
    marginTop: 4,
  },
  controlItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  controlDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#666',
  },
  controlText: {
    fontSize: 15,
    color: '#666',
    letterSpacing: -0.2,
  },
  startButton: {
    marginLeft: 'auto',
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 24,
  },
  startButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
    letterSpacing: -0.2,
  },
});
