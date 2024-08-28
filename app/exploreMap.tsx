import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function ExploreMap() {
    const [region, setRegion] = useState(getInitialState().region);
    const [markers, setMarkers] = useState({ latitude: 35.157545, longitude: 136.899904 });
    function getInitialState() {
        return {
            region: {
                latitude: 35.157545,
                longitude: 136.899904,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        };
    }

    function onRegionChangeComplete(region: any) {
        console.log(region);
        setRegion(region);
    }
    return (
        <View style={styles.container} >
            <MapView style={styles.map} region={region} onRegionChangeComplete={onRegionChangeComplete} onPress={(e) => setMarkers(e.nativeEvent.coordinate)}>
                {
                    <Marker coordinate={markers} />
                }
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});