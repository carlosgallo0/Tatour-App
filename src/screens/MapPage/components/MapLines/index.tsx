import React from "react";
import { Polyline } from "react-native-maps";
import { Container } from "./styles";

export function MapLines({ optimizedCoordinates }) {
  //   console.log("o optimizedCoordinates: ", optimizedCoordinates);
  return (
    <Polyline
      //testar primeiro com lat: lng: e depois tentar inverter a ordem
      coordinates={optimizedCoordinates}
      strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
      //   strokeColors={[
      //     "#7F0000",
      //     "#00000000", // no color, creates a "long" gradient between the previous and next coordinate
      //     "#B24112",
      //     "#E5845C",
      //     "#238C23",
      //     "#7F0000",
      //   ]}
      strokeWidth={2}
      lineDashPattern={[1]}
    ></Polyline>
  );
}
