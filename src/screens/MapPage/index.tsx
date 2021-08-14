
import React, {useState} from 'react'
import {theme} from "../../global/styles/theme"


import {MapViewProps, Marker} from 'react-native-maps';
import {SafeAreaView, View, Text} from 'react-native'


import {Container, MapContainer,  Map, Title, Button, Icon} from './styles';

import { CustomMarker, CustomMarkerProps } from '../../components/CustomMarker';

import {coordinates, JobsProps} from '../../global/types/vroomTypes'

import { fetchApiCallExample } from '../../services/api'


type Props = MapViewProps & {
    title: string;
}





export function MapPage({...rest}){
const [baseCoordinates, setBaseCoordinates] = useState<coordinates>();

const [pointsCoordinates, setPointsCoordinates] = useState<coordinates[]>([]);

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


        setPointsCoordinates([...pointsCoordinates, nativeEvent.coordinate])
        console.log(pointsCoordinates)

        //console.log((Date.now() + Math.random()).toString())


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

                    {pointsCoordinates.map((item) => 
                        <Marker
                        key={Math.random()}
                        coordinate={item}
                        title={'test'}
                      >
                        <View style={{backgroundColor:theme.colors.primary100, padding: 5, borderRadius: 10}}>
                            <Text>P</Text>
                        </View>
                        </Marker>
                    )

                    }



                 </Map>
            </MapContainer> 
                    <Button
                        onPress = {fetchApiCallExample}
                    > 
                        <Icon name='map-marker-radius' 
                        />
                        <Title>Fazer a consulta</Title>
                </Button>
        </Container>
    )

}
