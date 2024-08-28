import { Image, StyleSheet, Pressable } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import RoundedIconButton from '@/components/RoundedIconButton';
import SearchCondition from '@/components/searchCondition';

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
      <ThemedView style={styles.imageContainer}>
        <Image source={require('../../assets/images/user.png')} style={styles.imageStretch} />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Pressable onPress={() => console.log('BBBB')}>
          <SearchCondition btnText='給与で検索'><FontAwesome6 name="coins" size={24} color='#686868' /></SearchCondition>
        </Pressable>
        <SearchCondition btnText='性別で検索'><FontAwesome6 name="user-group" size={24} color='#686868' /></SearchCondition>
        <SearchCondition btnText='年齢で検索'><FontAwesome name="search" size={24} color='#686868' /></SearchCondition>
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
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 8,
  },
  btnRefreshIcon: {
    paddingTop: 5
  },
  imageContainer: {
    width: '100%'
  },
  imageStretch: {
    width: 300,
    height: 280,
    resizeMode: 'stretch'
  }
});
