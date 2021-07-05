
import React, {useState, useEffect, useRef} from 'react'
import {SafeAreaView,View, Text} from 'react-native'
import MapView from 'react-native-maps'
import {styles} from './styles';
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions';

export function MapPage(){

//código do rapaz

const [origin, setOrigin]=useState(null)

useEffect(()=>{
    (async function(){
        const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
            let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
            setOrigin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02
            })
        } else {
            throw new Error('Location permission not granted');
        }
    })();
},[]);


//state of the art
    // const [origin, setOrigin]=useState(null)
    // const [errorMsg, setErrorMsg] = useState(null);


    // useEffect(() => {
    //     (async function(){
    //         const { status, permissions } = await Location.askAsync(Permissions.LOCATION_FOREGROUND);
    //         if (status === 'granted') {
    //             let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    //             setOrigin({
    //                 latitude: location.coords.latitude,
    //                 longitude: location.coords.longitude,
    //                 latitudeDelta: 0.01,
    //                 longitudeDelta: 0.01
    //         })
    //         }else {
    //           throw new Error('Location permission not granted');
    //         }
    //     })()
    // },[])


    return(
        <SafeAreaView style={styles.container}>
            <MapView 
            style={styles.map}
            initialRegion={origin}
            showsUserLocation={true}
            loadingEnabled={true}           
            />

            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    Olá mundo! 👋
                </Text>

                <Text style={styles.text}>
                {`Eu sou a pagina de mapas \n 🌎`}
                </Text>
            </View>
        </SafeAreaView>
    )

}
