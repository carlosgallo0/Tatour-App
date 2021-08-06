
import React, {useState} from 'react'
import {MapViewProps} from 'react-native-maps';
import {SafeAreaView} from 'react-native'


import {Container, MapContainer,  Map, Title} from './styles';

export function MapPage(...rest){
    const [point, setPoint] = useState();
    const [poinst, setPoints] = useState();



 const mockRegion = {
    latitude: -22.908,
    longitude: -43.17,
    latitudeDelta: 0.06,
    longitudeDelta:0.04,

    }

    const handleLongPressEvents = (nativeEvent) => {
        const pointCoordinare = nativeEvent.coordinate;
        const position = nativeEvent.position;
        console.log('hi', position)

    }

    return(
        <Container>
            <MapContainer >
                <Map {...rest}
                 initialRegion={mockRegion}
                 onLongPress={e => handleLongPressEvents(e.nativeEvent)}
                 />
            </MapContainer> 
                <Title>
                {`I 💖 bubu`}
                </Title>
        </Container>
    )

}
