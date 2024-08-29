import type { PropsWithChildren } from 'react';
import { StyleSheet, useColorScheme, Text, View } from 'react-native';

import { ThemedView } from '@/components/ThemedView';

type Props = PropsWithChildren<{
    headerBackgroundColor?: { dark: string; light: string };
}>;

export default function RoundedImageButton({
    children,
}: Props) {
    const colorScheme = useColorScheme() ?? 'light';
    return (
        <ThemedView style={styles.container}>
            <Text style={styles.title}>Name</Text>
            <View>
                <Text style={styles.textColor}>25歳</Text>
                <Text style={styles.textColor}>友だち募集中</Text>
            </View>
            <Text style={styles.btnText}>お誘い</Text>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#fafa64',
        borderRadius: 20,
        padding: 10,
        marginLeft: '5%',
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowRadius: 4,
        shadowOpacity: 0.4,
        elevation: 10,
        position: 'absolute',
        top: 20,
        zIndex: 9999,
    },
    content: {
        flex: 1,
        padding: 32,
        overflow: 'hidden',
    },
    title: {
        paddingLeft: 5,
        fontSize: 28,
        color: '#5C5C5C',
        fontWeight: 'bold'

    },
    btnText: {
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        paddingBottom: 1,
        paddingTop: 1,
        paddingLeft: 11,
        paddingRight: 11,
        color: '#5C5C5C',
        fontWeight: 'bold',
        fontSize: 15,
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowRadius: 4,
        shadowOpacity: 0.4,
        elevation: 15,
    },
    textColor: {
        color: '#5C5C5C',
        fontWeight: 'bold',
    }
});
