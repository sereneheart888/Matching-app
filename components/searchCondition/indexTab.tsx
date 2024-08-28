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
                    title: 'ssssdsdssd',
                    tabBarActiveBackgroundColor: Colors[colorScheme ?? 'light'].tabBackgroundColor,
                    tabBarInactiveBackgroundColor: Colors[colorScheme ?? 'light'].tabBackgroundColor,
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'cash' : 'cash-outline'} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
