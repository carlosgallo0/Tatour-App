import React, { useEffect, useState } from "react";
import { theme } from "../../global/styles/theme";

import { MapViewProps, Marker } from "react-native-maps";
import { View, Text } from "react-native";
import { Container, Map, Title, Button, Icon } from "./styles";
import { CustomMarker, CustomMarkerProps } from "../../components/CustomMarker";
import { MapLines } from "./components/MapLines";

import { myExperimentMapStyles } from "../../utils/mapStyles";

import { coordinates } from "../../global/types/vroomTypes";

import {
  setOptimizationInput,
  getLatLngFromMyResponse,
  getOptimizedCoordinatesFromMyResponse,
} from "../../services/optimizationDataUtils";

import { postOptimizationAPI } from "../../services/api";

import { myPayloadExperiment } from "../../services/payload_example";

type Props = MapViewProps & {
  title: string;
};

export function MapPage({ ...rest }) {
  const [baseCoordinates, setBaseCoordinates] = useState<coordinates>();
  const [pointsCoordinates, setPointsCoordinates] = useState<coordinates[]>([]);
  const [optimizedPointsCoordinates, setOptimizedPointsCoordinates] = useState<coordinates[]>([]);
  const [optimizationResponse, setOptimizationResponse] = useState();

  useEffect(() => {
    const newOptimizedPointsCoordinates =
      getOptimizedCoordinatesFromMyResponse(optimizationResponse);

    setOptimizedPointsCoordinates(newOptimizedPointsCoordinates);
  }, [optimizationResponse]);

  const mockRegion = {
    latitude: -22.908,
    longitude: -43.17,
    latitudeDelta: 0.06,
    longitudeDelta: 0.04,
  };

  const handleMapLongPressEvents = (nativeEvent) => {
    setBaseCoordinates(nativeEvent.coordinate);
    setPointsCoordinates([]);
    setOptimizedPointsCoordinates([]);
  };

  const handleMapPressEvents = (nativeEvent) => {
    setPointsCoordinates([...pointsCoordinates, nativeEvent.coordinate]);
  };

  async function handleOptimizationButtonPress(
    baseCoordinates: coordinates,
    pointsCoordinates: coordinates[]
  ) {
    const inputJson = setOptimizationInput(baseCoordinates, pointsCoordinates);

    const currentResponse = await postOptimizationAPI(myPayloadExperiment);

    setOptimizationResponse(currentResponse);

    //console.log("o currentResponse: ", currentResponse);
    // await setOptimizationResponse(currentResponse);
  }

  return (
    <Container>
      <Map
        {...rest}
        initialRegion={mockRegion}
        onPress={(e) => handleMapPressEvents(e.nativeEvent)}
        onLongPress={(e) => handleMapLongPressEvents(e.nativeEvent)}
        customMapStyle={myExperimentMapStyles}
      >
        {optimizedPointsCoordinates && (
          <MapLines optimizedCoordinates={optimizedPointsCoordinates} />
        )}

        {baseCoordinates && (
          <Marker key={1} coordinate={baseCoordinates} title="Base">
            <View
              style={{
                backgroundColor: theme.colors.line,
                borderRadius: 20,
                width: 35,
                height: 35,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>B</Text>
            </View>
          </Marker>
        )}

        {pointsCoordinates.map((item) => (
          <Marker key={Math.random()} coordinate={item} title={"job"}>
            <View
              style={{
                backgroundColor: theme.colors.primary100,
                padding: 0,
                borderRadius: 20,
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>J</Text>
            </View>
          </Marker>
        ))}
      </Map>

      <Button onPress={() => handleOptimizationButtonPress(baseCoordinates, pointsCoordinates)}>
        <Title>REALIZAR EXPERIMENTO</Title>
      </Button>
    </Container>
  );
}
