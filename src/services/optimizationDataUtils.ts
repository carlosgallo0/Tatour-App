import { coordinates } from "../global/types/vroomTypes";
import { postOptimizationAPI } from "./api";

export function setOptimizationInput(
  baseCoordinates: coordinates,
  pointsCoordinates: coordinates[]
) {
  if (baseCoordinates && pointsCoordinates) {
    const jobs = pointsCoordinates.map((pointCoordinates, index) => {
      return {
        id: index,
        service: 300,
        location: [pointCoordinates.longitude, pointCoordinates.latitude],
        time_windows: [[32400, 68400]],
      };
    });
    const vehicles = [
      {
        id: 1,
        profile: "driving-car",
        start: [baseCoordinates.longitude, baseCoordinates.latitude],
        end: [baseCoordinates.longitude, baseCoordinates.latitude],
      },
    ];
    return {
      jobs,
      vehicles,
    };
  }
}

export function getLatLngFromMyResponse(response) {
  // debugger;
  if (response?.code === 0) {
    const latLng = response.routes[0].steps.map((step) => {
      return {
        latitude: step.location[1],
        longitude: step.location[0],
      };
    });
    return latLng;
  } else {
    return [];
  }
}
