import type { PropsWithChildren } from 'react';
import { StyleSheet, useColorScheme, Text, Pressable } from 'react-native';

import { ThemedView } from '@/components/ThemedView';

type Props = PropsWithChildren<{
    headerBackgroundColor?: { dark: string; light: string };
    btnText?: string;
}>;

export default function SearchCondition({
    children,
    btnText,
}: Props) {
    const colorScheme = useColorScheme() ?? 'light';
    return (
        <ThemedView style={styles.container}>
            {children}
            <Text style={styles.btnText}>{btnText}</Text>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        borderRadius: 10,
        padding: 15,
        color: '#686868',
        marginBottom: 5,
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowRadius: 4,
        shadowOpacity: 0.4,
        elevation: 10,
    },
    content: {
        flex: 1,
        padding: 32,
        overflow: 'hidden',
    },
    btnText: {
        fontSize: 12,
        paddingTop: 5,
        color: '#686868',
    }
});
