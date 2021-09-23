import React, { useEffect, useState } from "react";
import { theme } from "../../global/styles/theme";

import { MapViewProps, Marker, Polyline } from "react-native-maps";
import { View, Text } from "react-native";
import { Container, Map, Title, Button, Icon } from "./styles";
import { CustomMarker, CustomMarkerProps } from "../../components/CustomMarker";
import { MapLines } from "./components/MapLines";

import { coordinates } from "../../global/types/vroomTypes";

import {
  setOptimizationInput,
  getLatLngFromMyResponse,
} from "../../services/optimizationDataUtils";
import { postOptimizationAPI } from "../../services/api";

type Props = MapViewProps & {
  title: string;
};

export function MapPage({ ...rest }) {
  const [baseCoordinates, setBaseCoordinates] = useState<coordinates>();
  const [pointsCoordinates, setPointsCoordinates] = useState<coordinates[]>([]);
  const [optimizedPointsCoordinates, setOptimizedPointsCoordinates] = useState<coordinates[]>([]);
  const [optimizationResponse, setOptimizationResponse] = useState();

  const mockRegion = {
    latitude: -22.908,
    longitude: -43.17,
    latitudeDelta: 0.06,
    longitudeDelta: 0.04,
  };

  const mockOptimizedPointsCoordinates = [
    { latitude: -22.904589380614983, longitude: -43.20372596383095 },
    { latitude: -22.90370176860781, longitude: -43.21035571396352 },
    { latitude: -22.909536614724093, longitude: -43.20950377732515 },
    { latitude: -22.8973894875608, longitude: -43.20061560720205 },
    { latitude: -22.914174849474556, longitude: -43.1990971416235 },
  ];

  const handleMapLongPressEvents = (nativeEvent) => {
    setBaseCoordinates(nativeEvent.coordinate);
    setPointsCoordinates([]);
    setOptimizedPointsCoordinates([]);
  };

  const handleMapPressEvents = (nativeEvent) => {
    setPointsCoordinates([...pointsCoordinates, nativeEvent.coordinate]);
  };

  useEffect(() => {
    const newOptimizedPointsCoordinates = getLatLngFromMyResponse(optimizationResponse);

    setOptimizedPointsCoordinates(newOptimizedPointsCoordinates);
    console.log("newOptimizedPointsCoordinates", newOptimizedPointsCoordinates);
  }, [optimizationResponse]);

  async function handleOptimizationButtonPress(
    baseCoordinates: coordinates,
    pointsCoordinates: coordinates[]
  ) {
    const inputJson = setOptimizationInput(baseCoordinates, pointsCoordinates);

    const currentResponse = await postOptimizationAPI(inputJson, setOptimizationResponse);

    setOptimizationResponse(currentResponse);

    // await console.log("o currentResponse: ", currentResponse);
    // await setOptimizationResponse(currentResponse);
  }

  return (
    <Container>
      <Map
        {...rest}
        initialRegion={mockRegion}
        onPress={(e) => handleMapPressEvents(e.nativeEvent)}
        onLongPress={(e) => handleMapLongPressEvents(e.nativeEvent)}
      >
        <MapLines optimizedCoordinates={optimizedPointsCoordinates} />
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
      {baseCoordinates && pointsCoordinates && (
        <Button
          onPress={() => handleOptimizationButtonPress(baseCoordinates, pointsCoordinates)}
          // onLongPress={() => console.log("optimizationResponse: ", optimizationResponse)}
        >
          <Title>OTIMIZAR ROTA</Title>
        </Button>
      )}
    </Container>
  );
}
