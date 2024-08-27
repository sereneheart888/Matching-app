import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].icon,
          title: 'ホーム',
          tabBarActiveBackgroundColor: Colors[colorScheme ?? 'light'].tabBackgroundColor,
          tabBarInactiveBackgroundColor: Colors[colorScheme ?? 'light'].tabBackgroundColor,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].icon,
          title: 'トーク',
          tabBarActiveBackgroundColor: Colors[colorScheme ?? 'light'].tabBackgroundColor,
          tabBarInactiveBackgroundColor: Colors[colorScheme ?? 'light'].tabBackgroundColor,
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name='message' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].icon,
          title: 'マイページ',
          tabBarActiveBackgroundColor: Colors[colorScheme ?? 'light'].tabBackgroundColor,
          tabBarInactiveBackgroundColor: Colors[colorScheme ?? 'light'].tabBackgroundColor,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-o" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
