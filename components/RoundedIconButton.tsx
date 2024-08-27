import type { PropsWithChildren } from 'react';
import { StyleSheet, useColorScheme, Text } from 'react-native';

import { ThemedView } from '@/components/ThemedView';

type Props = PropsWithChildren<{
    headerBackgroundColor?: { dark: string; light: string };
    btnText?: string;
}>;

export default function RoundedIconButton({
    children,
    btnText
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        backgroundColor: '#fafa64',
        borderRadius: 50,
        padding: 7,
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
        paddingLeft: 5,
        fontSize: 15
    }
});
