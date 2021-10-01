import React from "react";
import { Polyline } from "react-native-maps";
import { theme } from "../../../../global/styles/theme";

export function MapLines({ optimizedCoordinates }) {
  return (
    <Polyline
      //testar primeiro com lat: lng: e depois tentar inverter a ordem
      coordinates={optimizedCoordinates}
      strokeColor={theme.colors.secondary100} // fallback for when `strokeColors` is not supported by the map-provider
      //   strokeColors={[
      //     "#7F0000",
      //     "#00000000", // no color, creates a "long" gradient between the previous and next coordinate
      //     "#B24112",
      //     "#E5845C",
      //     "#238C23",
      //     "#7F0000",
      //   ]}
      strokeWidth={4}
      lineDashPattern={[5]}
    ></Polyline>
  );
}
