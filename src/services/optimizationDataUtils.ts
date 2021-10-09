import { coordinates } from "../global/types/vroomTypes";

const Polyline = require("@mapbox/polyline");

function getGeometry(response) {
  return response?.routes[0]?.geometry;
}

//input handling

function getJobs(pointsCoordinates: coordinates[]) {
  return pointsCoordinates.map((pointCoordinates, index) => {
    return {
      id: index,
      service: 300,
      location: [pointCoordinates.longitude, pointCoordinates.latitude],
      time_windows: [[32400, 68400]],
    };
  });
}

function getVehcles(baseCoordinates: coordinates) {
  return [
    {
      id: 1,
      profile: "driving-car",
      start: [baseCoordinates.longitude, baseCoordinates.latitude],
      end: [baseCoordinates.longitude, baseCoordinates.latitude],
    },
  ];
}

export function setOptimizationInput(
  baseCoordinates: coordinates,
  pointsCoordinates: coordinates[]
) {
  if (baseCoordinates && pointsCoordinates) {
    const jobs = getJobs(pointsCoordinates);
    const vehicles = getVehcles(baseCoordinates);
    const options = {
      g: true,
    };
    console.log(
      "meu request:",
      JSON.stringify({
        jobs,
        vehicles,
        options,
      })
    );
    return {
      jobs,
      vehicles,
      options,
    };
  }
}

//response handling
//deprecated
export function getLatLngFromMyResponse(response) {
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

export function getOptimizedCoordinatesFromMyResponse(response) {
  if (response?.code === 0) {
    const latLng = Polyline.decode(getGeometry(response)).map((vertex: number[]) => {
      return {
        latitude: vertex[0],
        longitude: vertex[1],
      };
    });
    //console.log(latLng);
    return latLng;
  } else {
    return [];
  }
}
