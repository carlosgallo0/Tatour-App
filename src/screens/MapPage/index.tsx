
import React, {useState} from 'react'
import {theme} from "../../global/styles/theme"


import {MapViewProps, Marker} from 'react-native-maps';
import {SafeAreaView, View, Text} from 'react-native'


import {Container, MapContainer,  Map, Title, Button, Icon} from './styles';

console.log('abriu o map page')

type Props = MapViewProps & {
    title: string;

}

export function MapPage({...rest}){
const [baseCoordinates, setBaseCoordinates] = useState<coordinates>();
const [newPointCoordinates, setNewPointCoordinates] = useState<coordinates>();
// const [basePosition, setBasePosition] = useState<position>() 
//const [newPointPosition, setNewPointPosition] = useState<position>();

const [pointsCoordinates, setPointsCoordinates] = useState<coordinates[]>([]);
interface coordinates {
    latitude:number,
    longitude:number
}
interface position {
    x:number,
    y:number
}

    const mockRegion = {
        latitude: -22.908,
        longitude: -43.17,
        latitudeDelta: 0.06,
        longitudeDelta:0.04,
        }

    const handleLongPressEvents = (nativeEvent) => {
        const pointCoordinates= nativeEvent.coordinate;
        //const position = nativeEvent.position;
        setBaseCoordinates(pointCoordinates)
        setPointsCoordinates([])

        console.log('baseCoordinates: ', baseCoordinates )
    }

    const handlePressEvents = (nativeEvent) => {
        const eventPointCoordinates= nativeEvent.coordinate;

        setNewPointCoordinates(eventPointCoordinates)
        //setNewPointPosition(position)

        //console.log(newPointCoordinates)

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
                 >
                     { baseCoordinates &&
                     <Marker
                        coordinate={baseCoordinates}
                        title='Base'
                    >
                        <View style={{backgroundColor:theme.colors.line, padding: 10, borderRadius: 10}}>
                            <Text>B</Text>
                        </View>
                    </Marker>
                    }
                    { newPointCoordinates &&
                        <Marker
                        coordinate={newPointCoordinates}
                        title='Job'
                    >
                        <View style={{backgroundColor:theme.colors.primary100, padding: 5, borderRadius: 10}}>
                            <Text>P</Text>
                        </View>
                    </Marker>

                    }

                 </Map>
                    <Button> 
                        <Icon name='map-marker-radius' 

                        />
                        <Title>Fazer a consulta</Title>
                </Button>
            </MapContainer> 
        </Container>
    )

}
