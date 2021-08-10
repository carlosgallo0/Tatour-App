
import React, {useState} from 'react'
import {MapViewProps} from 'react-native-maps';
import {SafeAreaView} from 'react-native'


import {Container, MapContainer,  Map, Title, Button, Icon} from './styles';



interface coordinates {
    latitude:number,
    longitude:number
}
interface position {
    x:number,
    y:number
}




export function MapPage(...rest){
    const [baseCoordinates, setBaseCoordinates] = useState<coordinates>();
    const [basePosition, setBasePosition] = useState<position>() 

    const [newPointCoordinates, setNewPointCoordinates] = useState<coordinates>();
    const [newPointPosition, setNewPointPosition] = useState<position>();

    const [pointsCoordinates, setPointsCoordinates] = useState<coordinates>();



    const mockRegion = {
        latitude: -22.908,
        longitude: -43.17,
        latitudeDelta: 0.06,
        longitudeDelta:0.04,

        }

    const handleLongPressEvents = (nativeEvent) => {
        const pointCoordinates= nativeEvent.coordinate;
        const position = nativeEvent.position;

        setBaseCoordinates(pointCoordinates)
        setBasePosition(position)

        console.log(basePosition)

    }

    const handlePressEvents = (nativeEvent) => {
        const pointCoordinates= nativeEvent.coordinate;
        const position = nativeEvent.position;

        setNewPointCoordinates(pointCoordinates)
        setNewPointPosition(position)

        console.log(newPointCoordinates)

    }

    const renderIcon =( ) => {

    }

    return(
        <Container>
            <MapContainer >
                <Map {...rest}
                 initialRegion={mockRegion}
                 onPress={e => handlePressEvents(e.nativeEvent)}
                 onLongPress={e => handleLongPressEvents(e.nativeEvent)}
                 />
                 <Button> 
                    <Title>Fazer a consulta</Title>
                </Button>

                <Icon name='map-marker-radius' 
                // postition={newPointPosition}
                ></Icon>
            </MapContainer> 
        </Container>
    )

}
