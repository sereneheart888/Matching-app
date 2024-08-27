import { Image, StyleSheet, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FontAwesome } from '@expo/vector-icons';
import RoundedIconButton from '@/components/RoundedIconButton';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerImage={
        <ThemedView style={styles.headerTitleContainer}>
          <ThemedText type="title">RealSpot</ThemedText>
        </ThemedView>
      }
    >
      <ThemedView style={styles.titleContainer}>
        <RoundedIconButton btnText='このエリアで検索 '><FontAwesome name="refresh" size={17} style={styles.btnRefreshIcon} /></RoundedIconButton>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Image source={require('../../assets/images/user.png')} style={styles.imageStretch} />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  btnRefreshIcon: {
    paddingTop: 5
  },
  imageStretch: {
    width: '100%',
    height: '95%',
    resizeMode: 'stretch'
  }
});
