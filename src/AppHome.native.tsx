import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  TextInput,
  SafeAreaView,
  Dimensions
} from 'react-native';
import { Wifi, ArrowRight, ShieldCheck, Zap } from 'lucide-react-native';

const { width } = Dimensions.get('window');

/**
 * OMADA Mobile App Adaptation (iOS/Android)
 * Using Brutalist Design Language
 */

export default function OmadaApp() {
  const [email, setEmail] = useState('');
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoBox}>
            <Wifi color="#00D2FF" size={24} />
          </View>
          <Text style={styles.logoText}>OMADA</Text>
        </View>

        {/* Hero Section */}
        <View style={styles.hero}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>AI CORE V4.2 ACTIVE</Text>
          </View>
          <Text style={styles.heroTitle}>ENTERPRISE WIFI {"\n"}THAT JUST WORKS.</Text>
          <Text style={styles.heroSub}>
            Self-healing mesh WiFi. 99.99% Uptime SLA. No controller hardware.
          </Text>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Enter business email"
              placeholderTextColor="#64748B"
              value={email}
              onChangeText={setEmail}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>START FREE TRIAL</Text>
              <ArrowRight color="white" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Features Preview */}
        <View style={styles.featureCard}>
          <View style={styles.featureIconBox}>
            <Zap color="#0A192F" size={24} />
          </View>
          <Text style={styles.featureTitle}>AI Spectrum Analysis</Text>
          <Text style={styles.featureDesc}>
            Real-time scanning and auto-selection of the cleanest channels.
          </Text>
        </View>

        <View style={[styles.featureCard, { marginTop: 20 }]}>
          <View style={[styles.featureIconBox, { backgroundColor: '#00D2FF' }]}>
            <ShieldCheck color="#0A192F" size={24} />
          </View>
          <Text style={styles.featureTitle}>Secure Edge</Text>
          <Text style={styles.featureDesc}>
            ISO 27001 certified security baked into every packet.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  logoBox: {
    width: 40,
    height: 40,
    backgroundColor: '#0A192F',
    borderWidth: 2,
    borderColor: '#00D2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#0A192F',
    marginLeft: 12,
    letterSpacing: -1,
  },
  hero: {
    marginBottom: 60,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderWidth: 2,
    borderColor: '#0A192F',
    backgroundColor: 'white',
    marginBottom: 16,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#0A192F',
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: '900',
    color: '#0A192F',
    lineHeight: 44,
    letterSpacing: -2,
    marginBottom: 20,
  },
  heroSub: {
    fontSize: 18,
    color: '#475569',
    lineHeight: 26,
    marginBottom: 32,
  },
  form: {
    width: '100%',
  },
  input: {
    height: 60,
    borderWidth: 2,
    borderColor: '#0A192F',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    height: 60,
    backgroundColor: '#0A192F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    shadowColor: '#00D2FF',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '900',
    fontSize: 16,
    marginRight: 10,
  },
  featureCard: {
    padding: 32,
    borderWidth: 2,
    borderColor: '#0A192F',
    backgroundColor: 'white',
    shadowColor: '#0A192F',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 8,
  },
  featureIconBox: {
    width: 48,
    height: 48,
    backgroundColor: '#F1F5F9',
    borderWidth: 2,
    borderColor: '#0A192F',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  featureTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#0A192F',
    marginBottom: 12,
  },
  featureDesc: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  }
});
