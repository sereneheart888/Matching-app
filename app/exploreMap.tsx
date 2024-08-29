import React, { useEffect, useState } from 'react';
import MapView, { Callout } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Image, StyleSheet, Text, View } from 'react-native';

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

    const HERE_API_KEY = 'AIzaSyCUe0kufF120t7f4IVJRNvIcDjhkKlE6dY';

    function onRegionChangeComplete(region: any) {
        setRegion(region);
    }

    const userData = [
        { name: 'Yamada Yuki', age: 25, hobby: 'Music, Book...', image: <Image source={require('../assets/images/user.png')} style={styles.icon} /> },
        { name: 'Nasuyi Akiko', age: 22, hobby: 'TV, Resturant...', image: <Image source={require('../assets/images/user1.png')} style={styles.icon} /> },
        { name: 'Tomoda Hayaki', age: 23, hobby: 'Swimming, Game...', image: <Image source={require('../assets/images/user2.png')} style={styles.icon} /> },
        { name: 'Maya', age: 27, hobby: 'Dance, Yard...', image: <Image source={require('../assets/images/user3.png')} style={styles.icon} /> }]

    const [user, setUser] = useState(userData[0])
    const [userIndex, setUserIndex] = useState(0)
    // function getAddressFromCoordinates(region: any) {
    //     return new Promise((resolve, reject) => {
    //         fetch(
    //             'https://maps.googleapis.com/maps/api/geocode/json?address=' +
    //             region.latitude +
    //             ',' +
    //             region.longitude +
    //             '&key=' +
    //             HERE_API_KEY,
    //         )
    //             .then(response => response.json())
    //             .then(responseJson => {
    //                 console.log(responseJson);
    //                 if (responseJson.status === 'OK') {
    //                     resolve(responseJson?.results?.[0]?.formatted_address);
    //                 } else {
    //                     console.log("not found")
    //                     reject('not found');
    //                 }
    //             })
    //             .catch(error => {
    //                 reject(error);
    //             });
    //     });
    // }

    useEffect(() => {
        // getAddressFromCoordinates(region)
        const userNumber = Math.round(Math.random() * 3);
        if (userNumber !== userIndex) {
            setUserIndex(userNumber);
            setUser(userData[userNumber])
        }
    }, [region])

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={region}
                onRegionChangeComplete={onRegionChangeComplete}
                onPress={(e) => setMarkers(e.nativeEvent.coordinate)}
                showsUserLocation={true}
            >
                <Marker coordinate={markers} image={require('../assets/images/pin.png')}>
                    <Callout style={{ height: 70, width: 200 }} tooltip>
                        <View
                            style={{
                                flex: 2,
                                backgroundColor: '#ffff54',
                                borderRadius: 50,
                                flexDirection: 'row',
                            }}
                        >
                            <Text style={styles.iconPadding}>
                                {/* <Image source={require('../assets/images/user.png')} style={styles.icon} /> */}
                                {user.image}
                            </Text>
                            <View
                                style={{
                                    flexDirection: 'column',
                                    paddingTop: 5,
                                }}
                            >
                                <Text style={{ color: '#5c5c5c', fontWeight: '700' }}>{user.name}</Text>
                                <Text style={{ color: '#5c5c5c', fontWeight: '700' }}>{user.age}</Text>
                                <Text style={{ color: '#5c5c5c' }}>{user.hobby}</Text>
                            </View>
                            {/* </View> */}
                        </View>
                    </Callout>
                </Marker>
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
    icon: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    iconPadding: {
        width: '40%',
        height: '100%',
        marginTop: -10,
        paddingLeft: 20,
    }
});